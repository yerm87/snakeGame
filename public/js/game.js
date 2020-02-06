const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const ground = new Image();
ground.src = 'img/ground.png';

const foodImage = new Image();
foodImage.src = 'img/food.png';

const box = 32;

let score = 0;

let food = {
    x: Math.floor(Math.random() * 17 + 1) * 32,
    y: Math.floor(Math.random() * 15 + 3) * 32
}

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
}

const drawGame = () => {
    ctx.drawImage(ground, 0, 0);

    ctx.drawImage(foodImage, food.x, food.y);

    for(let i=0; i<snake.length; i++){
        ctx.fillStyle = 'green';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = 'white';
    ctx.font = '50px Arial';
    ctx.fillText(score, box*2.5, box*1.8);
}

let game = setInterval(drawGame, 100);

console.log(Math.random());