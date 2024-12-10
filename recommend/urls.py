# recommend/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('recommend-crop/', views.recommend_crop, name='recommend_crop'),
    path('predict_fertilizer/',views.predict_fertilizer,name='predict_fertilizer'),
    path('detect_disease/', views.detect_disease, name='detect_disease'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
]
