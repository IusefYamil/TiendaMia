const burguer=document.querySelector('.boton__hamburguesa');
const cerrar=document.getElementById('nav__button-close');
const nav=document.querySelector('.nav');

burguer.addEventListener('click',function(){
    nav.classList.toggle('visible');
});
cerrar.addEventListener('click',function(){
    nav.classList.toggle('visible');
});