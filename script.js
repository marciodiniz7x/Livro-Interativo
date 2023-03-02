const capa = document.querySelector('.capa');
const pag01 = document.querySelector('.pag01');
const capaIniciar = document.querySelector('.capa-iniciar');


const pag01avance01 = document.querySelector('.pag01-avance01');
const pag01return01 = document.querySelector('.pag01-return01');
const escolha02 = document.querySelector('.escolha02');
const pag01Deitar = document.querySelector('.pag01-deitar');
const escolha03 = document.querySelector('.escolha03');

const resultadoAvance = document.querySelector('.resultado-avance');
const resultadoDeitar = document.querySelector('.resultado-deitar');
const resultadoLevantar = document.querySelector('resultado-levantar');

// Uma variável para se transformar no botão apropriado
let botaoMomento = capaIniciar;

// Evento que retorna à capa do livro
pag01return01.addEventListener('click', () => {

    location.reload();
    pag01.classList.add('sumir');
    capa.classList.remove('sumir');
     
});

// Um evento na capa do livro que irá iniciar a leitura
capaIniciar.addEventListener('click', () => {

    capa.classList.add('sumir');
    pag01.classList.remove('sumir');
    pag01.classList.add('anima-blur');
    
});

pag01avance01.addEventListener('click', () => {

    resultadoAvance.classList.add('anima-blur');
    resultadoAvance.classList.remove('sumir');
    setTimeout(() => {
        escolha02.classList.add('anima-blur');
        escolha02.classList.remove('sumir');
    }, 1000);
   
});

pag01Deitar.addEventListener('click', () => {

    resultadoDeitar.classList.add('anima-blur');
    resultadoDeitar.classList.remove('sumir');
    setTimeout(() => {
        escolha03.classList.add('anima-blur');
        escolha03.classList.remove('sumir');
    }, 1000);

})