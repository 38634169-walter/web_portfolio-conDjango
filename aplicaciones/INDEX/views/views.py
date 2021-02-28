from django.shortcuts import render,redirect
from django.http import HttpRequest, HttpResponse
from aplicaciones.INDEX.forms import FormularioEntrevistador


class Index(HttpRequest):
    def enviar_formulario(request):
        return render(request,"index.html",{
            'form': FormularioEntrevistador()
        })

    def procesar_formulario(request):
        formulario = FormularioEntrevistador(request.POST)
        if formulario.is_valid():
            formulario.save()
            return render(request,"index.html",{
                'form': FormularioEntrevistador(),
                'enviado':"enviado"
            })
        return redirect(to='INICIO:inicio')
    

