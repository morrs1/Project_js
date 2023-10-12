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
//   ghostImg = new Image();
//   x;
//   y;
// }

// ghost1 = new ghost()
// ghost1.ghostImg.src = "ghost4.png"
// ghost1.x =  7 + 4*box
// ghost1.x =  7 + 7*box

function inRad(x){
  return Math.PI * x/180
}

const ghostImg = new Image();
ghostImg.src="ghost4.png"

let ghost1 = {
x:7 + 8*box,
y:7 + 8*box
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
// ctx.rotate(inRad(20))

function drawGame() {
  ctx.drawImage(ground,0,0);
  ctx.drawImage(ghostImg,ghost1.x,ghost1.y);
  ctx.drawImage(packamImg,packman.x,packman.y);

  let pacmanX = packman.x;
  let pacmanY = packman.y;

  packman.x = null;
  packman.y = null;

  if (dir == "left") pacmanX -= box;
  if (dir == "right") pacmanX += box;
  if (dir == "down") pacmanY += box;
  if (dir == "up") pacmanY -= box;

  let newPacman = {
    x: pacmanX,
    y: pacmanY
  };

  packman.x = newPacman.x;
  packman.y = newPacman.y;
  
}

let game = setInterval(drawGame, 100);






