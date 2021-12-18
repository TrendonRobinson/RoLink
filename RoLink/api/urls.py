from django.urls import path
from . import views

urlpatterns = [
    path('product', views.ProductView.as_view())
    # path('', views.index, name='index'),
    # path('register', views.register)
]


# python3 manage.py makemigrations
# python3 manage.py migrate
# python manage.py runserver
