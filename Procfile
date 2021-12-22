release: python manage.py makemigrations --no-input
release: python manage.py migrate --no-input

web: gunicorn mango_commerce_project.wsgi --log-file -