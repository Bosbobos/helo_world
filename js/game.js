var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image(); // Создание объекта
var fg = new Image(); // Создание объекта
var pipeUp = new Image(); // Создание объекта
var pipeBottom = new Image(); // Создание объекта

bird = "img/flappy_bird_bird.png";
bg.src = "img/flappy_bird_bg.png"; 
fg.src = "img/flappy_bird_fg.png"; 
pipeUp.src = "img/flappy_bird_pipeUp.png"; 
pipeBottom.src = "img/flappy_bird_pipeBottom.png"; 

function draw() {
    ctx.drawImage(bg, 0, 0);
}

pipeBottom,onload = draw;