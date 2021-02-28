
let animacion1 = document.querySelectorAll('.animacion1');
let animacion2 = document.querySelectorAll('.animacion2');
let animacion3 = document.querySelectorAll('.animacion3');
let animacion4 = document.querySelectorAll('.animacion4');

function animaciones(){

    let scrollTop = document.documentElement.scrollTop;

    for (var i=0 ; i<animacion1.length + animacion2.length + animacion3.length + animacion4.length; i++){
        let scrollAnimation1 = animacion1[i].offsetTop;
        let scrollAnimation2 = animacion2[i].offsetTop;
        let scrollAnimation3 = animacion3[i].offsetTop;
        let scrollAnimation4 = animacion4[i].offsetTop;

        if (scrollAnimation1 - 800 < scrollTop){
            animacion1[i].style.opacity=1;
            animacion1[i].classList.add("add1");
        }
        if (scrollAnimation2 - 800 < scrollTop){
            animacion2[i].style.opacity=1;
            animacion2[i].classList.add("add2");
        }
        if (scrollAnimation3 - 800 < scrollTop){
            animacion3[i].style.opacity=1;
            animacion3[i].classList.add("add3");
        }
        if (scrollAnimation4 - 800 < scrollTop){
            animacion4[i].style.opacity=1;
            animacion4[i].classList.add("add4");
        }

    }

}


window.addEventListener('scroll',animaciones);

