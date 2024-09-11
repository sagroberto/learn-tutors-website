# Usar una imagen oficial de Python como imagen base
FROM python:3.10

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo de requerimientos en el contenedor a /app
COPY requirements.txt /app/

# Instalar los paquetes necesarios especificados en requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copiar todo el contenido del directorio actual al contenedor en /app
COPY . /app/

# Hacer que el puerto 5000 esté disponible para el mundo exterior a este contenedor
EXPOSE 5000

# Definir variables de entorno para evitar archivos .pyc y habilitar la salida sin buffer
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Comando para iniciar el servidor
CMD ["python", "index.py"]