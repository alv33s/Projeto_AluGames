
let numeroDeJogosAlugados = 0;
let contagem = document.querySelectorAll('.dashboard__item__button--return')
contagem.forEach(() => {
    numeroDeJogosAlugados++;
    console.log(numeroDeJogosAlugados)
})




function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    if (botao.classList.contains('dashboard__item__button--return')) {
        confirm('Tem certeza que deseja devolver o jogo?');
    }
    alterandoImagem(imagem);
    alterandoBotao(botao);
    mudandoTextoBotao(botao);
}

function alterandoImagem(img) {
    if (img.classList.contains('dashboard__item__img--rented')) {
        img.classList.remove('dashboard__item__img--rented');
    } else {
        img.classList.add('dashboard__item__img--rented');
    }
}

function alterandoBotao(botao) {
    if (botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
    } else {
        botao.classList.add('dashboard__item__button--return');
    }
}

function mudandoTextoBotao(botao) {
    if (botao.classList.contains('dashboard__item__button--return')) {
        botao.innerHTML = 'Devolver';
    } else {
        botao.innerHTML = 'Alugar';
    }
}

let frase = [];
frase = prompt('escreva uma frase ou uma palavra');
console.log(frase);
let fraseAoContrario = [];


for (let j = 0; i <= frase.length; i++) {

    for (let i = frase.length; i >= 0; i--) {
        fraseAoContrario = frase[i];
        console.log(`${fraseAoContrario}`);
    }
}

