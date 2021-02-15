$(document).ready(intercambiar_texto);


var num = 1;

function intercambiar_texto(){
    setInterval(function(){
        if (num == 1){
            $('.texto-dialogo').html("Un gusto verte");
            num=0;
        }
        else{
            $('.texto-dialogo').html("Saludos");
            num=1;
        }

    },2000);
}