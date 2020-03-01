var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image(); // Создание объекта
var fg = new Image(); // Создание объекта
var pipeUp = new Image(); // Создание объекта
var pipeBottom = new Image(); // Создание объекта

bird = "img/bird.png";
bg.src = "img/bg.png"; 
fg.src = "img/fg.png"; 
pipeUp.src = "img/pipeUp.png"; 
pipeBottom.src = "img/pipeBottom.png"; 

function draw() {
    ctx.drawImage(bg, 0, 0);
}

pipeBottom,onload = draw;