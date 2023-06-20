from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('data/', views.getDatas, name="datas"),
    path('data/<str:pk>/update', views.updateData, name="update"),
    path('data/<str:pk>/', views.getData, name="data"),
    path('data/<str:pk>/delete', views.deleteData, name="delete"),
]