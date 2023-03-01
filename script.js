const capaIniciar = document.querySelector('.capa-iniciar');

function criarBlur() {
    capaIniciar.classList.add('anima-blur');
    setTimeout(() => {
        capaIniciar.classList.add('anima-blur');
    }, 300);
}

