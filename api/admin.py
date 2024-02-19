from django.contrib import admin
from .models import Proyecto #Importamos el modelo

# Registramos el modelo/tabla para que el admin pueda ver los modelos existentes

admin.site.register(Proyecto)