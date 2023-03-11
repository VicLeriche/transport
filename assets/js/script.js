const $content__text = document.querySelector('.content__text');
const $footer__tooltip = document.querySelector('.footer__tooltip');
const $icon__mobile = document.querySelector('.icon__mobile');
const $burger__menu = document.querySelector('#burger__menu');
const $menu = document.querySelector('#menu');

if($footer__tooltip) $footer__tooltip.innerHTML = $content__text.innerHTML;


if($icon__mobile){
    $icon__mobile.addEventListener("click",function(){
        $footer__tooltip.classList.toggle('open'); 
    })    
}

if($burger__menu){
    $burger__menu.addEventListener("click",function(){
        $burger__menu.classList.toggle('active'); 
        $menu.classList.toggle('active'); 
    })  
}
