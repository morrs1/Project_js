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
  return randSideGhost1 = Math.floor(Math.random()* 20 + 1)
}


// ctx.rotate(inRad(20))
// console.log(randCordGhost1.x,randCordGhost1.y)
function drawGame() {
 
  ctx.drawImage(ground,0,0);
   ctx.fillStyle="#1E90FF"
  ctx.fillRect(1+0*box,2+2*box,2*box,box)
  ctx.fillRect(1+3*box,2+0*box,box,3*box)
  ctx.fillRect(1+10*box,2+2*box,2*box,box)
  ctx.fillRect(1+8*box,2+0*box,box,3*box)
  ctx.fillRect(1+0*box,2+5*box,3*box,box)
  ctx.fillRect(1+3*box,2+5*box,box,3*box)
  ctx.fillRect(1+9*box,2+5*box,3*box,box)
  ctx.fillRect(1+8*box,2+5*box,box,3*box)
  ctx.fillRect(1+5*box,2+3*box,2*box,2*box)
  ctx.fillRect(1+0*box,2+9*box,4*box,box)
  ctx.fillRect(1+8*box,2+9*box,4*box,box)
  ctx.drawImage(ghostImg,ghost1.x,ghost1.y);
  ctx.drawImage(ghostImg,ghost2.x,ghost2.y);
  ctx.drawImage(ghostImg,ghost3.x,ghost3.y);
  ctx.drawImage(ghostImg,ghost4.x,ghost4.y);
  ctx.drawImage(packamImg,packman.x,packman.y);
  
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
  
  if (packman.x < 4*box && packman.y<10*box && packman.y>9*box) 
  {
    while(packman.x < 4*box && packman.y>8*box && dir == "left")
    {
      packman.x = 7 + 4*box;
    }
  }

  if (packman.x < 4*box && packman.y<10*box && packman.y>9*box) 
  {
    while(packman.x < 4*box && packman.y<10*box && packman.y>9*box && dir == "up")
    {
      packman.y = 7 + 10*box;
    }
  }

  if (packman.x < 4*box && packman.y<10*box && packman.y>9*box) 
  {
    while(packman.x < 4*box && packman.y<10*box && packman.y>9*box && dir == "down")
    {
      packman.y = 7 + 8*box;
    }
  }

  if (packman.x < 0 && (packman.y<7+2*box || packman.y>7+4*box)) 
  {
    while(packman.x < 0 && (packman.y<7+2*box || packman.y>7+4*box) && dir == "left")
    {
      packman.x = 7.5;
    }
  }

  if (packman.x > 530 && (packman.y<7+2*box || packman.y>7+4*box)) 
  {
    while(packman.x > 530 && (packman.y<7+2*box || packman.y>7+4*box) && dir == "right")
    {
      packman.x = 492;
    }
  }

  if (packman.y > 487) 
  {
    while(packman.y > 487 && dir == "down")
    {
      packman.y = 447;
    }
  }

  if (packman.y < 0) 
  {
    while(packman.y < 0 && dir == "up")
    {
      packman.y = 7;
    }
  }


  if (packman.x > 7+7*box && packman.y==7+9*box) 
  {
    while(packman.x >7 + 7*box && packman.y==7+9*box && dir == "right")
    {
      packman.x = 7 + 7*box;
    }
  }

  if (packman.x > 8*box && packman.y==7+9*box) 
  {
    while(packman.x >8*box && packman.y==7+9*box && dir == "up")
    {
      packman.y = 7 + 10*box;
    }
  }

  if (packman.x > 8*box && packman.y==7+9*box) 
  {
    while(packman.x >8*box && packman.y==7+9*box && dir == "down")
    {
      packman.y = 7 + 8*box;
    }
  }

  if (packman.x < 4*box && packman.y==7+5*box) 
  {
    while(packman.x < 4*box && packman.y==7+5*box && dir == "left")
    {
      packman.x = 7 + 4*box;
    }
  }

  if (packman.x < 4*box && packman.y==7+5*box) 
  {
    while(packman.x < 4*box && packman.y==7+5*box && dir == "down")
    {
      packman.y = 7 + 4*box;
    }
  }

  if (packman.x < 4*box && packman.y==7+5*box) 
  {
    while(packman.x < 4*box && packman.y==7+5*box && dir == "up")
    {
      packman.y = 7 + 6*box;
    }
  }
  
if (packman.x >2*box && packman.x<4*box && packman.y > 5*box && packman.y < 8*box) 
  {
    while(packman.x > 7+2*box && packman.y > 5*box && packman.y < 8*box && dir == "right")
    {
      packman.x = 7 + 2*box;
    }
  }

  if (packman.x >2*box && packman.x<4*box && packman.y > 5*box && packman.y < 8*box) 
  {
    while(packman.x >2*box && packman.x<4*box && packman.y > 5*box && packman.y < 8*box && dir == "left")
    {
      packman.x = 7 + 4*box;
    }
  }

  if (packman.x >10+2*box && packman.x<4*box && packman.y > 5*box && packman.y < 8*box) 
  {
    while(packman.x >2*box && packman.x<4*box && packman.y > 5*box && packman.y < 8*box && dir == "up")
    {
      packman.y = 7 + 8*box;
    }
  }

  if (packman.x > 10+7*box && packman.y==7+5*box) 
  {
    while(packman.x >7+7*box && packman.y==7+5*box && dir == "up")
    {
      packman.y = 7 + 6*box;
    }
  }

  if (packman.x > 10+7*box && packman.y==7+5*box) 
  {
    while(packman.x >7+7*box && packman.y==7+5*box && dir == "down")
    {
      packman.y = 7 + 4*box;
    }
  }
  if (packman.x > 10+7*box && packman.y==7+5*box) 
  {
    while(packman.x >7+7*box && packman.y==7+5*box && dir == "right")
    {
      packman.x = 7 + 7*box;
    }
  }

  if (packman.x >10+7*box && packman.x<9*box && packman.y > 5*box && packman.y < 8*box) 
  {
    while(packman.x >10+7*box && packman.x<9*box && packman.y > 5*box && packman.y < 8*box && dir == "right")
    {
      packman.x = 7 + 7*box;
    }
  }

  if (packman.x >10+7*box && packman.x<9*box && packman.y > 5*box && packman.y < 8*box) 
  {
    while(packman.x >10+7*box && packman.x<9*box && packman.y > 5*box && packman.y < 8*box && dir == "left")
    {
      packman.x = 7 + 9*box;
    }
  }

  if (packman.x >10+7*box && packman.x<9*box && packman.y > 5*box && packman.y < 8*box) 
  {
    while(packman.x >10+7*box && packman.x<9*box && packman.y > 5*box && packman.y < 8*box && dir == "up")
    {
      packman.y = 7 + 8*box;
    }
  }

  if (packman.y > 1*box && packman.y < 3*box && packman.x<2*box) 
  {
    while( packman.y > 1*box && packman.y < 3*box && packman.x<2*box && dir =="up")
    {
      packman.y = 7 + 3*box;
    }
  }

  if (packman.y > 1*box && packman.y < 3*box && packman.x<2*box) 
  {
    while( packman.y > 7 + 1*box && packman.y <7+ 3*box && packman.x<2*box && dir =="down")
    {
      packman.y = 7 + 1*box;
    }
  }

  if (packman.y > 1*box && packman.y < 3*box && packman.x<2*box) 
  {
    while( packman.y > 7 + 1*box && packman.y <7+ 3*box && packman.x<2*box && dir =="left")
    {
      packman.x = 7 + 2*box;
    }
  }

  if (packman.y > 7+1*box && packman.y < 3*box && packman.x>10*box) 
  {
    while(packman.y >7+ 1*box && packman.y < 3*box && packman.x>10*box && dir =="down")
    {
      packman.y = 7 + 1*box;
    }
  }

  if (packman.y > 7+1*box && packman.y < 3*box && packman.x>10*box) 
  {
    while(packman.y >7+ 1*box && packman.y < 3*box && packman.x>10*box && dir =="up")
    {
      packman.y = 7 + 3*box;
    }
  }

  if (packman.y > 7+1*box && packman.y < 3*box && packman.x>10*box) 
  {
    while(packman.y >7+ 1*box && packman.y < 3*box && packman.x>10*box && dir =="right")
    {
      packman.x = 7 + 9*box;
    }
  }

  if (packman.x >7+2*box && packman.x<7+4*box && packman.y<7+3*box) 
  {
    while(packman.x >7+2*box && packman.x<7+4*box && packman.y<7+3*box && dir == "right")
    {
      packman.x = 7 + 2*box;
    }
  }

  if (packman.x >7+2*box && packman.x<7+4*box && packman.y<7+3*box) 
  {
    while(packman.x >7+2*box && packman.x<7+4*box && packman.y<7+3*box && dir == "left")
    {
      packman.x = 7 + 4*box;
    }
  }

  if (packman.x >3*box && packman.x<7+4*box && packman.y<7+3*box) 
  {
    while(packman.x >7+2*box && packman.x<7+4*box && packman.y<7+3*box && dir == "up")
    {
      packman.y = 7 + 3*box;
    }
  }

  if (packman.x >8*box && packman.x<7+9*box && packman.y<7+3*box) 
  {
    while(packman.x >7+7*box && packman.x<7+9*box && packman.y<7+3*box && dir == "up")
    {
      packman.y = 7 + 3*box;
    }
  }

  if (packman.x >7+7*box && packman.x<7+9*box && packman.y<7+3*box) 
  {
    while(packman.x >7+7*box && packman.x<7+9*box && packman.y<7+3*box && dir == "left")
    {
      packman.x = 7 + 9*box;
    }
  }

  if (packman.x >7+7*box && packman.x<7+9*box && packman.y<7+3*box) 
  {
    while(packman.x >7+7*box && packman.x<7+9*box && packman.y<7+3*box && dir == "right")
    {
      packman.x = 7 + 7*box;
    }
  }

  if (packman.x>7+4*box && packman.x<7+7*box && packman.y > 7+2*box && packman.y<7+5*box) 
  {
    while(packman.x>7+4*box && packman.x<7+7*box && packman.y > 7+2*box && packman.y<7+5*box && dir == "right")
    {
      packman.x = 7 + 4*box;
    }
  }

  if (packman.x>5*box && packman.x<7+7*box && packman.y > 7+2*box && packman.y<7+5*box) 
  {
    while(packman.x>5*box && packman.x<7+7*box && packman.y > 7+2*box && packman.y<7+5*box && dir == "up")
    {
      packman.y = 7 + 5*box;
    }
  }

  if (packman.x>7+4*box && packman.x<7+7*box && packman.y > 7+2*box && packman.y<7+5*box) 
  {
    while(packman.x>7+4*box && packman.x<7+7*box && packman.y > 7+2*box && packman.y<7+5*box && dir == "left")
    {
      packman.x = 7 + 7*box;
    }
  }

  if (packman.x>7+4*box && packman.x<7+7*box && packman.y > 7+2*box && packman.y<7+5*box) 
  {
    while(packman.x>7+4*box && packman.x<7+7*box && packman.y > 7+2*box && packman.y<7+5*box && dir == "down")
    {
      packman.y = 7 + 2*box;
    }
  }
  
  if (packman.x<0 && packman.y>7+2*box && packman.y<5*box ) 
  {
    while(packman.x<0 && packman.y>7+2*box && packman.y<5*box && dir == "left")
    {
      packman.x = 7 + 11*box;
    }
  }


  if (packman.x>530 && packman.y>7+2*box && packman.y<5*box ) 
  {
    while(packman.x>530 && packman.y>7+2*box && packman.y<5*box && dir == "right")
    {
      packman.x = 7 + 0*box;
    }
  }


  if (ghost1.x < 4*box && ghost1.y<10*box && ghost1.y>9*box) 
  {
    while(ghost1.x < 4*box && ghost1.y>8*box && sideStr == "left")
    {
      ghost1.x = 7 + 4*box;
    }
  }

  if (ghost1.x < 4*box && ghost1.y<10*box && ghost1.y>9*box) 
  {
    while(ghost1.x < 4*box && ghost1.y<10*box && ghost1.y>9*box && sideStr == "up")
    {
      ghost1.y = 7 + 10*box;
    }
  }

  if (ghost1.x < 4*box && ghost1.y<10*box && ghost1.y>9*box) 
  {
    while(ghost1.x < 4*box && ghost1.y<10*box && ghost1.y>9*box && sideStr == "down")
    {
      ghost1.y = 7 + 8*box;
    }
  }

  if (ghost1.x < 0 && (ghost1.y<7+2*box || ghost1.y>7+4*box)) 
  {
    while(ghost1.x < 0 && (ghost1.y<7+2*box || ghost1.y>7+4*box) && sideStr == "left")
    {
      ghost1.x = 7.5;
    }
  }

  if (ghost1.x > 530 && (ghost1.y<7+2*box || ghost1.y>7+4*box)) 
  {
    while(ghost1.x > 530 && (ghost1.y<7+2*box || ghost1.y>7+4*box) && sideStr == "right")
    {
      ghost1.x = 492;
    }
  }

  if (ghost1.y > 487) 
  {
    while(ghost1.y > 487 && sideStr == "down")
    {
      ghost1.y = 447;
    }
  }

  if (ghost1.y < 0) 
  {
    while(ghost1.y < 0 && sideStr == "up")
    {
      ghost1.y = 7;
    }
  }


  if (ghost1.x > 7+7*box && ghost1.y==7+9*box) 
  {
    while(ghost1.x >7 + 7*box && ghost1.y==7+9*box && sideStr == "right")
    {
      ghost1.x = 7 + 7*box;
    }
  }

  if (ghost1.x > 8*box && ghost1.y==7+9*box) 
  {
    while(ghost1.x >8*box && ghost1.y==7+9*box && sideStr == "up")
    {
      ghost1.y = 7 + 10*box;
    }
  }

  if (ghost1.x > 8*box && ghost1.y==7+9*box) 
  {
    while(ghost1.x >8*box && ghost1.y==7+9*box && sideStr == "down")
    {
      ghost1.y = 7 + 8*box;
    }
  }

  if (ghost1.x < 4*box && ghost1.y==7+5*box) 
  {
    while(ghost1.x < 4*box && ghost1.y==7+5*box && sideStr == "left")
    {
      ghost1.x = 7 + 4*box;
    }
  }

  if (ghost1.x < 4*box && ghost1.y==7+5*box) 
  {
    while(ghost1.x < 4*box && ghost1.y==7+5*box && sideStr == "down")
    {
      ghost1.y = 7 + 4*box;
    }
  }

  if (ghost1.x < 4*box && ghost1.y==7+5*box) 
  {
    while(ghost1.x < 4*box && ghost1.y==7+5*box && sideStr == "up")
    {
      ghost1.y = 7 + 6*box;
    }
  }
  
if (ghost1.x >2*box && ghost1.x<4*box && ghost1.y > 5*box && ghost1.y < 8*box) 
  {
    while(ghost1.x > 7+2*box && ghost1.y > 5*box && ghost1.y < 8*box && sideStr == "right")
    {
      ghost1.x = 7 + 2*box;
    }
  }

  if (ghost1.x >2*box && ghost1.x<4*box && ghost1.y > 5*box && ghost1.y < 8*box) 
  {
    while(ghost1.x >2*box && ghost1.x<4*box && ghost1.y > 5*box && ghost1.y < 8*box && sideStr == "left")
    {
      ghost1.x = 7 + 4*box;
    }
  }

  if (ghost1.x >10+2*box && ghost1.x<4*box && ghost1.y > 5*box && ghost1.y < 8*box) 
  {
    while(ghost1.x >2*box && ghost1.x<4*box && ghost1.y > 5*box && ghost1.y < 8*box && sideStr == "up")
    {
      ghost1.y = 7 + 8*box;
    }
  }

  if (ghost1.x > 10+7*box && ghost1.y==7+5*box) 
  {
    while(ghost1.x >7+7*box && ghost1.y==7+5*box && sideStr == "up")
    {
      ghost1.y = 7 + 6*box;
    }
  }

  if (ghost1.x > 10+7*box && ghost1.y==7+5*box) 
  {
    while(ghost1.x >7+7*box && ghost1.y==7+5*box && sideStr == "down")
    {
      ghost1.y = 7 + 4*box;
    }
  }
  if (ghost1.x > 10+7*box && ghost1.y==7+5*box) 
  {
    while(ghost1.x >7+7*box && ghost1.y==7+5*box && sideStr == "right")
    {
      ghost1.x = 7 + 7*box;
    }
  }

  if (ghost1.x >10+7*box && ghost1.x<9*box && ghost1.y > 5*box && ghost1.y < 8*box) 
  {
    while(ghost1.x >10+7*box && ghost1.x<9*box && ghost1.y > 5*box && ghost1.y < 8*box && sideStr == "right")
    {
      ghost1.x = 7 + 7*box;
    }
  }

  if (ghost1.x >10+7*box && ghost1.x<9*box && ghost1.y > 5*box && ghost1.y < 8*box) 
  {
    while(ghost1.x >10+7*box && ghost1.x<9*box && ghost1.y > 5*box && ghost1.y < 8*box && sideStr == "left")
    {
      ghost1.x = 7 + 9*box;
    }
  }

  if (ghost1.x >10+7*box && ghost1.x<9*box && ghost1.y > 5*box && ghost1.y < 8*box) 
  {
    while(ghost1.x >10+7*box && ghost1.x<9*box && ghost1.y > 5*box && ghost1.y < 8*box && sideStr == "up")
    {
      ghost1.y = 7 + 8*box;
    }
  }

  if (ghost1.y > 1*box && ghost1.y < 3*box && ghost1.x<2*box) 
  {
    while( ghost1.y > 1*box && ghost1.y < 3*box && ghost1.x<2*box && sideStr =="up")
    {
      ghost1.y = 7 + 3*box;
    }
  }

  if (ghost1.y > 1*box && ghost1.y < 3*box && ghost1.x<2*box) 
  {
    while( ghost1.y > 7 + 1*box && ghost1.y <7+ 3*box && ghost1.x<2*box && sideStr =="down")
    {
      ghost1.y = 7 + 1*box;
    }
  }

  if (ghost1.y > 1*box && ghost1.y < 3*box && ghost1.x<2*box) 
  {
    while( ghost1.y > 7 + 1*box && ghost1.y <7+ 3*box && ghost1.x<2*box && sideStr =="left")
    {
      ghost1.x = 7 + 2*box;
    }
  }

  if (ghost1.y > 7+1*box && ghost1.y < 3*box && ghost1.x>10*box) 
  {
    while(ghost1.y >7+ 1*box && ghost1.y < 3*box && ghost1.x>10*box && sideStr =="down")
    {
      ghost1.y = 7 + 1*box;
    }
  }

  if (ghost1.y > 7+1*box && ghost1.y < 3*box && ghost1.x>10*box) 
  {
    while(ghost1.y >7+ 1*box && ghost1.y < 3*box && ghost1.x>10*box && sideStr =="up")
    {
      ghost1.y = 7 + 3*box;
    }
  }

  if (ghost1.y > 7+1*box && ghost1.y < 3*box && ghost1.x>10*box) 
  {
    while(ghost1.y >7+ 1*box && ghost1.y < 3*box && ghost1.x>10*box && sideStr =="right")
    {
      ghost1.x = 7 + 9*box;
    }
  }

  if (ghost1.x >7+2*box && ghost1.x<7+4*box && ghost1.y<7+3*box) 
  {
    while(ghost1.x >7+2*box && ghost1.x<7+4*box && ghost1.y<7+3*box && sideStr == "right")
    {
      ghost1.x = 7 + 2*box;
    }
  }

  if (ghost1.x >7+2*box && ghost1.x<7+4*box && ghost1.y<7+3*box) 
  {
    while(ghost1.x >7+2*box && ghost1.x<7+4*box && ghost1.y<7+3*box && sideStr == "left")
    {
      ghost1.x = 7 + 4*box;
    }
  }

  if (ghost1.x >3*box && ghost1.x<7+4*box && ghost1.y<7+3*box) 
  {
    while(ghost1.x >7+2*box && ghost1.x<7+4*box && ghost1.y<7+3*box && sideStr == "up")
    {
      ghost1.y = 7 + 3*box;
    }
  }

  if (ghost1.x >8*box && ghost1.x<7+9*box && ghost1.y<7+3*box) 
  {
    while(ghost1.x >7+7*box && ghost1.x<7+9*box && ghost1.y<7+3*box && sideStr == "up")
    {
      ghost1.y = 7 + 3*box;
    }
  }

  if (ghost1.x >7+7*box && ghost1.x<7+9*box && ghost1.y<7+3*box) 
  {
    while(ghost1.x >7+7*box && ghost1.x<7+9*box && ghost1.y<7+3*box && sideStr == "left")
    {
      ghost1.x = 7 + 9*box;
    }
  }

  if (ghost1.x >7+7*box && ghost1.x<7+9*box && ghost1.y<7+3*box) 
  {
    while(ghost1.x >7+7*box && ghost1.x<7+9*box && ghost1.y<7+3*box && sideStr == "right")
    {
      ghost1.x = 7 + 7*box;
    }
  }

  if (ghost1.x>7+4*box && ghost1.x<7+7*box && ghost1.y > 7+2*box && ghost1.y<7+5*box) 
  {
    while(ghost1.x>7+4*box && ghost1.x<7+7*box && ghost1.y > 7+2*box && ghost1.y<7+5*box && sideStr == "right")
    {
      ghost1.x = 7 + 4*box;
    }
  }

  if (ghost1.x>5*box && ghost1.x<7+7*box && ghost1.y > 7+2*box && ghost1.y<7+5*box) 
  {
    while(ghost1.x>5*box && ghost1.x<7+7*box && ghost1.y > 7+2*box && ghost1.y<7+5*box && sideStr == "up")
    {
      ghost1.y = 7 + 5*box;
    }
  }

  if (ghost1.x>7+4*box && ghost1.x<7+7*box && ghost1.y > 7+2*box && ghost1.y<7+5*box) 
  {
    while(ghost1.x>7+4*box && ghost1.x<7+7*box && ghost1.y > 7+2*box && ghost1.y<7+5*box && sideStr == "left")
    {
      ghost1.x = 7 + 7*box;
    }
  }

  if (ghost1.x>7+4*box && ghost1.x<7+7*box && ghost1.y > 7+2*box && ghost1.y<7+5*box) 
  {
    while(ghost1.x>7+4*box && ghost1.x<7+7*box && ghost1.y > 7+2*box && ghost1.y<7+5*box && sideStr == "down")
    {
      ghost1.y = 7 + 2*box;
    }
  }
  
  if (ghost1.x<0 && ghost1.y>7+2*box && ghost1.y<5*box ) 
  {
    while(ghost1.x<0 && ghost1.y>7+2*box && ghost1.y<5*box && sideStr == "left")
    {
      ghost1.x = 7 + 11*box;
    }
  }


  if (ghost1.x>530 && ghost1.y>7+2*box && ghost1.y<5*box ) 
  {
    while(ghost1.x>530 && ghost1.y>7+2*box && ghost1.y<5*box && sideStr == "right")
    {
      ghost1.x = 7 + 0*box;
    }
  }

}

let game = setInterval(drawGame, 170);






