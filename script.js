const capa = document.querySelector('.capa');
const pag01 = document.querySelector('.pag01');
const capaIniciar = document.querySelector('.capa-iniciar');
const escolha02 = document.querySelector('.escolha02');
const escolha03 = document.querySelector('.escolha03');
const escolha04 = document.querySelector('.escolha04')

const pag01avance01 = document.querySelector('.pag01-avance01');
const pag01return01 = document.querySelector('.pag01-return01');
const pag01Deitar = document.querySelector('.pag01-deitar');
const pag01Levantar = document.querySelector('.pag01-levantar');
const pag01Levantar02 = document.querySelector('.pag01-levantar02');

const botoes = document.querySelectorAll('button');


const resultadoAvance = document.querySelector('.resultado-avance');
const resultadoDeitar = document.querySelector('.resultado-deitar');
const resultadoLevantar = document.querySelector('.resultado-levantar');

// Uma variável para se transformar no botão apropriado
let botaoMomento = capaIniciar;

// Um evento na capa do livro que irá iniciar a leitura
capaIniciar.addEventListener('click', () => {

    capa.classList.add('sumir');
    pag01.classList.remove('sumir');
    pag01.classList.add('anima-blur');
    
});

// Evento que retorna à capa do livro
pag01return01.addEventListener('click', () => {

    location.reload();
    pag01.classList.add('sumir');
    capa.classList.remove('sumir');
     
});

// Avança para o segunndo parágrafo
pag01avance01.addEventListener('click', () => {

    resultadoAvance.classList.add('anima-blur');
    resultadoAvance.classList.remove('sumir');
    pag01return01.classList.add('anima-blur');
    
    
    setTimeout(() => {
        pag01return01.classList.add('sumir');
    }, 300);
    setTimeout(() => {
        escolha02.classList.add('anima-blur');
        escolha02.classList.remove('sumir');
    }, 1000);
   
});

// Executa o resultado ao escolher ficar na cama
pag01Deitar.addEventListener('click', () => {

    resultadoDeitar.classList.add('anima-blur');
    resultadoDeitar.classList.remove('sumir');
    pag01Levantar.classList.add('anima-blur');
    setTimeout(() => {
        pag01Levantar.classList.add('sumir');
    }, 300);
    setTimeout(() => {
        escolha03.classList.add('anima-blur');
        escolha03.classList.remove('sumir');
    }, 1000);

});

pag01Levantar.addEventListener('click', () => {

    resultadoLevantar.classList.add('anima-blur');
    resultadoLevantar.classList.remove('sumir');
    pag01Deitar.classList.add('anima-blur');
    setTimeout(() => {
        pag01Deitar.classList.add('sumir');
    }, 300);
    setTimeout(() => {
        escolha04.classList.add('anima-blur');
        escolha04.classList.remove('sumir');
    }, 1000);

});

pag01Levantar02.addEventListener('click', () => {

    resultadoLevantar.classList.add('anima-blur');
    resultadoLevantar.classList.remove('sumir');

    setTimeout(() => {
        escolha04.classList.add('anima-blur');
        escolha04.classList.remove('sumir');
    }, 1000);

});

// função para tocar efeito sonoro nos botoes
let audio = new Audio('./sound/ori01.mp3');

function tocarOri() {
    audio.pause()
        audio.currentTime = 0;
        setTimeout(() => {
            audio.play();
        }, 100);
}

botoes.forEach(botao => {

    botao.addEventListener('click', tocarOri);
    botao.addEventListener('mouseover', tocarOri);

});
