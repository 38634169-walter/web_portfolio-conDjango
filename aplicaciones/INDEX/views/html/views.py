from django.shortcuts import render,redirect
from django.http import HttpRequest, HttpResponse

class Html(HttpRequest):

    def mas_trabajos(request):
        return render(request,"mas-trabajos.html")
    
    def contacto(request):
        return render(request,"contacto.html")

    def info(request):
        return render(request,"info.html")
