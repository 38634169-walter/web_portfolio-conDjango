from django.db import models
from django.utils import timezone
from datetime import datetime

# Create your models here.

class Entrevistador(models.Model):
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    empresa = models.CharField(max_length=50)
    opinion = models.TextField()
    mejorar = models.TextField()
    fecha = models.DateField(default = datetime.now)

    def __str__(self):
        return f"{self.nombre} {self.apellido} {self.empresa}"

    class Meta:
        verbose_name = 'Entrevistador'
        verbose_name_plural = 'Entrevistadores'
        db_table = 'Entrevistadores'
        ordering = ['fecha']


