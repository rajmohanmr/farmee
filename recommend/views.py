import logging
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
import joblib
import pandas as pd
import os
from django.core.files.storage import default_storage
from django.conf import settings
import tensorflow as tf
from tensorflow.keras.preprocessing import image
import numpy as np
import json

logger = logging.getLogger(__name__)

# Load machine learning models and dictionaries
minmaxscaler = joblib.load(r'C:\Users\rajmo\Desktop\Project\myproject\recommend\ml_models\minmaxscaler.pkl')  
crop_model = joblib.load(r'C:\Users\rajmo\Desktop\Project\myproject\recommend\ml_models\model.pkl')   
fertmodel= joblib.load(r'C:\Users\rajmo\Desktop\Project\myproject\recommend\ml_models\fertrec.pkl')
fertname_dict=joblib.load(r'C:\Users\rajmo\Desktop\Project\myproject\recommend\ml_models\fertname_dict.pkl')

disease_model_path = os.path.join(settings.BASE_DIR, 'models', r"C:\Users\rajmo\Desktop\Project\myproject\recommend\ml_models\diseasedetect.keras")
disease_dict_path = os.path.join(settings.BASE_DIR, 'models', r"C:\Users\rajmo\Desktop\Project\myproject\recommend\ml_models\class_names (1).json")
disease_model = tf.keras.models.load_model(disease_model_path)

with open(disease_dict_path, 'r') as f:
    disease_dict = json.load(f)

# Helper function to generate JWT tokens
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

# User Signup API
@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    try:
        username = request.data.get('username')
        password = request.data.get('password')
        if User.objects.filter(username=username).exists():
            return JsonResponse({'error': 'Username already taken'}, status=400)
        user = User.objects.create_user(username=username, password=password)
        user.save()
        return JsonResponse({'message': 'Signup successful'}, status=201)
    except Exception as e:
        logger.error("Unexpected error during signup: %s", str(e))
        return JsonResponse({'error': str(e)}, status=400)

# User Login API
@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user is not None:
        tokens = get_tokens_for_user(user)
        return JsonResponse({'tokens': tokens, 'message': 'Login successful'}, status=200)
    return JsonResponse({'error': 'Invalid credentials'}, status=401)

# Crop Recommendation API (Requires Authentication)
@api_view(['POST'])
@permission_classes([AllowAny])
def recommend_crop(request):
    logger.info("Received request with data: %s", request.data)
    
    required_fields = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']
  
    for field in required_fields:
        if field not in request.data:
            return JsonResponse({'error': f'Missing required field: {field}'}, status=400)
    
    try:
        N = float(request.data['N'])
        P = float(request.data['P'])
        K = float(request.data['K'])
        temperature = float(request.data['temperature'])
        humidity = float(request.data['humidity'])
        ph = float(request.data['ph'])
        rainfall = float(request.data['rainfall'])

        input_features = pd.DataFrame([[N, P, K, temperature, humidity, ph, rainfall]], 
                                      columns=['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall'])
        
        input_scaled = minmaxscaler.transform(input_features)
        prediction = crop_model.predict(input_scaled)[0]
        crop_dict = {
            1: 'Rice', 2: 'Maize', 3: 'Pigeonpeas', 4: 'Mungbean', 5: 'Blackgram', 
            6: 'Banana', 7: 'Mango', 8: 'Papaya', 9: 'Coconut', 10: 'Cotton', 11: 'Coffee'
        }
        predicted_crop = crop_dict.get(prediction, 'Unknown crop')

        return JsonResponse({'crop': predicted_crop})
    
    except ValueError as e:
        logger.error("ValueError: %s", str(e))
        return JsonResponse({'error': 'Invalid input values, please ensure all inputs are numbers'}, status=400)
    
    except Exception as e:
        logger.error("Unexpected error: %s", str(e))
        return JsonResponse({'error': str(e)}, status=400)

# Fertilizer Prediction API (Requires Authentication)
@api_view(['POST'])
def predict_fertilizer(request):
    try:
        data = request.data
        
        input_data = [
            float(data['temperature']),
            float(data['humidity']),
            float(data['moisture']),
            float(data['soilType']),
            float(data['cropType']),
            float(data['nitrogen']),
            float(data['phosphorous']),
            float(data['potassium'])
        ]

        prediction = fertmodel.predict([input_data])[0]
        fertilizer = fertname_dict[prediction]
        
        return Response({"fertilizer": fertilizer})
    
    except ValueError as e:
        logger.error("ValueError: %s", str(e))
        return JsonResponse({'error': 'Invalid input values, please ensure all inputs are numbers'}, status=400)
    
    except Exception as e:
        logger.error("Unexpected error: %s", str(e))
        return JsonResponse({'error': str(e)}, status=400)
     
# Disease Detection API (Requires Authentication)
@api_view(['POST'])
@permission_classes([AllowAny])
def detect_disease(request):
    try:
        file_obj = request.data['image']
        file_path = os.path.join(settings.UPLOADED_IMAGES_PATH, file_obj.name)
        if not os.path.exists(settings.UPLOADED_IMAGES_PATH): 
            os.makedirs(settings.UPLOADED_IMAGES_PATH) 
        default_storage.save(file_path, file_obj)
        
        img = image.load_img(file_path, target_size=(224, 224))
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0) / 255.0

        prediction = disease_model.predict(img_array)
        predicted_class = np.argmax(prediction[0])
        
        detected_disease = disease_dict.get(str(predicted_class), 'Unknown disease')
        return JsonResponse({'result': f"The detected disease is: {detected_disease}"})
    
    except ValueError as e:
        logger.error("ValueError: %s", str(e))
        return JsonResponse({'error': 'Invalid input values, please ensure all inputs are numbers'}, status=400)
    
    except Exception as e:
        logger.error("Unexpected error: %s", str(e))
        return JsonResponse({'error': str(e)}, status=400)
