$(document).ready(intercambiar_textos);

var num3 = 1;

function intercambiar_textos() {

    setInterval(function () {
        
        if (num3 == 1) {
            $('.dialogo').html("Un gusto verte");
            num3 = 0;
        }
        else {
            $('.dialogo').html("Saludos");
            num3 = 1;
        }

    }, 2000);
}
