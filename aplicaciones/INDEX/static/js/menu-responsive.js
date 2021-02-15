$(document).ready(mostrar_menu);

let num2 = 1;

function mostrar_menu(){

    /* icono hamburguesa */ 

    $('.iconoMenu').click(function(){
        $('.menu-principal').animate({
            top:'59px'
        });
        $('.iconoMenu').toggleClass("remove");
        $('.xMenu').toggleClass("show");
    });

    /* icono x */ 

    $('.xMenu').click(function(){
        
        $('.menu-principal').animate({
            top:'-190%'
        });

        $('.xMenu').toggleClass('show');
        $('.iconoMenu').toggleClass('remove');

        /* ocultar submenu y volver flechas */ 
        if(num2 == 0){
            $('.sub-menu1').slideToggle();

            $('.flechaAbajo').css("display","block");
            $('.flechaDerecha').css("display","none");
            num2=1;
        }
    });    


    /* sub menu */

    $('#liToggle').click(function(){
        $(this).children('.sub-menu1').slideToggle();

        if(num2 == 1){
            $('.flechaAbajo').css("display","none");
            $('.flechaDerecha').css("display","block");
            num2=0;
        }
        else{
            $('.flechaAbajo').css("display","block");
            $('.flechaDerecha').css("display","none");
            num2=1;
        }

    });
}