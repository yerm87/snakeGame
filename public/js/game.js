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

let dir;

const direction = (event) => {
    if(event.keyCode === 37 && dir !== 'right'){
        dir = 'left';
    } else if(event.keyCode === 40 && dir !== 'down'){
        dir = 'up';
    } else if(event.keyCode === 39 && dir !== 'left'){
        dir = 'right';
    } else if(event.keyCode === 38 && dir !== 'up'){
        dir = 'down';
    }
}

document.addEventListener('keydown', direction);

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

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(snakeX === food.x && snakeY === food.y){
        score++;

        food = {
            x: Math.floor(Math.random() * 17 + 1) * 32,
            y: Math.floor(Math.random() * 15 + 3) * 32
        }
    } else {
        snake.pop();
    }

    if(dir === 'left'){
        snakeX -= box;
    }

    if(dir === 'right'){
        snakeX += box;
    }

    if(dir === 'up'){
        snakeY += box;
    }

    if(dir === 'down'){
        snakeY -= box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

drawGame();

let game = setInterval(drawGame, 100);

console.log(Math.random());