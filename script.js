const capa = document.querySelector('.capa');
const pag01 = document.querySelector('.pag01');
const capaIniciar = document.querySelector('.capa-iniciar');
const paragrafos = document.querySelectorAll('p');

const pag01avance01 = document.querySelector('.pag01-avance01');
const pag01return01 = document.querySelector('.pag01-return01');

const resultadoAvance = document.querySelector('.resultado-avance');

// Uma variável para se transformar no botão apropriado
let botaoMomento = capaIniciar;

// Evento que retorna à capa do livro
pag01return01.addEventListener('click', () => {

    pag01.classList.add('sumir');
    capa.classList.remove('sumir');
    paragrafos.forEach((paragrafo => {
       paragrafo.classList.add('sumir') 
    }));
   
});


// Um evento na capa do livro que irá iniciar a leitura
capaIniciar.addEventListener('click', () => {

    capa.classList.add('sumir');
    pag01.classList.remove('sumir');
    
});

pag01avance01.addEventListener('click', () => {

    resultadoAvance.classList.remove('sumir');
   
});