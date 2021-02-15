from django import forms
from .models import Entrevistador
#"fecha": forms.DateInput(attrs={"type":"date"})

class FormularioEntrevistador(forms.ModelForm):
    class Meta:
        model = Entrevistador    
        fields='__all__'
        widgets = {
            "nombre": forms.TextInput(attrs={"class":"input1"}),
            "apellido": forms.TextInput(attrs={"class":"input2"}),
            "empresa": forms.TextInput(attrs={"class":"input3"}),
            "fecha": forms.DateInput(attrs={"class":"input4","type":"date"}),
            "opinion": forms.Textarea(attrs={"class":"input5","cols":"30","rows":"10"}),
            "mejorar": forms.Textarea(attrs={"class":"input6"})
            }





