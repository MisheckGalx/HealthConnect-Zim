#!/bin/bash
# This script will makemigrations, migrate models, collect static files and create superuser if no superuser, then
# lastly run the HealthConnectZim server and open the link to the site
# The default superuser name and password are both admin & admin

# Project directory
PROJECT_DIR="hcz"

# Virtual environment directory
VENV_DIR=".venv"

# Install necessary dependencies
python3 -m pip install -r ./requirements.txt

# Check if the virtual environment directory exists
if [ ! -d "$VENV_DIR" ]
then
    # Create the virtual environment
    python3 -m venv $VENV_DIR
fi

# Activate virtual environment
source $VENV_DIR/bin/activate

# Navigate to Django project directory
cd $PROJECT_DIR

# Make migrations for Django app
python3 manage.py makemigrations $PROJECT_DIR

# Migrate the database
python3 manage.py migrate

# Collect static files
python3 manage.py collectstatic --noinput

# Create superuser if it doesn't exist
echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('admin', 'admin@healthconnectzim.co.zw', 'admin') if not User.objects.filter(username='admin').exists() else print('Superuser exists.')" | python3 manage.py shell

# Run the Django server
python3 manage.py runserver

# Run python code to replace link to the site in readme if it exists and, 
# add it if it doesnt exist
python3 ./update_readme.py

deactivate
