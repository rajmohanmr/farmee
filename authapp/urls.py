# authapp/urls.py
from django.urls import path
from . import views  # Import views from authapp

urlpatterns = [
 path('signup/', views.signup, name='signup'),
 path('login/', views.login, name='login'),
]
