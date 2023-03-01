const capaIniciar = document.querySelector('.capa-iniciar');

function criarBlur() {
    capaIniciar.classList.add('anima-blur');
    setTimeout(() => {
        capaIniciar.classList.remove('anima-blur');
    }, 350);
}

capaIniciar.addEventListener('mouseover', criarBlur());