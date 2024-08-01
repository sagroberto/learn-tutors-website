import sys
import os
from dotenv import load_dotenv

sys.path.insert(0, "/var/www/flask_app")

# Cargar variables de entorno desde el archivo .env
dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
if os.path.exists(dotenv_path):
    load_dotenv(dotenv_path)

from index import app as application