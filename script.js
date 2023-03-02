const capa = document.querySelector('.capa');
const pag01 = document.querySelector('.pag01');
const capaIniciar = document.querySelector('.capa-iniciar');
const pag01avance01 = document.querySelector('.pag01-avance01');
const pag01return01 = document.querySelector('.pag01-return01');

// Uma variável para se transformar no botão apropriado
let botaoMomento = capaIniciar;


// Uma função que irá avançar a página
capaIniciar.addEventListener('click', () => {

    capa.classList.add('sumir');
    pag01.classList.remove('sumir');
    
});

pag01return01.addEventListener('click', () => {

    pag01.classList.add('sumir');
    capa.classList.remove('sumir');
   
});