var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// ctx.canvas.width = window.innerWidth;
// ctx.canvas.height = window.innerHeight;
 
// Рисуем линии по оси x
// for (var x = 0; x <= canvas.width; x += 100) {
//   ctx.moveTo(x, 0);
//   ctx.lineTo(x, canvas.height);
// }
 
// // Рисуем линии по оси y
// for (var y = 0; y <= canvas.height; y += 100) {
//   ctx.moveTo(0, y);
//   ctx.lineTo(canvas.width, y);
// }
 
// // Устанавливаем цвет линий
// ctx.strokeStyle = "#000000";
 
// // Рисуем линии на canvas
// ctx.stroke();
let box = 44;
const ground = new Image();
ground.src = "img_pole5.jpg";

const packamImg = new Image();
packamImg.src = "packman2.png";

// class ghost{
//   constuctor(){
//     this.ghostImg = new Image();
//     this.x;
//     this.y;
//   }
// }

// ghost2 = new ghost()
// ghost2.ghostImg.src = "ghost4.png"
// ghost2.x =  7 + 6*box
// ghost2.x =  7 + 7*box

function inRad(x){
  return Math.PI * x/180
}

const ghostImg = new Image();
ghostImg.src="ghost4.png"

let ghost1 = {
  x:7 + 5*box,
  y:7 + 3*box
}

let ghost2 = {
  x:7 + 6*box,
  y:7 + 3*box
}

let ghost3 = {
  x:7 + 5*box,
  y:7 + 4*box
}

let ghost4 = {
  x:7 + 6*box,
  y:7 + 4*box
}

let packman = {
  x:7 + 6*box,
  y:7 + 5*box
};

document.addEventListener("keydown",direction);

let dir;

function direction(event) {
  if(event.keyCode == 37)
    dir = "left"
  else if(event.keyCode == 38)
    dir = "up"
  else if(event.keyCode == 39)
    dir = "right"
  else if(event.keyCode == 40)
    dir = "down"
}
// let randCordGhost1={
// x:0,
// y:0
// }
// function genRandCord(){
// randCordGhost1.x = Math.floor(Math.random() * 11) * box
// randCordGhost1.y = Math.floor(Math.random() * 10) * box
//}

function genRandSide(){
  return randSideGhost1 = Math.floor(Math.random()* 4 + 1)
}

//Массив со сдвигами от начала координат и шириной/длиной стенок 
const obstacles = [
    [0, 2, 2, 1],
    [3, 0, 1, 3],
    [10, 2, 2, 1],
    [8, 0, 1, 3],
    [0, 5, 3, 1],
    [3, 5, 1, 3],
    [9, 5, 3, 1],
    [8, 5, 1, 3],
    [5, 3, 2, 2],
    [0, 9, 4, 1],
    [8, 9, 4, 1],
  ];

function drawWalls(){
  obstacles.forEach(([x, y, width, height]) => {
    ctx.fillRect(1 + x * box, 2 + y * box, width * box, height * box);
  });
}

