from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('hubAPI.urls')),
    path('', lambda request: JsonResponse({"message": "Welcome to DailyCents API"})),
]