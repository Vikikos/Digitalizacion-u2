let palabras = document.querySelectorAll('.bottonDefinicion');

for (const div of palabras) {
    div.addEventListener('click',function(){
    let definicion = this.querySelector('.div__definicion');
    const estilos = window.getComputedStyle(definicion);
    if(estilos.display == 'none'){
        definicion.classList.add('mostrar');
        definicion.classList.remove('ocultar');
    }else{
        definicion.classList.add('ocultar');
        definicion.classList.remove('mostrar');
    }
});
}