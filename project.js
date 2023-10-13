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
// ctx.rotate(inRad(20))

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
}

let game = setInterval(drawGame, 130);






