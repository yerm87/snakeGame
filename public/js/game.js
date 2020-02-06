const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const ground = new Image();
ground.src = 'img/ground.png';

const food = new Image();
food.src = 'img/food.png';

let box = 32;

let score = 0;

const drawGame = () => {
    ctx.drawImage(ground, 0, 0);
}

let game = setInterval(drawGame, 100);