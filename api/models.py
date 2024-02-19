from django.db import models

# Creacion de tabla y sus columnas
class Proyecto(models.Model): 
    ESTADO_EN_CURSO = 'En Curso'
    ESTADO_STAND_BY = 'Stand By'
    ESTADO_TERMINADO = 'Terminado'

    ESTADOS_CHOICES = [
        (ESTADO_EN_CURSO, 'En Curso'),
        (ESTADO_STAND_BY, 'Stand By'),
        (ESTADO_TERMINADO, 'Terminado'),
    ]

    nomProyecto = models.CharField(max_length=255)
    nomCliente = models.CharField(max_length=255)
    ubicacion = models.CharField(max_length=255)
    estatus = models.CharField(max_length=20, choices=ESTADOS_CHOICES)

    def __str__(self):
        return self.nomProyecto #Esto nos permite ver al admin el nombre de cada tarea en la tabla