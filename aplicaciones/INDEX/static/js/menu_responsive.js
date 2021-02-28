$(document).ready(mostrar_menu);

let num=0;
let num2 = 1;

function mostrar_menu(){

    $('.iconoMenu').click(mostrar);

    $('.xMenu').click(ocultar);
    $('section').click(ocultar);
    $('footer').click(ocultar);


    $('#liToggle').click(sub_menu);

}

function mostrar(){
    $('.menu-principal').css({'top':'59px','transition':'all 1s'});
    $('.xMenu').css({'display':'block'});
    $('.iconoMenu').css({'display':'none'});
}

function ocultar(){
    if ($(window).width() <= 800){
        $('.menu-principal').css({'top':'-190%'});
    }
    $('.xMenu').css({'display':'none'});
    $('.iconoMenu').css({'display':'block'});

    
    if(num2 == 0){
        $('.sub-menu1').slideToggle();

        $('.flechaAbajo').css("display","block");
        $('.flechaDerecha').css("display","none");
        num2=1;
    }
}

function sub_menu(){
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
}