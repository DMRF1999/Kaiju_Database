from django.urls import path
from django.conf import settings 
from django.conf.urls.static import static
from . import views 

urlpatterns = [
    path('', views.about),
    path('about/', views.about, name='about'),
    path('kaijus/', views.kaiju_index, name='index'),
    path('kaijus/<int:kaiju_id>/', views.kaiju_detail, name='detail'),
]