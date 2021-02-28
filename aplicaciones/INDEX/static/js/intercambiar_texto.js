$(document).ready(intercambiar_textos);

var num = 1;

function intercambiar_textos() {

    setInterval(function () {
        if (num == 1) {
            $('.dialogo').html("Un gusto verte");
            num = 0;
        }
        else {
            $('.dialogo').html("Saludos");
            num = 1;
        }

    }, 2000);
}
