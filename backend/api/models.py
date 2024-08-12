from django.db import models

# Create your models here.
class Students(models.Model):
    firt_name = models.CharField(max_length=100) # nombre
    last = models.CharField(max_length=100) # apellido
    age = models.IntegerField() # edad
    gender= models.CharField(max_length=6) # genero
    grade = models.CharField(max_length=2) # calificación
    address = models.TextField() # dirección
    contact_number = models.CharField(max_length=15) # número de telefono
    
    def __str__(self):        
        return self.firt_name