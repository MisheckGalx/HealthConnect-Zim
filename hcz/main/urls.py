from django.urls import path

from . import views

urlpatterns = [
    path("", views.Home.view, name="home"),
    path("about", views.About.view, name="about"),
    path("services", views.Services.view, name="services"),
]
