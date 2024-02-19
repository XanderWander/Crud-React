from rest_framework import viewsets
from .serializer import ProyectoSerializer
from .models import Proyecto

# Creamos una vista donde se podra realizar las funciones del CRUD

class ProyectoViewSet(viewsets.ModelViewSet): 
    queryset = Proyecto.objects.all()
    serializer_class = ProyectoSerializer