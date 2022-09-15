from django.urls import path, include

accounts_urlpatterns = [
    path(r'api/v1/', include('djoser.urls')),
    path(r'api/v1/', include('djoser.urls.authtoken')),
]