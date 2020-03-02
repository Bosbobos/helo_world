var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image(); // Создание объекта
var bg = new Image(); // Создание объекта
var fg = new Image(); // Создание объекта
var pipeUp = new Image(); // Создание объекта
var pipeBottom = new Image(); // Создание объекта

// Заполнение переменных - какя переменная где находится (в какой папке)

bird.src = "img/bird.png"; // Заполнение переменных
bg.src = "img/bg.png"; // Заполнение переменных
fg.src = "img/fg.png"; // Заполнение переменных
pipeUp.src = "img/pipeUp.png"; // Заполнение переменных
pipeBottom.src = "img/pipeBottom.png"; // Заполнение переменных 

//Звуковые файлы

var fly = new Audio // Создание объекта
var score_audio = new Audio // Создание объекта

fly.src = "audio/fly.mp3" // Заполнение переменных 
score_audio.src = "audio/score.mp3" // Заполнение переменных 

var gap = 90; //Расстояние между трубами

// Чтобы птыться подлетала

document.addEventListener("keydown", moveUp);

function moveUp() {
    yPos -= 25
    fly.play();
}

// Создание блоков
var pipe = []
    
pipe[0] = {
    x : cvs.width,
    y : 0
}

var score = 0; // Переменная счёт чтобы оно считало сколько этих штук ты пролетел

//Птичья позиция

var xPos = 10;
var yPos = 150;
var grav = 1.5;

//Чтобы всё было на своих местах

function draw() { 
    ctx.drawImage(bg, 0, 0); // Где фон

    for(var i = 0; i < pipe.length; i++) {
     ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y); // Где верзняя труба
    ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap); // Где нижняя труба
    
    pipe[i].x--;

    if(pipe[i].x == 125) {
        pipe.push({
            x : cvs.width,
            y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height // Чтобы дальше трубы рандомно генерировались
        });
    }

    // Чтобы при столкновениях страница перезагружалась

    if(xPos + bird.width >= pipe[i].x
        && xPos <= pipe[i].x + pipeUp.width 
        && (yPos <= pipe[i].y + pipeUp.height
            || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >=cvs.height - fg.height) {
                location.reload(); // Перезагрузка страницы
            }

// Чтобы добавлялся счёт

            if(pipe[i].x == 5) {
                score++;
                score_audio.play();
            }
    }

   

    ctx.drawImage(fg, 0, cvs.height - fg.height); // Где эта штука снизу короче
    ctx.drawImage(bird, xPos, yPos) // Где птица

    yPos += grav; // Чтобы птытьса падала

    ctx.fillSryle = "#000"; // Цвет шрифта
    ctx.font = "24px Verdana" // Размер шрифта
    ctx.fillText("Счёт: " + score, 10, cvs.height - 20) // Чтобы счёт показывался

    requestAnimationFrame(draw);
}

pipeBottom,onload = draw;