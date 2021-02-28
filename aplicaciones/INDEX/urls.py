from django.urls import path
from .views.views import *
from .views.html.views import *


app_name = 'INICIO'
urlpatterns = [
    #INICIO
    path("",Index.enviar_formulario,name="inicio"),
    path("procesar",Index.procesar_formulario,name="procesar"),
    #HTMLS
    path("mas-trabajos",Html.mas_trabajos,name="mas-trabajos"),
    path("contacto",Html.contacto,name="contacto"),
    path("info",Html.info, name="info"),
]
