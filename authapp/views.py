from django.contrib.auth import authenticate
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from .models import Profile
from rest_framework_simplejwt.tokens import RefreshToken

# Helper function to generate JWT tokens
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    try:
        username = request.data.get('username')
        phone = request.data.get('phone')
        password = request.data.get('password')
        
        if not username or not phone or not password:
            return JsonResponse({'error': 'Missing required fields'}, status=400)
        
        if User.objects.filter(username=username).exists():
            return JsonResponse({'error': 'Username already taken'}, status=400)
        if Profile.objects.filter(phone=phone).exists():
            return JsonResponse({'error': 'Phone number already registered'}, status=400)

        user = User.objects.create_user(username=username, password=password)
        Profile.objects.create(user=user, phone=phone)
        return JsonResponse({'message': 'Signup successful'}, status=201)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)

@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    try:
        user = User.objects.get(username=username)
        user = authenticate(username=user.username, password=password)
    except User.DoesNotExist:
        user = None

    if user is not None:
        tokens = get_tokens_for_user(user)
        return JsonResponse({'tokens': tokens, 'message': 'Login successful'}, status=200)
    else:
        return JsonResponse({'error': 'Invalid credentials'}, status=401)
