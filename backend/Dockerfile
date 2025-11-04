# Usamos Python 3.12
FROM python:3.12-slim

# Variables de entorno para Django
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Instalamos dependencias
RUN apt-get update && apt-get install -y build-essential libpq-dev curl

# Directorio de trabajo
WORKDIR /app

# Copiamos requirements y los instalamos
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copiamos el resto del backend
COPY . .

# Exponemos el puerto de Django
EXPOSE 8000

# Comando por defecto
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
