let order = [];
let clicked = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Cria ordem aleatoria de cores.
let aleatorioOrdem = () => {
    let colorOrder =Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clicked = [];

    for ( let i in order){
        let elementColor = createColorElement(color[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Acende a próxima cor
let lightColor = (element, number) =>{
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Checar os botões clicados são so mesmos da ordem gerada no jogo.
let checkOrder = () => {
    for(let i in clicked){
        if(clicked[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clicked.length == order.length){
        alert('Pontuação:  ${score} \nVoçê acertou! Iniciando o próximo nível!');
        nextLevel();
    }
}

//Função para o clique do usuário.

let click = (color) => {
    clicked[clicked.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);  
}

//Função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if (color == 2){
        return yellow;
    }else if (color == 3){
        return blue;
    }
}

//funcao para proximo nivel do jogo
let nextLevel = () =>{
    score++;
    aleatorioOrdem();
}

//função para fim de jogo
let gameOver = () =>{
    alert('Pontuação: ${score}!\nVocê perdeu o jogo.\nClique em OK para inciar um novo jogo!');
    order = [];
    clicked = [];

    playgame();
}

//função de inicio
let playGame = () =>{
    alert('Bem-vindo ao Genesis!\nIniciar Jogo!');
    score = 0;

    nextLevel();
}
//green.addEventListener('click', clicked(0));
//red.addEventListener('click', clicked(1));
//yellow.addEventListener('click', clicked(2));
//blue.addEventListener('click', clicked(3));


//Eventos de cliques do jogo
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicio do jogo
playGame();