var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image(); // Создание объекта
var bg = new Image(); // Создание объекта
var fg = new Image(); // Создание объекта
var pipeUp = new Image(); // Создание объекта
var pipeBottom = new Image(); // Создание объекта

bird.src = "img/bird.png"; // Заполнение переменных
bg.src = "img/bg.png"; // Заполнение переменных
fg.src = "img/fg.png"; // Заполнение переменных
pipeUp.src = "img/pipeUp.png"; // Заполнение переменных
pipeBottom.src = "img/pipeBottom.png"; // Заполнение переменных

// Заполнение переменных - какя переменная где находится (в какой папке)

var gap = 90; //Расстояние между трубами

//Птичья позиция
var xPos = 10;
var yPos = 150;
var grav = 1;


function draw() { //Чтобы всё было на своих местах
    ctx.drawImage(bg, 0, 0); // Где фон

    ctx.drawImage(pipeUp, 100, 0) // Где верзняя труба
    ctx.drawImage(pipeBottom, 100, 0 + pipeUp.height + gap); // Где нижняя труба

    ctx.drawImage(fg, 0, cvs.height - fg.height); // Где эта штука снизу короче
    ctx.drawImage(bird, xPos, yPos) // Где птица (но вообще за это отвечает 18 -19 строка)

    yPos += grav;
}

pipeBottom,onload = draw;