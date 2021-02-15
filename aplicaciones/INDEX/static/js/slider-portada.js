$(document).ready(slider_functions);


function slider_functions(){
    var indice = 0;
    $('.paginacion li').css("background","white");
    $('.paginacion li').eq(indice).css("background","rgb(255, 174, 0)");

    $('.paginacion li').click(function (){
        
        indice = $(this).index();
        $('.paginacion li').css("background","white");
        $('.paginacion li').eq(indice).css("background","rgb(255, 174, 0)");

        $('.slider').css("display","none");
        $('.slider').eq(indice).css("display","block");
    })

    $('.flecha-slider-derecha').click(function(){
        indice ++;
        if(indice > 2){
            indice = 0;
        }
        
        $('.slider').css("display","none");
        $('.slider').eq(indice).css("display","block");

        $('.paginacion li').css("background","white");
        $('.paginacion li').eq(indice).css("background","rgb(255, 174, 0)");

    })

    $('.flecha-slider-izquierda').click(function(){
        indice --;
        if (indice < 0){
            indice=2;
        }
        $('.slider').css("display","none");
        $('.slider').eq(indice).css("display","block");

        $('.paginacion li').css("background","white");
        $('.paginacion li').eq(indice).css("background","rgb(255, 174, 0)");
    })

    setInterval(function(){
        indice ++;
        if(indice > 2 ){
            indice=0;
        }
        $('.slider').css("display","none");
        $('.slider').eq(indice).css("display","block");

        $('.paginacion li').css("background","white");
        $('.paginacion li').eq(indice).css("background","rgb(255, 174, 0)");
    },15000);

}