# APP CEPET - Consulta UF
---
## Descripción
Aplicación de consulta del valor de la UF en pesos chilenos dependiendo de la fecha solicitada
---
### Tecnologías usadas

#### Frontend
* Vite
* React
* JavaScript
* Tailwind

#### Backend
* Django
* Python
---
#### Directorio
~~~
cepet-app2/
├── backend/                  # Carpeta con Django
│   ├── api/
│   ├── core/
│   ├── db.sqlite3            # Base de datos
│   ├── Dockerfile
│   ├── manage.py
│   └── requirements.txt
├── docker-compose.yml        # Crear contener docker
├── frontend/                 # Aplicación con Vite + React
│   └── react-app/
└── README.md                 # Documentación
~~~
---
### Iniciar API Django

1. Entra a la carpeta de backend/
2. Ejecutar desde terminal:
~~~
python3 manage.py runserver
~~~
* Se ejecutara en el Puerto 8000 normalmente
---
### Iniciar Frontend

1. Entra a la carpeta de frontend/react-app/
2. Ejecutar desde terminal:
~~~
npm run dev
~~~

### Docker

1. Iniciar docker desde su máquina (linux o windows)
2. Desde la carpeta principal (cepet-app2) ejecutar:
~~~
docker-compose up --build
~~~
3. Buscar el contenerdor generado y abrir el url local del frontend