//Отрисовка игры
  function drawGame() {
  ctx.drawImage(ground,0,0);
  ctx.fillStyle="#1E90FF"

//Отрисовка стен 
  drawWalls()
  const ghosts = [ghost1, ghost2, ghost3, ghost4];

  ghosts.forEach(ghost => {
    ctx.drawImage(ghostImg, ghost.x, ghost.y);
  });

  ctx.drawImage(packamImg, packman.x, packman.y);

  let side = genRandSide()
  let sideStr = " "
  if (side == 1) sideStr = "right"
  if (side == 2) sideStr = "up"
  if (side == 3) sideStr = "left"
  if (side == 4) sideStr = "down"
  if (side==1) ghost1.x += box
  if (side==2) ghost1.y -= box
  if (side==3) ghost1.x -= box
  if (side==4) ghost1.y += box

  if (dir == "left") packman.x -= box;
  if (dir == "right") packman.x += box;
  if (dir == "down") packman.y += box;
  if (dir == "up") packman.y -= box;

//Условие для нижней левой стенки
  if (packman.x < 4 * box && packman.y < 10 * box && packman.y > 9 * box) {
    if (dir == "left") packman.x = 7 + 4 * box;
    if (dir == "up") packman.y = 7 + 10 * box;
    if (dir == "down") packman.y = 7 + 8 * box;
  }

//Условие для границ карты слева/справа
  if ((packman.y<7+2*box || packman.y>7+4*box)) { 
    if (packman.x < 0 &&  dir == "left") packman.x = 7.5;
    if (packman.x > 530 &&  dir == "right") packman.x = 492;
  } 

//Условие для границ сверху/снизу 
  if (packman.y > 487 && dir =="down") packman.y = 447;
  if (packman.y < 0 && dir == "up") packman.y = 7;

//Условие для нижней правой стенки
  if (packman.x > 7+7*box && packman.y==7+9*box && dir == "right") packman.x = 7 + 7*box;
  if (packman.x > 8*box && packman.y==7+9*box){
    if (dir == "up") packman.y = 7 + 10*box;
    if (dir == "down") packman.y = 7 + 8*box;
  }
//Условие для горизонтальной стенки по цетру слева
  if (packman.x < 4*box && packman.y==7+5*box){
    if (dir == "left") packman.x = 7 + 4*box;
    if (dir == "down") packman.y = 7 + 4*box;
    if (dir == "up") packman.y = 7 + 6*box;
  }
//Условие для вертикальной стенки по центру слева
  if (packman.x >2*box && packman.x<4*box && packman.y > 5*box && packman.y < 8*box){
    if (dir == "right") packman.x = 7 + 2*box;
    if (dir == "left")  packman.x = 7 + 4*box;
    }
  if (packman.x >10+2*box && packman.x<4*box && packman.y > 5*box && packman.y < 8*box && dir == "up") packman.y = 7 + 8*box;
//Условие для горизонтальной стенки по центру справа
  if (packman.x > 10+7*box && packman.y==7+5*box){
    if (dir == "up") packman.y = 7 + 6*box;
    if (dir == "down") packman.y = 7 + 4*box;
    if (dir == "right") packman.x = 7 + 7*box;
  }
//Условие для вертикальной стенки по центру справа
  if (packman.x >10+7*box && packman.x<9*box && packman.y > 5*box && packman.y < 8*box) {
    if (dir == "right") packman.x = 7 + 7*box;
    if (dir == "left") packman.x = 7 + 9*box;
    if (dir == "up") packman.y = 7 + 8*box;
  }
//Условие для горизотнальной стенки сверху слева
  if(packman.y > 7 + 1*box && packman.y <7+ 3*box && packman.x<2*box){
    if (dir =="up") packman.y = 7 + 3*box;
    if (dir =="down") packman.y = 7 + 1*box;
    if (dir =="left") packman.x = 7 + 2*box;
}
//Условие для горизонтальной стенки сврху слева
  if (packman.y > 7+1*box && packman.y < 3*box && packman.x>10*box) {
    if (dir =="down") packman.y = 7 + 1*box;
    if (dir =="up") packman.y = 7 + 3*box;
    if (dir =="right") packman.x = 7 + 9*box;
  }
//Условие для вертикальной стенки сверху слева
  if (packman.x >7+2*box && packman.x<7+4*box && packman.y<7+3*box) {
    if (dir == "right") packman.x = 7 + 2*box;
    if (dir == "left") packman.x = 7 + 4*box;
    if (dir == "up") packman.y = 7 + 3*box;
  }
//Условие для вертикальной стенки сверху справа
  if (packman.x >7+7*box && packman.x<7+9*box && packman.y<7+3*box) {
    if (dir == "up") packman.y = 7 + 3*box;
    if (dir == "left") packman.x = 7 + 9*box;
    if (dir == "right") packman.x = 7 + 7*box;
  }
//Условие для центрального квадрата
  if (packman.x>7+4*box && packman.x<7+7*box && packman.y > 7+2*box && packman.y<7+5*box) {
    if (dir == "right") packman.x = 7 + 4*box;
    if (dir == "up") packman.y = 7 + 5*box;
    if (dir == "left") packman.x = 7 + 7*box;
    if (dir == "down") packman.y = 7 + 2*box;
  }
//Условие для прохода слева
  if (packman.x<0 && packman.y>7+2*box && packman.y<5*box && dir == "left") packman.x = 7 + 11*box;

//Условие для прохода справа
  if (packman.x>530 && packman.y>7+2*box && packman.y<5*box  && dir == "right") packman.x = 7 + 0*box;



/////////////////////////////////////
/////////////////////////////////////
/////////Условие для призрака////////
/////////////////////////////////////
/////////////////////////////////////



//Условие для нижней левой стенки
  if (ghost1.x < 4 * box && ghost1.y < 10 * box && ghost1.y > 9 * box) {
    if (sideStr == "left") ghost1.x = 7 + 4 * box;
    if (sideStr == "up") ghost1.y = 7 + 10 * box;
    if (sideStr == "down") ghost1.y = 7 + 8 * box;
  }

//Условие для границ карты слева/справа
  if ((ghost1.y<7+2*box || ghost1.y>7+4*box)) { 
    if (ghost1.x < 0 &&  sideStr == "left") ghost1.x = 7.5;
    if (ghost1.x > 530 &&  sideStr == "right") ghost1.x = 492;
  } 

//Условие для границ сверху/снизу 
  if (ghost1.y > 487 && sideStr =="down") ghost1.y = 447;
  if (ghost1.y < 0 && sideStr == "up") ghost1.y = 7;

//Условие для нижней правой стенки
  if (ghost1.x > 7+7*box && ghost1.y==7+9*box && sideStr == "right") ghost1.x = 7 + 7*box;
  if (ghost1.x > 8*box && ghost1.y==7+9*box){
    if (sideStr == "up") ghost1.y = 7 + 10*box;
    if (sideStr == "down") ghost1.y = 7 + 8*box;
  }
//Условие для горизонтальной стенки по цетру слева
  if (ghost1.x < 4*box && ghost1.y==7+5*box){
    if (sideStr == "left") ghost1.x = 7 + 4*box;
    if (sideStr == "down") ghost1.y = 7 + 4*box;
    if (sideStr == "up") ghost1.y = 7 + 6*box;
  }
//Условие для вертикальной стенки по центру слева
  if (ghost1.x >2*box && ghost1.x<4*box && ghost1.y > 5*box && ghost1.y < 8*box){
    if (sideStr == "right") ghost1.x = 7 + 2*box;
    if (sideStr == "left")  ghost1.x = 7 + 4*box;
    }
  if (ghost1.x >10+2*box && ghost1.x<4*box && ghost1.y > 5*box && ghost1.y < 8*box && sideStr == "up") ghost1.y = 7 + 8*box;
//Условие для горизонтальной стенки по центру справа
  if (ghost1.x > 10+7*box && ghost1.y==7+5*box){
    if (sideStr == "up") ghost1.y = 7 + 6*box;
    if (sideStr == "down") ghost1.y = 7 + 4*box;
    if (sideStr == "right") ghost1.x = 7 + 7*box;
  }
//Условие для вертикальной стенки по центру справа
  if (ghost1.x >10+7*box && ghost1.x<9*box && ghost1.y > 5*box && ghost1.y < 8*box) {
    if (sideStr == "right") ghost1.x = 7 + 7*box;
    if (sideStr == "left") ghost1.x = 7 + 9*box;
    if (sideStr == "up") ghost1.y = 7 + 8*box;
  }
//Условие для горизотнальной стенки сверху слева
  if(ghost1.y > 7 + 1*box && ghost1.y <7+ 3*box && ghost1.x<2*box){
    if (sideStr =="up") ghost1.y = 7 + 3*box;
    if (sideStr =="down") ghost1.y = 7 + 1*box;
    if (sideStr =="left") ghost1.x = 7 + 2*box;
}
//Условие для горизонтальной стенки сврху слева
  if (ghost1.y > 7+1*box && ghost1.y < 3*box && ghost1.x>10*box) {
    if (sideStr =="down") ghost1.y = 7 + 1*box;
    if (sideStr =="up") ghost1.y = 7 + 3*box;
    if (sideStr =="right") ghost1.x = 7 + 9*box;
  }
//Условие для вертикальной стенки сверху слева
  if (ghost1.x >7+2*box && ghost1.x<7+4*box && ghost1.y<7+3*box) {
    if (sideStr == "right") ghost1.x = 7 + 2*box;
    if (sideStr == "left") ghost1.x = 7 + 4*box;
    if (sideStr == "up") ghost1.y = 7 + 3*box;
  }
//Условие для вертикальной стенки сверху справа
  if (ghost1.x >7+7*box && ghost1.x<7+9*box && ghost1.y<7+3*box) {
    if (sideStr == "up") ghost1.y = 7 + 3*box;
    if (sideStr == "left") ghost1.x = 7 + 9*box;
    if (sideStr == "right") ghost1.x = 7 + 7*box;
  }
//Условие для центрального квадрата
  if (ghost1.x>7+4*box && ghost1.x<7+7*box && ghost1.y > 7+2*box && ghost1.y<7+5*box) {
    if (sideStr == "right") ghost1.x = 7 + 4*box;
    if (sideStr == "up") ghost1.y = 7 + 5*box;
    if (sideStr == "left") ghost1.x = 7 + 7*box;
    if (sideStr == "down") ghost1.y = 7 + 2*box;
  }
//Условие для прохода слева
  if (ghost1.x<0 && ghost1.y>7+2*box && ghost1.y<5*box && sideStr == "left") ghost1.x = 7 + 11*box;
  
//Условие для прохода справа
  if (ghost1.x>530 && ghost1.y>7+2*box && ghost1.y<5*box  && sideStr == "right") ghost1.x = 7 + 0*box;
  
}

let game = setInterval(drawGame, 150);






