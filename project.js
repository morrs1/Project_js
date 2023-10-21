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
packamImg.src = "pacman1.png";

const parlicleImg = new Image();
parlicleImg.src = "particle2.png";

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



const textScore = document.getElementById('textScore')

let flag = 0;
let level = 0;
const btnMenu = document.getElementById('btnMenu')
const mainMenu = document.getElementById('mainMenu')
const btnMainMenu1 = document.getElementById('btnMainMenu1')
const btnMainMenu2 = document.getElementById('btnMainMenu2')
const btnMainMenu3 = document.getElementById('btnMainMenu3')
const btnMainMenu4 = document.getElementById('btnMainMenu4')
let interval = 100

btnMainMenu1.onclick = function(){
  level = 1;
  countParticles = 0
  clearInterval(game)
  game = setInterval(drawGame,150)
  count = 0
  mainMenu.style.display='none'
  flag = 0
  ghost1.x = 7 + 5*box
  ghost1.y = 7 + 3*box
  ghost2.x = 7 + 6*box
  ghost2.y = 7 + 3*box
  ghost3.x = 7 + 5*box
  ghost3.y = 7 + 4*box
  ghost4.x = 7 + 6*box
  ghost4.y = 7 + 4*box
  
  arr = [
    [0,0],[1,0],                   [2,0],[-100,-100],[4,0],[5,0],[6,0],[7,0],[-100,-100],[9,0],               [10,0],[11,0],
    [0,1],[1,1],                   [2,1],[-100,-100],[4,1],[5,1],[6,1],[7,1],[-100,-100],[9,1],               [10,1],[11,1],
    [-100,-100],[-100,-100],       [2,2],[-100,-100],[4,2],[5,2],[6,2],[7,2],[-100,-100],[9,2],     [-100,-100],[-100,-100],
    [0,3],[1,3],[2,3],[3,3],[4,3],                   [-100,-100],[-100,-100],               [7,3],[8,3],[9,3],[10,3],[11,3],
    [0,4],[1,4],[2,4],[3,4],[4,4],                   [-100,-100],[-100,-100],               [7,4],[8,4],[9,4],[10,4],[11,4],
    [-100,-100],[-100,-100],[-100,-100],[-100,-100],[4,5],[5,5],[6,5],[7,5],[-100,-100],[-100,-100],[-100,-100],[-100,-100],
    [0,6],[1,6],[2,6],                  [-100,-100],[4,6],[5,6],[6,6],[7,6],[-100,-100],                [9,6],[10,6],[11,6],
    [0,7],[1,7],[2,7],                  [-100,-100],[4,7],[5,7],[6,7],[7,7],[-100,-100],                [9,7],[10,7],[11,7],
    [0,8],[1,8],[2,8],                              [3,8],[4,8],[5,8],[6,8],                [7,8],[8,8],[9,8],[10,8],[11,8],
    [-100,-100],[-100,-100],[-100,-100],[-100,-100],[4,9],[5,9],[6,9],[7,9],[-100,-100],[-100,-100],[-100,-100],[-100,-100],
    [0,10],[1,10],[2,10],                         [3,10],[4,10],[5,10],[6,10],         [7,10],[8,10],[9,10],[10,10],[-100,-100],
  ]

  packman.x = 7 + 11*box
  packman.y = 7 + 10*box
}

btnMainMenu2.onclick = function(){
  level = 2;
  countParticles = 0
  clearInterval(game)
  game = setInterval(drawGame,125)
  count = 0
  mainMenu.style.display='none'
  flag = 0
  ghost1.x = 7 + 5*box
  ghost1.y = 7 + 3*box
  ghost2.x = 7 + 6*box
  ghost2.y = 7 + 3*box
  ghost3.x = 7 + 5*box
  ghost3.y = 7 + 4*box
  ghost4.x = 7 + 6*box
  ghost4.y = 7 + 4*box
  
  arr = [
    [0,0],[1,0],                   [2,0],[-100,-100],[4,0],[5,0],[6,0],[7,0],[-100,-100],[9,0],               [10,0],[11,0],
    [0,1],[1,1],                   [2,1],[-100,-100],[4,1],[5,1],[6,1],[7,1],[-100,-100],[9,1],               [10,1],[11,1],
    [-100,-100],[-100,-100],       [2,2],[-100,-100],[4,2],[5,2],[6,2],[7,2],[-100,-100],[9,2],     [-100,-100],[-100,-100],
    [0,3],[1,3],[2,3],[3,3],[4,3],                   [-100,-100],[-100,-100],               [7,3],[8,3],[9,3],[10,3],[11,3],
    [0,4],[1,4],[2,4],[3,4],[4,4],                   [-100,-100],[-100,-100],               [7,4],[8,4],[9,4],[10,4],[11,4],
    [-100,-100],[-100,-100],[-100,-100],[-100,-100],[4,5],[5,5],[6,5],[7,5],[-100,-100],[-100,-100],[-100,-100],[-100,-100],
    [0,6],[1,6],[2,6],                  [-100,-100],[4,6],[5,6],[6,6],[7,6],[-100,-100],                [9,6],[10,6],[11,6],
    [0,7],[1,7],[2,7],                  [-100,-100],[4,7],[5,7],[6,7],[7,7],[-100,-100],                [9,7],[10,7],[11,7],
    [0,8],[1,8],[2,8],                              [3,8],[4,8],[5,8],[6,8],                [7,8],[8,8],[9,8],[10,8],[11,8],
    [-100,-100],[-100,-100],[-100,-100],[-100,-100],[4,9],[5,9],[6,9],[7,9],[-100,-100],[-100,-100],[-100,-100],[-100,-100],
    [0,10],[1,10],[2,10],                         [3,10],[4,10],[5,10],[6,10],         [7,10],[8,10],[9,10],[10,10],[-100,-100],
  ]

  packman.x = 7 + 11*box
  packman.y = 7 + 10*box
}

btnMainMenu3.onclick = function(){
  level = 3;
  countParticles = 0
  clearInterval(game)
  game = setInterval(drawGame,100)
  count = 0
  mainMenu.style.display='none'
  flag = 0
  ghost1.x = 7 + 5*box
  ghost1.y = 7 + 3*box
  ghost2.x = 7 + 6*box
  ghost2.y = 7 + 3*box
  ghost3.x = 7 + 5*box
  ghost3.y = 7 + 4*box
  ghost4.x = 7 + 6*box
  ghost4.y = 7 + 4*box
  
  arr = [
    [0,0],[1,0],                   [2,0],[-100,-100],[4,0],[5,0],[6,0],[7,0],[-100,-100],[9,0],               [10,0],[11,0],
    [0,1],[1,1],                   [2,1],[-100,-100],[4,1],[5,1],[6,1],[7,1],[-100,-100],[9,1],               [10,1],[11,1],
    [-100,-100],[-100,-100],       [2,2],[-100,-100],[4,2],[5,2],[6,2],[7,2],[-100,-100],[9,2],     [-100,-100],[-100,-100],
    [0,3],[1,3],[2,3],[3,3],[4,3],                   [-100,-100],[-100,-100],               [7,3],[8,3],[9,3],[10,3],[11,3],
    [0,4],[1,4],[2,4],[3,4],[4,4],                   [-100,-100],[-100,-100],               [7,4],[8,4],[9,4],[10,4],[11,4],
    [-100,-100],[-100,-100],[-100,-100],[-100,-100],[4,5],[5,5],[6,5],[7,5],[-100,-100],[-100,-100],[-100,-100],[-100,-100],
    [0,6],[1,6],[2,6],                  [-100,-100],[4,6],[5,6],[6,6],[7,6],[-100,-100],                [9,6],[10,6],[11,6],
    [0,7],[1,7],[2,7],                  [-100,-100],[4,7],[5,7],[6,7],[7,7],[-100,-100],                [9,7],[10,7],[11,7],
    [0,8],[1,8],[2,8],                              [3,8],[4,8],[5,8],[6,8],                [7,8],[8,8],[9,8],[10,8],[11,8],
    [-100,-100],[-100,-100],[-100,-100],[-100,-100],[4,9],[5,9],[6,9],[7,9],[-100,-100],[-100,-100],[-100,-100],[-100,-100],
    [0,10],[1,10],[2,10],                         [3,10],[4,10],[5,10],[6,10],         [7,10],[8,10],[9,10],[10,10],[-100,-100],
  ]

  packman.x = 7 + 11*box
  packman.y = 7 + 10*box
}

// btnMainMenu4.onclick = function(){
//   location.reload()
//   level = 4;
// }

let side = genRandSide()
let sideStr = " "

let side1 = genRandSide()
let sideStr1 = " "

let side2 = genRandSide()
  let sideStr2 = " "

  let side3 = genRandSide()
  let sideStr3 = " "

  
function ghostMovement(){
  if (level == 1){
    let side = genRandSide()
    let sideStr = " "
  console.log(count)
    if (count ==5 || count ==10 || count ==15 || count ==30) ghost1.x -= box
    if (count ==20 || count ==25) ghost1.y -= box
    if (count==60 + 160*qj)  ghost1.x -=box
    if (count==65 + 160*qj)  ghost1.y -=box
    if (count==70 + 160*qj)  ghost1.x +=box
    if (count==75 + 160*qj)  ghost1.x +=box
    if (count==80 + 160*qj)  ghost1.y +=box
    if (count==85 + 160*qj)  ghost1.y +=box
    if (count==90 + 160*qj)  ghost1.y +=box
    if (count==95 + 160*qj)  ghost1.x +=box
    if (count==100 + 160*qj) ghost1.x +=box
    if (count==105 + 160*qj) ghost1.y -=box
    if (count==110 + 160*qj) ghost1.y -=box
    if (count==115 + 160*qj) ghost1.y -=box
    if (count==120 + 160*qj) ghost1.x +=box
    if (count==125 + 160*qj) ghost1.y +=box 
    if (count==130 + 160*qj) ghost1.y +=box 
    if (count==135 + 160*qj) ghost1.x -=box 
    if (count==140 + 160*qj) ghost1.y +=box  
    if (count==145 + 160*qj) ghost1.y +=box  
    if (count==150 + 160*qj) ghost1.x -=box 
    if (count==155 + 160*qj) ghost1.x -=box  
    if (count==160 + 160*qj) ghost1.x -=box 
    if (count==165 + 160*qj) ghost1.x -=box
    if (count==170 + 160*qj) ghost1.y -=box
    if (count==175 + 160*qj) ghost1.x +=box
    if (count==180 + 160*qj) ghost1.x +=box
    if (count==185 + 160*qj) ghost1.y -=box
    if (count==190 + 160*qj) ghost1.y -=box
    if (count==195 + 160*qj) ghost1.y -=box
    if (count==200 + 160*qj) ghost1.x -=box
    if (count==205 + 160*qj) ghost1.x -=box
    if (count==210 + 160*qj) ghost1.y +=box 
    if (count==215 + 160*qj) ghost1.x +=box
    

  let side1 = genRandSide()
  let sideStr1 = " "

  if (count ==5 || count ==10 || count ==15 || count ==30) ghost2.x += box
  if (count ==20 || count ==25) ghost2.y -= box
  if (count==60 + 160*qj)  ghost2.x +=box
  if (count==65 + 160*qj)  ghost2.y -=box
  if (count==70 + 160*qj)  ghost2.x -=box
  if (count==75 + 160*qj)  ghost2.x -=box
  if (count==80 + 160*qj)  ghost2.y +=box
  if (count==85 + 160*qj)  ghost2.y +=box
  if (count==90 + 160*qj)  ghost2.y +=box
  if (count==95 + 160*qj)  ghost2.x -=box
  if (count==100 + 160*qj) ghost2.x -=box
  if (count==105 + 160*qj) ghost2.y -=box
  if (count==110 + 160*qj) ghost2.y -=box
  if (count==115 + 160*qj) ghost2.y -=box
  if (count==120 + 160*qj) ghost2.x -=box
  if (count==125 + 160*qj) ghost2.y +=box 
  if (count==130 + 160*qj) ghost2.y +=box 
  if (count==135 + 160*qj) ghost2.x +=box 
  if (count==140 + 160*qj) ghost2.y +=box  
  if (count==145 + 160*qj) ghost2.y +=box  
  if (count==150 + 160*qj) ghost2.x +=box 
  if (count==155 + 160*qj) ghost2.x +=box  
  if (count==160 + 160*qj) ghost2.x +=box 
  if (count==165 + 160*qj) ghost2.x +=box
  if (count==170 + 160*qj) ghost2.y -=box
  if (count==175 + 160*qj) ghost2.x -=box
  if (count==180 + 160*qj) ghost2.x -=box
  if (count==185 + 160*qj) ghost2.y -=box
  if (count==190 + 160*qj) ghost2.y -=box
  if (count==195 + 160*qj) ghost2.y -=box
  if (count==200 + 160*qj) ghost2.x +=box
  if (count==205 + 160*qj) ghost2.x +=box
  if (count==210 + 160*qj) ghost2.y +=box 
  if (count==215 + 160*qj) {ghost2.x -=box; qj+=1}
  

  let side2 = genRandSide()
  let sideStr2 = " "

  if (count == 5 || count == 15 || count == 20 || count == 25) ghost3.y += box
  if (count == 10 || count == 30 || count == 35 || count == 40) ghost3.x -= box
  if (count == 45) ghost3.y -= box
  if (count==60 + 120*ij)  ghost3.x +=box
  if (count==65 + 120*ij)  ghost3.y -=box
  if (count==70 + 120*ij)  ghost3.x -=box
  if (count==75 + 120*ij)  ghost3.x -=box
  if (count==80 + 120*ij)  ghost3.y +=box
  if (count==85 + 120*ij)  ghost3.y +=box
  if (count==90 + 120*ij)  ghost3.x +=box
  if (count==95 + 120*ij)  ghost3.x +=box
  if (count==100 + 120*ij) ghost3.x +=box  
  if (count==105 + 120*ij) ghost3.x +=box
  if (count==110 + 120*ij)  ghost3.y -=box
  if (count==115 + 120*ij)  ghost3.y -=box
  if (count==120 + 120*ij)  ghost3.y -=box
  if (count==125 + 120*ij)  ghost3.x +=box
  if (count==130 + 120*ij)  ghost3.y +=box
  if (count==135 + 120*ij)  ghost3.y +=box
  if (count==140 + 120*ij)  ghost3.y +=box
  if (count==145 + 120*ij)  ghost3.y +=box
  if (count==150 + 120*ij)  ghost3.x -=box
  if (count==155 + 120*ij)  ghost3.y -=box
  if (count==160 + 120*ij)  ghost3.x -=box
  if (count==165 + 120*ij)  ghost3.x -=box
  if (count==170 + 120*ij)  ghost3.x -=box
  if (count==175 + 120*ij)  ghost3.y -=box

  
  let side3 = genRandSide()
  let sideStr3 = " "

  
  if (count == 5 || count == 15 || count == 20 || count == 25) ghost4.y += box
  if (count == 10 || count == 30 || count == 35 || count == 40) ghost4.x += box
  if (count == 45) ghost4.y -= box
  if (count==60 + 120*ij)  ghost4.x -=box
  if (count==65 + 120*ij)  ghost4.y -=box
  if (count==70 + 120*ij)  ghost4.x +=box
  if (count==75 + 120*ij)  ghost4.x +=box
  if (count==80 + 120*ij)  ghost4.y +=box
  if (count==85 + 120*ij)  ghost4.y +=box
  if (count==90 + 120*ij)  ghost4.x -=box
  if (count==95 + 120*ij)  ghost4.x -=box
  if (count==100 + 120*ij) ghost4.x -=box
  if (count==105 + 120*ij) ghost4.x -=box
  if (count==110 + 120*ij)  ghost4.y -=box
  if (count==115 + 120*ij)  ghost4.y -=box  
  if (count==120 + 120*ij)  ghost4.y -=box
  if (count==125 + 120*ij)  ghost4.x -=box
  if (count==130 + 120*ij)  ghost4.y +=box
  if (count==135 + 120*ij)  ghost4.y +=box
  if (count==140 + 120*ij)  ghost4.y +=box
  if (count==145 + 120*ij)  ghost4.y +=box
  if (count==150 + 120*ij)  ghost4.x +=box
  if (count==155 + 120*ij)  ghost4.y -=box
  if (count==160 + 120*ij)  ghost4.x +=box
  if (count==165 + 120*ij)  ghost4.x +=box
  if (count==170 + 120*ij)  ghost4.x +=box
  if (count==175 + 120*ij) {ghost4.y -=box; ij+=1}

  }
  if (level == 3){
      let side = genRandSide()
      let sideStr = " "

      if (count ==5 || count ==10 || count ==15 || count ==30) ghost1.x -= box
      if (count ==20 || count ==25) ghost1.y -= box
      if (count > 60) {
      if (side == 1) {sideStr = "right"; ghost1.x += box}
      if (side == 2) {sideStr = "up"; ghost1.y -= box}
      if (side == 3) {sideStr = "left"; ghost1.x -= box}
      if (side == 4) {sideStr = "down";ghost1.y += box}
    }

  // Реализация движения 2 призрака
  
    let side1 = genRandSide()
    let sideStr1 = " "
  
    if (count ==5 || count ==10 || count ==15 || count ==30) ghost2.x += box
    if (count ==20 || count ==25) ghost2.y -= box
    if (count > 60) {
      if (side1 == 1) {sideStr1 = "right"; ghost2.x += box}
      if (side1 == 2) {sideStr1 = "up"; ghost2.y -= box}
      if (side1 == 3) {sideStr1 = "left"; ghost2.x -= box}
      if (side1 == 4) {sideStr1 = "down";ghost2.y += box}
    }

    // Реализация движения 3 призрака
    let side2 = genRandSide()
    let sideStr2 = " "

    if (count == 5 || count == 15 || count == 20 || count == 25) ghost3.y += box
    if (count == 10 || count == 30 || count == 35 || count == 40) ghost3.x -= box
    if (count == 45) ghost3.y -= box
    if (count > 60) {
      if (side2 == 1) {sideStr2 = "right"; ghost3.x += box}
      if (side2 == 2) {sideStr2 = "up"; ghost3.y -= box}
      if (side2 == 3) {sideStr2 = "left"; ghost3.x -= box}
      if (side2 == 4) {sideStr2 = "down";ghost3.y += box}
    }

    // Реализация движения 4 призрака
    let side3 = genRandSide()
    let sideStr3 = " "

    if (count == 5 || count == 15 || count == 20 || count == 25) ghost4.y += box
    if (count == 10 || count == 30 || count == 35 || count == 40) ghost4.x += box
    if (count == 45) ghost4.y -= box
    
    
    if (count > 60) {
      if (side3 == 1) {sideStr3 = "right"; ghost4.x += box}
      if (side3 == 2) {sideStr3 = "up"; ghost4.y -= box}
      if (side3 == 3) {sideStr3 = "left"; ghost4.x -= box}
      if (side3 == 4) {sideStr3 = "down";ghost4.y += box}



      /////////////////////////////////////
/////////////////////////////////////
///////Условие для призрака №1///////
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



/////////////////////////////////////
/////////////////////////////////////
///////Условие для призрака №2///////
/////////////////////////////////////
/////////////////////////////////////



//Условие для нижней левой стенки
if (ghost2.x < 4 * box && ghost2.y < 10 * box && ghost2.y > 9 * box) {
  if (sideStr1 == "left") ghost2.x = 7 + 4 * box;
  if (sideStr1 == "up") ghost2.y = 7 + 10 * box;
  if (sideStr1 == "down") ghost2.y = 7 + 8 * box;
}

//Условие для границ карты слева/справа
if ((ghost2.y<7+2*box || ghost2.y>7+4*box)) { 
  if (ghost2.x < 0 &&  sideStr1 == "left") ghost2.x = 7.5;
  if (ghost2.x > 530 &&  sideStr1 == "right") ghost2.x = 492;
} 

//Условие для границ сверху/снизу 
if (ghost2.y > 487 && sideStr1 =="down") ghost2.y = 447;
if (ghost2.y < 0 && sideStr1 == "up") ghost2.y = 7;

//Условие для нижней правой стенки
if (ghost2.x > 7+7*box && ghost2.y==7+9*box && sideStr1 == "right") ghost2.x = 7 + 7*box;
if (ghost2.x > 8*box && ghost2.y==7+9*box){
  if (sideStr1 == "up") ghost2.y = 7 + 10*box;
  if (sideStr1 == "down") ghost2.y = 7 + 8*box;
}
//Условие для горизонтальной стенки по цетру слева
if (ghost2.x < 4*box && ghost2.y==7+5*box){
  if (sideStr1 == "left") ghost2.x = 7 + 4*box;
  if (sideStr1 == "down") ghost2.y = 7 + 4*box;
  if (sideStr1 == "up") ghost2.y = 7 + 6*box;
}
//Условие для вертикальной стенки по центру слева
if (ghost2.x >2*box && ghost2.x<4*box && ghost2.y > 5*box && ghost2.y < 8*box){
  if (sideStr1 == "right") ghost2.x = 7 + 2*box;
  if (sideStr1 == "left")  ghost2.x = 7 + 4*box;
  }
if (ghost2.x >10+2*box && ghost2.x<4*box && ghost2.y > 5*box && ghost2.y < 8*box && sideStr1 == "up") ghost2.y = 7 + 8*box;
//Условие для горизонтальной стенки по центру справа
if (ghost2.x > 10+7*box && ghost2.y==7+5*box){
  if (sideStr1 == "up") ghost2.y = 7 + 6*box;
  if (sideStr1 == "down") ghost2.y = 7 + 4*box;
  if (sideStr1 == "right") ghost2.x = 7 + 7*box;
}
//Условие для вертикальной стенки по центру справа
if (ghost2.x >10+7*box && ghost2.x<9*box && ghost2.y > 5*box && ghost2.y < 8*box) {
  if (sideStr1 == "right") ghost2.x = 7 + 7*box;
  if (sideStr1 == "left") ghost2.x = 7 + 9*box;
  if (sideStr1 == "up") ghost2.y = 7 + 8*box;
}
//Условие для горизотнальной стенки сверху слева
if(ghost2.y > 7 + 1*box && ghost2.y <7+ 3*box && ghost2.x<2*box){
  if (sideStr1 =="up") ghost2.y = 7 + 3*box;
  if (sideStr1 =="down") ghost2.y = 7 + 1*box;
  if (sideStr1 =="left") ghost2.x = 7 + 2*box;
}
//Условие для горизонтальной стенки сврху слева
if (ghost2.y > 7+1*box && ghost2.y < 3*box && ghost2.x>10*box) {
  if (sideStr1 =="down") ghost2.y = 7 + 1*box;
  if (sideStr1 =="up") ghost2.y = 7 + 3*box;
  if (sideStr1 =="right") ghost2.x = 7 + 9*box;
}
//Условие для вертикальной стенки сверху слева
if (ghost2.x >7+2*box && ghost2.x<7+4*box && ghost2.y<7+3*box) {
  if (sideStr1 == "right") ghost2.x = 7 + 2*box;
  if (sideStr1 == "left") ghost2.x = 7 + 4*box;
  if (sideStr1 == "up") ghost2.y = 7 + 3*box;
}
//Условие для вертикальной стенки сверху справа
if (ghost2.x >7+7*box && ghost2.x<7+9*box && ghost2.y<7+3*box) {
  if (sideStr1 == "up") ghost2.y = 7 + 3*box;
  if (sideStr1 == "left") ghost2.x = 7 + 9*box;
  if (sideStr1 == "right") ghost2.x = 7 + 7*box;
}
//Условие для центрального квадрата
if (ghost2.x>7+4*box && ghost2.x<7+7*box && ghost2.y > 7+2*box && ghost2.y<7+5*box) {
  if (sideStr1 == "right") ghost2.x = 7 + 4*box;
  if (sideStr1 == "up") ghost2.y = 7 + 5*box;
  if (sideStr1 == "left") ghost2.x = 7 + 7*box;
  if (sideStr1 == "down") ghost2.y = 7 + 2*box;
}
//Условие для прохода слева
if (ghost2.x<0 && ghost2.y>7+2*box && ghost2.y<5*box && sideStr1 == "left") ghost2.x = 7 + 11*box;

//Условие для прохода справа
if (ghost2.x>530 && ghost2.y>7+2*box && ghost2.y<5*box  && sideStr1 == "right") ghost2.x = 7 + 0*box;


/////////////////////////////////////
/////////////////////////////////////
///////Условие для призрака №3///////
/////////////////////////////////////
/////////////////////////////////////


//Условие для нижней левой стенки
if (ghost3.x < 4 * box && ghost3.y < 10 * box && ghost3.y > 9 * box) {
  if (sideStr2 == "left") ghost3.x = 7 + 4 * box;
  if (sideStr2 == "up") ghost3.y = 7 + 10 * box;
  if (sideStr2 == "down") ghost3.y = 7 + 8 * box;
}

//Условие для границ карты слева/справа
if ((ghost3.y<7+2*box || ghost3.y>7+4*box)) { 
  if (ghost3.x < 0 &&  sideStr2 == "left") ghost3.x = 7.5;
  if (ghost3.x > 530 &&  sideStr2 == "right") ghost3.x = 492;
} 

//Условие для границ сверху/снизу 
if (ghost3.y > 487 && sideStr2 =="down") ghost3.y = 447;
if (ghost3.y < 0 && sideStr2 == "up") ghost3.y = 7;

//Условие для нижней правой стенки
if (ghost3.x > 7+7*box && ghost3.y==7+9*box && sideStr2 == "right") ghost3.x = 7 + 7*box;
if (ghost3.x > 8*box && ghost3.y==7+9*box){
  if (sideStr2 == "up") ghost3.y = 7 + 10*box;
  if (sideStr2 == "down") ghost3.y = 7 + 8*box;
}
//Условие для горизонтальной стенки по цетру слева
if (ghost3.x < 4*box && ghost3.y==7+5*box){
  if (sideStr2 == "left") ghost3.x = 7 + 4*box;
  if (sideStr2 == "down") ghost3.y = 7 + 4*box;
  if (sideStr2 == "up") ghost3.y = 7 + 6*box;
}
//Условие для вертикальной стенки по центру слева
if (ghost3.x >2*box && ghost3.x<4*box && ghost3.y > 5*box && ghost3.y < 8*box){
  if (sideStr2 == "right") ghost3.x = 7 + 2*box;
  if (sideStr2 == "left")  ghost3.x = 7 + 4*box;
  }
if (ghost3.x >10+2*box && ghost3.x<4*box && ghost3.y > 5*box && ghost3.y < 8*box && sideStr2 == "up") ghost3.y = 7 + 8*box;
//Условие для горизонтальной стенки по центру справа
if (ghost3.x > 10+7*box && ghost3.y==7+5*box){
  if (sideStr2 == "up") ghost3.y = 7 + 6*box;
  if (sideStr2 == "down") ghost3.y = 7 + 4*box;
  if (sideStr2 == "right") ghost3.x = 7 + 7*box;
}
//Условие для вертикальной стенки по центру справа
if (ghost3.x >10+7*box && ghost3.x<9*box && ghost3.y > 5*box && ghost3.y < 8*box) {
  if (sideStr2 == "right") ghost3.x = 7 + 7*box;
  if (sideStr2 == "left") ghost3.x = 7 + 9*box;
  if (sideStr2 == "up") ghost3.y = 7 + 8*box;
}
//Условие для горизотнальной стенки сверху слева
if(ghost3.y > 7 + 1*box && ghost3.y <7+ 3*box && ghost3.x<2*box){
  if (sideStr2 =="up") ghost3.y = 7 + 3*box;
  if (sideStr2 =="down") ghost3.y = 7 + 1*box;
  if (sideStr2 =="left") ghost3.x = 7 + 2*box;
}
//Условие для горизонтальной стенки сврху слева
if (ghost3.y > 7+1*box && ghost3.y < 3*box && ghost3.x>10*box) {
  if (sideStr2 =="down") ghost3.y = 7 + 1*box;
  if (sideStr2 =="up") ghost3.y = 7 + 3*box;
  if (sideStr2 =="right") ghost3.x = 7 + 9*box;
}
//Условие для вертикальной стенки сверху слева
if (ghost3.x >7+2*box && ghost3.x<7+4*box && ghost3.y<7+3*box) {
  if (sideStr2 == "right") ghost3.x = 7 + 2*box;
  if (sideStr2 == "left") ghost3.x = 7 + 4*box;
  if (sideStr2 == "up") ghost3.y = 7 + 3*box;
}
//Условие для вертикальной стенки сверху справа
if (ghost3.x >7+7*box && ghost3.x<7+9*box && ghost3.y<7+3*box) {
  if (sideStr2 == "up") ghost3.y = 7 + 3*box;
  if (sideStr2 == "left") ghost3.x = 7 + 9*box;
  if (sideStr2 == "right") ghost3.x = 7 + 7*box;
}
//Условие для центрального квадрата
if (ghost3.x>7+4*box && ghost3.x<7+7*box && ghost3.y > 7+2*box && ghost3.y<7+5*box) {
  if (sideStr2 == "right") ghost3.x = 7 + 4*box;
  if (sideStr2 == "up") ghost3.y = 7 + 5*box;
  if (sideStr2 == "left") ghost3.x = 7 + 7*box;
  if (sideStr2 == "down") ghost3.y = 7 + 2*box;
}
//Условие для прохода слева
if (ghost3.x<0 && ghost3.y>7+2*box && ghost3.y<5*box && sideStr2 == "left") ghost3.x = 7 + 11*box;

//Условие для прохода справа
if (ghost3.x>530 && ghost3.y>7+2*box && ghost3.y<5*box  && sideStr2 == "right") ghost3.x = 7 + 0*box;



/////////////////////////////////////
/////////////////////////////////////
///////Условие для призрака №4///////
/////////////////////////////////////
/////////////////////////////////////


//Условие для нижней левой стенки
if (ghost4.x < 4 * box && ghost4.y < 10 * box && ghost4.y > 9 * box) {
  if (sideStr3 == "left") ghost4.x = 7 + 4 * box;
  if (sideStr3 == "up") ghost4.y = 7 + 10 * box;
  if (sideStr3 == "down") ghost4.y = 7 + 8 * box;
}

//Условие для границ карты слева/справа
if ((ghost4.y<7+2*box || ghost4.y>7+4*box)) { 
  if (ghost4.x < 0 &&  sideStr3 == "left") ghost4.x = 7.5;
  if (ghost4.x > 530 &&  sideStr3 == "right") ghost4.x = 492;
} 

//Условие для границ сверху/снизу 
if (ghost4.y > 487 && sideStr3 =="down") ghost4.y = 447;
if (ghost4.y < 0 && sideStr3 == "up") ghost4.y = 7;

//Условие для нижней правой стенки
if (ghost4.x > 7+7*box && ghost4.y==7+9*box && sideStr3 == "right") ghost4.x = 7 + 7*box;
if (ghost4.x > 8*box && ghost4.y==7+9*box){
  if (sideStr3 == "up") ghost4.y = 7 + 10*box;
  if (sideStr3 == "down") ghost4.y = 7 + 8*box;
}
//Условие для горизонтальной стенки по цетру слева
if (ghost4.x < 4*box && ghost4.y==7+5*box){
  if (sideStr3 == "left") ghost4.x = 7 + 4*box;
  if (sideStr3 == "down") ghost4.y = 7 + 4*box;
  if (sideStr3 == "up") ghost4.y = 7 + 6*box;
}
//Условие для вертикальной стенки по центру слева
if (ghost4.x >2*box && ghost4.x<4*box && ghost4.y > 5*box && ghost4.y < 8*box){
  if (sideStr3 == "right") ghost4.x = 7 + 2*box;
  if (sideStr3 == "left")  ghost4.x = 7 + 4*box;
  }
if (ghost4.x >10+2*box && ghost4.x<4*box && ghost4.y > 5*box && ghost4.y < 8*box && sideStr3 == "up") ghost4.y = 7 + 8*box;
//Условие для горизонтальной стенки по центру справа
if (ghost4.x > 10+7*box && ghost4.y==7+5*box){
  if (sideStr3 == "up") ghost4.y = 7 + 6*box;
  if (sideStr3 == "down") ghost4.y = 7 + 4*box;
  if (sideStr3 == "right") ghost4.x = 7 + 7*box;
}
//Условие для вертикальной стенки по центру справа
if (ghost4.x >10+7*box && ghost4.x<9*box && ghost4.y > 5*box && ghost4.y < 8*box) {
  if (sideStr3 == "right") ghost4.x = 7 + 7*box;
  if (sideStr3 == "left") ghost4.x = 7 + 9*box;
  if (sideStr3 == "up") ghost4.y = 7 + 8*box;
}
//Условие для горизотнальной стенки сверху слева
if(ghost4.y > 7 + 1*box && ghost4.y <7+ 3*box && ghost4.x<2*box){
  if (sideStr3 =="up") ghost4.y = 7 + 3*box;
  if (sideStr3 =="down") ghost4.y = 7 + 1*box;
  if (sideStr3 =="left") ghost4.x = 7 + 2*box;
}
//Условие для горизонтальной стенки сврху слева
if (ghost4.y > 7+1*box && ghost4.y < 3*box && ghost4.x>10*box) {
  if (sideStr3 =="down") ghost4.y = 7 + 1*box;
  if (sideStr3 =="up") ghost4.y = 7 + 3*box;
  if (sideStr3 =="right") ghost4.x = 7 + 9*box;
}
//Условие для вертикальной стенки сверху слева
if (ghost4.x >7+2*box && ghost4.x<7+4*box && ghost4.y<7+3*box) {
  if (sideStr3 == "right") ghost4.x = 7 + 2*box;
  if (sideStr3 == "left") ghost4.x = 7 + 4*box;
  if (sideStr3 == "up") ghost4.y = 7 + 3*box;
}
//Условие для вертикальной стенки сверху справа
if (ghost4.x >7+7*box && ghost4.x<7+9*box && ghost4.y<7+3*box) {
  if (sideStr3 == "up") ghost4.y = 7 + 3*box;
  if (sideStr3 == "left") ghost4.x = 7 + 9*box;
  if (sideStr3 == "right") ghost4.x = 7 + 7*box;
}
//Условие для центрального квадрата
if (ghost4.x>7+4*box && ghost4.x<7+7*box && ghost4.y > 7+2*box && ghost4.y<7+5*box) {
  if (sideStr3 == "right") ghost4.x = 7 + 4*box;
  if (sideStr3 == "up") ghost4.y = 7 + 5*box;
  if (sideStr3 == "left") ghost4.x = 7 + 7*box;
  if (sideStr3 == "down") ghost4.y = 7 + 2*box;
}
//Условие для прохода слева
if (ghost4.x<0 && ghost4.y>7+2*box && ghost4.y<5*box && sideStr3 == "left") ghost4.x = 7 + 11*box;

//Условие для прохода справа
if (ghost4.x>530 && ghost4.y>7+2*box && ghost4.y<5*box  && sideStr3 == "right") ghost4.x = 7 + 0*box;
  }
  }

  if (level == 2){
    let side = genRandSide()
    let sideStr = " "

    if (count ==5 || count ==10 || count ==15 || count ==30) ghost1.x -= box
    if (count ==20 || count ==25) ghost1.y -= box
    if (count > 60) {
    if (side == 1) {sideStr = "right"; ghost1.x += box}
    if (side == 2) {sideStr = "up"; ghost1.y -= box}
    if (side == 3) {sideStr = "left"; ghost1.x -= box}
    if (side == 4) {sideStr = "down";ghost1.y += box}
  }

// Реализация движения 2 призрака

  let side1 = genRandSide()
  let sideStr1 = " "

  if (count ==5 || count ==10 || count ==15 || count ==30) ghost2.x += box
  if (count ==20 || count ==25) ghost2.y -= box
  if (count > 60) {
    if (side1 == 1) {sideStr1 = "right"; ghost2.x += box}
    if (side1 == 2) {sideStr1 = "up"; ghost2.y -= box}
    if (side1 == 3) {sideStr1 = "left"; ghost2.x -= box}
    if (side1 == 4) {sideStr1 = "down";ghost2.y += box}
  }

  // Реализация движения 3 призрака
  let side2 = genRandSide()
  let sideStr2 = " "

  if (count == 5 || count == 15 || count == 20 || count == 25) ghost3.y += box
  if (count == 10 || count == 30 || count == 35 || count == 40) ghost3.x -= box
  if (count == 45) ghost3.y -= box
  if (count > 60) {
    if (side2 == 1) {sideStr2 = "right"; ghost3.x += box}
    if (side2 == 2) {sideStr2 = "up"; ghost3.y -= box}
    if (side2 == 3) {sideStr2 = "left"; ghost3.x -= box}
    if (side2 == 4) {sideStr2 = "down";ghost3.y += box}
  }

  // Реализация движения 4 призрака
  let side3 = genRandSide()
  let sideStr3 = " "

  if (count == 5 || count == 15 || count == 20 || count == 25) ghost4.y += box
  if (count == 10 || count == 30 || count == 35 || count == 40) ghost4.x += box
  if (count == 45) ghost4.y -= box
  
  
  if (count > 60) {
    if (side3 == 1) {sideStr3 = "right"; ghost4.x += box}
    if (side3 == 2) {sideStr3 = "up"; ghost4.y -= box}
    if (side3 == 3) {sideStr3 = "left"; ghost4.x -= box}
    if (side3 == 4) {sideStr3 = "down";ghost4.y += box}



    /////////////////////////////////////
/////////////////////////////////////
///////Условие для призрака №1///////
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



/////////////////////////////////////
/////////////////////////////////////
///////Условие для призрака №2///////
/////////////////////////////////////
/////////////////////////////////////



//Условие для нижней левой стенки
if (ghost2.x < 4 * box && ghost2.y < 10 * box && ghost2.y > 9 * box) {
if (sideStr1 == "left") ghost2.x = 7 + 4 * box;
if (sideStr1 == "up") ghost2.y = 7 + 10 * box;
if (sideStr1 == "down") ghost2.y = 7 + 8 * box;
}

//Условие для границ карты слева/справа
if ((ghost2.y<7+2*box || ghost2.y>7+4*box)) { 
if (ghost2.x < 0 &&  sideStr1 == "left") ghost2.x = 7.5;
if (ghost2.x > 530 &&  sideStr1 == "right") ghost2.x = 492;
} 

//Условие для границ сверху/снизу 
if (ghost2.y > 487 && sideStr1 =="down") ghost2.y = 447;
if (ghost2.y < 0 && sideStr1 == "up") ghost2.y = 7;

//Условие для нижней правой стенки
if (ghost2.x > 7+7*box && ghost2.y==7+9*box && sideStr1 == "right") ghost2.x = 7 + 7*box;
if (ghost2.x > 8*box && ghost2.y==7+9*box){
if (sideStr1 == "up") ghost2.y = 7 + 10*box;
if (sideStr1 == "down") ghost2.y = 7 + 8*box;
}
//Условие для горизонтальной стенки по цетру слева
if (ghost2.x < 4*box && ghost2.y==7+5*box){
if (sideStr1 == "left") ghost2.x = 7 + 4*box;
if (sideStr1 == "down") ghost2.y = 7 + 4*box;
if (sideStr1 == "up") ghost2.y = 7 + 6*box;
}
//Условие для вертикальной стенки по центру слева
if (ghost2.x >2*box && ghost2.x<4*box && ghost2.y > 5*box && ghost2.y < 8*box){
if (sideStr1 == "right") ghost2.x = 7 + 2*box;
if (sideStr1 == "left")  ghost2.x = 7 + 4*box;
}
if (ghost2.x >10+2*box && ghost2.x<4*box && ghost2.y > 5*box && ghost2.y < 8*box && sideStr1 == "up") ghost2.y = 7 + 8*box;
//Условие для горизонтальной стенки по центру справа
if (ghost2.x > 10+7*box && ghost2.y==7+5*box){
if (sideStr1 == "up") ghost2.y = 7 + 6*box;
if (sideStr1 == "down") ghost2.y = 7 + 4*box;
if (sideStr1 == "right") ghost2.x = 7 + 7*box;
}
//Условие для вертикальной стенки по центру справа
if (ghost2.x >10+7*box && ghost2.x<9*box && ghost2.y > 5*box && ghost2.y < 8*box) {
if (sideStr1 == "right") ghost2.x = 7 + 7*box;
if (sideStr1 == "left") ghost2.x = 7 + 9*box;
if (sideStr1 == "up") ghost2.y = 7 + 8*box;
}
//Условие для горизотнальной стенки сверху слева
if(ghost2.y > 7 + 1*box && ghost2.y <7+ 3*box && ghost2.x<2*box){
if (sideStr1 =="up") ghost2.y = 7 + 3*box;
if (sideStr1 =="down") ghost2.y = 7 + 1*box;
if (sideStr1 =="left") ghost2.x = 7 + 2*box;
}
//Условие для горизонтальной стенки сврху слева
if (ghost2.y > 7+1*box && ghost2.y < 3*box && ghost2.x>10*box) {
if (sideStr1 =="down") ghost2.y = 7 + 1*box;
if (sideStr1 =="up") ghost2.y = 7 + 3*box;
if (sideStr1 =="right") ghost2.x = 7 + 9*box;
}
//Условие для вертикальной стенки сверху слева
if (ghost2.x >7+2*box && ghost2.x<7+4*box && ghost2.y<7+3*box) {
if (sideStr1 == "right") ghost2.x = 7 + 2*box;
if (sideStr1 == "left") ghost2.x = 7 + 4*box;
if (sideStr1 == "up") ghost2.y = 7 + 3*box;
}
//Условие для вертикальной стенки сверху справа
if (ghost2.x >7+7*box && ghost2.x<7+9*box && ghost2.y<7+3*box) {
if (sideStr1 == "up") ghost2.y = 7 + 3*box;
if (sideStr1 == "left") ghost2.x = 7 + 9*box;
if (sideStr1 == "right") ghost2.x = 7 + 7*box;
}
//Условие для центрального квадрата
if (ghost2.x>7+4*box && ghost2.x<7+7*box && ghost2.y > 7+2*box && ghost2.y<7+5*box) {
if (sideStr1 == "right") ghost2.x = 7 + 4*box;
if (sideStr1 == "up") ghost2.y = 7 + 5*box;
if (sideStr1 == "left") ghost2.x = 7 + 7*box;
if (sideStr1 == "down") ghost2.y = 7 + 2*box;
}
//Условие для прохода слева
if (ghost2.x<0 && ghost2.y>7+2*box && ghost2.y<5*box && sideStr1 == "left") ghost2.x = 7 + 11*box;

//Условие для прохода справа
if (ghost2.x>530 && ghost2.y>7+2*box && ghost2.y<5*box  && sideStr1 == "right") ghost2.x = 7 + 0*box;


/////////////////////////////////////
/////////////////////////////////////
///////Условие для призрака №3///////
/////////////////////////////////////
/////////////////////////////////////


//Условие для нижней левой стенки
if (ghost3.x < 4 * box && ghost3.y < 10 * box && ghost3.y > 9 * box) {
if (sideStr2 == "left") ghost3.x = 7 + 4 * box;
if (sideStr2 == "up") ghost3.y = 7 + 10 * box;
if (sideStr2 == "down") ghost3.y = 7 + 8 * box;
}

//Условие для границ карты слева/справа
if ((ghost3.y<7+2*box || ghost3.y>7+4*box)) { 
if (ghost3.x < 0 &&  sideStr2 == "left") ghost3.x = 7.5;
if (ghost3.x > 530 &&  sideStr2 == "right") ghost3.x = 492;
} 

//Условие для границ сверху/снизу 
if (ghost3.y > 487 && sideStr2 =="down") ghost3.y = 447;
if (ghost3.y < 0 && sideStr2 == "up") ghost3.y = 7;

//Условие для нижней правой стенки
if (ghost3.x > 7+7*box && ghost3.y==7+9*box && sideStr2 == "right") ghost3.x = 7 + 7*box;
if (ghost3.x > 8*box && ghost3.y==7+9*box){
if (sideStr2 == "up") ghost3.y = 7 + 10*box;
if (sideStr2 == "down") ghost3.y = 7 + 8*box;
}
//Условие для горизонтальной стенки по цетру слева
if (ghost3.x < 4*box && ghost3.y==7+5*box){
if (sideStr2 == "left") ghost3.x = 7 + 4*box;
if (sideStr2 == "down") ghost3.y = 7 + 4*box;
if (sideStr2 == "up") ghost3.y = 7 + 6*box;
}
//Условие для вертикальной стенки по центру слева
if (ghost3.x >2*box && ghost3.x<4*box && ghost3.y > 5*box && ghost3.y < 8*box){
if (sideStr2 == "right") ghost3.x = 7 + 2*box;
if (sideStr2 == "left")  ghost3.x = 7 + 4*box;
}
if (ghost3.x >10+2*box && ghost3.x<4*box && ghost3.y > 5*box && ghost3.y < 8*box && sideStr2 == "up") ghost3.y = 7 + 8*box;
//Условие для горизонтальной стенки по центру справа
if (ghost3.x > 10+7*box && ghost3.y==7+5*box){
if (sideStr2 == "up") ghost3.y = 7 + 6*box;
if (sideStr2 == "down") ghost3.y = 7 + 4*box;
if (sideStr2 == "right") ghost3.x = 7 + 7*box;
}
//Условие для вертикальной стенки по центру справа
if (ghost3.x >10+7*box && ghost3.x<9*box && ghost3.y > 5*box && ghost3.y < 8*box) {
if (sideStr2 == "right") ghost3.x = 7 + 7*box;
if (sideStr2 == "left") ghost3.x = 7 + 9*box;
if (sideStr2 == "up") ghost3.y = 7 + 8*box;
}
//Условие для горизотнальной стенки сверху слева
if(ghost3.y > 7 + 1*box && ghost3.y <7+ 3*box && ghost3.x<2*box){
if (sideStr2 =="up") ghost3.y = 7 + 3*box;
if (sideStr2 =="down") ghost3.y = 7 + 1*box;
if (sideStr2 =="left") ghost3.x = 7 + 2*box;
}
//Условие для горизонтальной стенки сврху слева
if (ghost3.y > 7+1*box && ghost3.y < 3*box && ghost3.x>10*box) {
if (sideStr2 =="down") ghost3.y = 7 + 1*box;
if (sideStr2 =="up") ghost3.y = 7 + 3*box;
if (sideStr2 =="right") ghost3.x = 7 + 9*box;
}
//Условие для вертикальной стенки сверху слева
if (ghost3.x >7+2*box && ghost3.x<7+4*box && ghost3.y<7+3*box) {
if (sideStr2 == "right") ghost3.x = 7 + 2*box;
if (sideStr2 == "left") ghost3.x = 7 + 4*box;
if (sideStr2 == "up") ghost3.y = 7 + 3*box;
}
//Условие для вертикальной стенки сверху справа
if (ghost3.x >7+7*box && ghost3.x<7+9*box && ghost3.y<7+3*box) {
if (sideStr2 == "up") ghost3.y = 7 + 3*box;
if (sideStr2 == "left") ghost3.x = 7 + 9*box;
if (sideStr2 == "right") ghost3.x = 7 + 7*box;
}
//Условие для центрального квадрата
if (ghost3.x>7+4*box && ghost3.x<7+7*box && ghost3.y > 7+2*box && ghost3.y<7+5*box) {
if (sideStr2 == "right") ghost3.x = 7 + 4*box;
if (sideStr2 == "up") ghost3.y = 7 + 5*box;
if (sideStr2 == "left") ghost3.x = 7 + 7*box;
if (sideStr2 == "down") ghost3.y = 7 + 2*box;
}
//Условие для прохода слева
if (ghost3.x<0 && ghost3.y>7+2*box && ghost3.y<5*box && sideStr2 == "left") ghost3.x = 7 + 11*box;

//Условие для прохода справа
if (ghost3.x>530 && ghost3.y>7+2*box && ghost3.y<5*box  && sideStr2 == "right") ghost3.x = 7 + 0*box;



/////////////////////////////////////
/////////////////////////////////////
///////Условие для призрака №4///////
/////////////////////////////////////
/////////////////////////////////////


//Условие для нижней левой стенки
if (ghost4.x < 4 * box && ghost4.y < 10 * box && ghost4.y > 9 * box) {
if (sideStr3 == "left") ghost4.x = 7 + 4 * box;
if (sideStr3 == "up") ghost4.y = 7 + 10 * box;
if (sideStr3 == "down") ghost4.y = 7 + 8 * box;
}

//Условие для границ карты слева/справа
if ((ghost4.y<7+2*box || ghost4.y>7+4*box)) { 
if (ghost4.x < 0 &&  sideStr3 == "left") ghost4.x = 7.5;
if (ghost4.x > 530 &&  sideStr3 == "right") ghost4.x = 492;
} 

//Условие для границ сверху/снизу 
if (ghost4.y > 487 && sideStr3 =="down") ghost4.y = 447;
if (ghost4.y < 0 && sideStr3 == "up") ghost4.y = 7;

//Условие для нижней правой стенки
if (ghost4.x > 7+7*box && ghost4.y==7+9*box && sideStr3 == "right") ghost4.x = 7 + 7*box;
if (ghost4.x > 8*box && ghost4.y==7+9*box){
if (sideStr3 == "up") ghost4.y = 7 + 10*box;
if (sideStr3 == "down") ghost4.y = 7 + 8*box;
}
//Условие для горизонтальной стенки по цетру слева
if (ghost4.x < 4*box && ghost4.y==7+5*box){
if (sideStr3 == "left") ghost4.x = 7 + 4*box;
if (sideStr3 == "down") ghost4.y = 7 + 4*box;
if (sideStr3 == "up") ghost4.y = 7 + 6*box;
}
//Условие для вертикальной стенки по центру слева
if (ghost4.x >2*box && ghost4.x<4*box && ghost4.y > 5*box && ghost4.y < 8*box){
if (sideStr3 == "right") ghost4.x = 7 + 2*box;
if (sideStr3 == "left")  ghost4.x = 7 + 4*box;
}
if (ghost4.x >10+2*box && ghost4.x<4*box && ghost4.y > 5*box && ghost4.y < 8*box && sideStr3 == "up") ghost4.y = 7 + 8*box;
//Условие для горизонтальной стенки по центру справа
if (ghost4.x > 10+7*box && ghost4.y==7+5*box){
if (sideStr3 == "up") ghost4.y = 7 + 6*box;
if (sideStr3 == "down") ghost4.y = 7 + 4*box;
if (sideStr3 == "right") ghost4.x = 7 + 7*box;
}
//Условие для вертикальной стенки по центру справа
if (ghost4.x >10+7*box && ghost4.x<9*box && ghost4.y > 5*box && ghost4.y < 8*box) {
if (sideStr3 == "right") ghost4.x = 7 + 7*box;
if (sideStr3 == "left") ghost4.x = 7 + 9*box;
if (sideStr3 == "up") ghost4.y = 7 + 8*box;
}
//Условие для горизотнальной стенки сверху слева
if(ghost4.y > 7 + 1*box && ghost4.y <7+ 3*box && ghost4.x<2*box){
if (sideStr3 =="up") ghost4.y = 7 + 3*box;
if (sideStr3 =="down") ghost4.y = 7 + 1*box;
if (sideStr3 =="left") ghost4.x = 7 + 2*box;
}
//Условие для горизонтальной стенки сврху слева
if (ghost4.y > 7+1*box && ghost4.y < 3*box && ghost4.x>10*box) {
if (sideStr3 =="down") ghost4.y = 7 + 1*box;
if (sideStr3 =="up") ghost4.y = 7 + 3*box;
if (sideStr3 =="right") ghost4.x = 7 + 9*box;
}
//Условие для вертикальной стенки сверху слева
if (ghost4.x >7+2*box && ghost4.x<7+4*box && ghost4.y<7+3*box) {
if (sideStr3 == "right") ghost4.x = 7 + 2*box;
if (sideStr3 == "left") ghost4.x = 7 + 4*box;
if (sideStr3 == "up") ghost4.y = 7 + 3*box;
}
//Условие для вертикальной стенки сверху справа
if (ghost4.x >7+7*box && ghost4.x<7+9*box && ghost4.y<7+3*box) {
if (sideStr3 == "up") ghost4.y = 7 + 3*box;
if (sideStr3 == "left") ghost4.x = 7 + 9*box;
if (sideStr3 == "right") ghost4.x = 7 + 7*box;
}
//Условие для центрального квадрата
if (ghost4.x>7+4*box && ghost4.x<7+7*box && ghost4.y > 7+2*box && ghost4.y<7+5*box) {
if (sideStr3 == "right") ghost4.x = 7 + 4*box;
if (sideStr3 == "up") ghost4.y = 7 + 5*box;
if (sideStr3 == "left") ghost4.x = 7 + 7*box;
if (sideStr3 == "down") ghost4.y = 7 + 2*box;
}
//Условие для прохода слева
if (ghost4.x<0 && ghost4.y>7+2*box && ghost4.y<5*box && sideStr3 == "left") ghost4.x = 7 + 11*box;

//Условие для прохода справа
if (ghost4.x>530 && ghost4.y>7+2*box && ghost4.y<5*box  && sideStr3 == "right") ghost4.x = 7 + 0*box;
}
}
  
}

btnMenu.onclick = function(){
  if (flag == 0){
    mainMenu.style.display = 'block'
    flag = 1
  }
  else if (flag == 1){
    mainMenu.style.display = 'none'
    flag = 0
  }
}


function inRad(x){
  return Math.PI * x/180
}

var ij = 0;
var qj = 0;

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
  x:7 + 11*box,
  y:7 + 10*box
};
const menu = document.getElementById('menu1')
const btn1 = document.getElementById('btn1')
const textScoreInPause = document.getElementById('textScoreInPause')
function createMenu(){
btn1.style.display = 'block'
menu.style.display = 'block'
textScoreInPause.textContent= 'Score: '+String(countParticles * 10);
}


document.addEventListener("keydown",direction);

let dir;
let menu_pressed = 0;
var j = 0;
function direction(event) {
  if(event.keyCode == 37 || event.keyCode ==65)
    dir = "left"
  else if(event.keyCode == 38 || event.keyCode == 87)
    dir = "up"
  else if(event.keyCode == 39 || event.keyCode == 68)
    dir = "right"
  else if(event.keyCode == 40 || event.keyCode == 83)
    dir = "down"
  if(event.keyCode == 27 && menu_pressed==0 && flag==0) {menu_pressed = 1; createMenu();clearInterval(game)}
  else if (event.keyCode == 27 && menu_pressed == 1) {
    menu_pressed = 0; if (j==0) {game = setInterval(drawGame,100); btn1.style.display = 'none';menu.style.display = 'none'}}
}


function genRandSide(){
  return randSideGhost1 = Math.floor(Math.random()* 50 + 1)
}


//Массив с координатами частиц
  let arr = [
    [0,0],[1,0],                   [2,0],[-100,-100],[4,0],[5,0],[6,0],[7,0],[-100,-100],[9,0],               [10,0],[11,0],
    [0,1],[1,1],                   [2,1],[-100,-100],[4,1],[5,1],[6,1],[7,1],[-100,-100],[9,1],               [10,1],[11,1],
    [-100,-100],[-100,-100],       [2,2],[-100,-100],[4,2],[5,2],[6,2],[7,2],[-100,-100],[9,2],     [-100,-100],[-100,-100],
    [0,3],[1,3],[2,3],[3,3],[4,3],                   [-100,-100],[-100,-100],               [7,3],[8,3],[9,3],[10,3],[11,3],
    [0,4],[1,4],[2,4],[3,4],[4,4],                   [-100,-100],[-100,-100],               [7,4],[8,4],[9,4],[10,4],[11,4],
    [-100,-100],[-100,-100],[-100,-100],[-100,-100],[4,5],[5,5],[6,5],[7,5],[-100,-100],[-100,-100],[-100,-100],[-100,-100],
    [0,6],[1,6],[2,6],                  [-100,-100],[4,6],[5,6],[6,6],[7,6],[-100,-100],                [9,6],[10,6],[11,6],
    [0,7],[1,7],[2,7],                  [-100,-100],[4,7],[5,7],[6,7],[7,7],[-100,-100],                [9,7],[10,7],[11,7],
    [0,8],[1,8],[2,8],                              [3,8],[4,8],[5,8],[6,8],                [7,8],[8,8],[9,8],[10,8],[11,8],
    [-100,-100],[-100,-100],[-100,-100],[-100,-100],[4,9],[5,9],[6,9],[7,9],[-100,-100],[-100,-100],[-100,-100],[-100,-100],
    [0,10],[1,10],[2,10],                         [3,10],[4,10],[5,10],[6,10],         [7,10],[8,10],[9,10],[10,10],[-100,-100],
  ]


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
var count = 0
let countParticles = 0
//Отрисовка игры
console.log(level)
  function drawGame() {
   console.log(level)
  ctx.drawImage(ground,0,0);
  ctx.fillStyle="#1E90FF"

//Отрисовка частиц

  for (i = 0;i<arr.length;i++){
    ctx.drawImage(parlicleImg,arr[i][0]*box+18,arr[i][1]*box+19)
  }

  drawWalls()
  const ghosts = [ghost1, ghost2, ghost3, ghost4];
  
  

  
  
  
  count +=1
 
  ghostMovement()

  if (countParticles==97) {alert('Вы победили!'); clearInterval(game);j=1; createMenu();}
//Реализация движения пакмана




// console.log("Призрак",Math.floor(ghost1.x/44),Math.floor(ghost1.y/44))

  if (count > 45){
    if (dir == "left") packman.x -= box;
    if (dir == "right") packman.x += box;
    if (dir == "down") packman.y += box;
    if (dir == "up") packman.y -= box;
  }

  
  for (i = 0;i<arr.length;i++){
    if (Math.floor(arr[i][0]) == Math.floor(packman.x/44)  && Math.floor(arr[i][1]) == Math.floor(packman.y/44))  {arr.splice(i,1); countParticles+=1}
  }

  textScore.textContent = 'Score: '+String(countParticles * 10);

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
  if(packman.y > 7 + 1*box && packman.y <7+ 3*box && packman.x<7+2*box){
    if (dir =="up") packman.y = 7 + 3*box;
    if (dir =="down") packman.y = 7 + 1*box;
    if (dir =="left") packman.x = 7 + 2*box;
}
//Условие для горизонтальной стенки сврху справа
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
  if (packman.x>10+4*box && packman.x<7+7*box && packman.y > 7+2*box && packman.y<7+5*box) {
    if (dir == "right") packman.x = 7 + 4*box;
    if (dir == "up") packman.y = 7 + 5*box;
    if (dir == "left") packman.x = 7 + 7*box;
    if (dir == "down") packman.y = 7 + 2*box;
  }
//Условие для прохода слева
  if (packman.x<0 && packman.y>7+2*box && packman.y<5*box && dir == "left") packman.x = 51 + 11*box;

//Условие для прохода справа
  if (packman.x>530 && packman.y>7+2*box && packman.y<5*box  && dir == "right") packman.x = -37 + 0*box;




ghosts.forEach(ghost => {
  ctx.drawImage(ghostImg, ghost.x, ghost.y);
});
ctx.drawImage(packamImg, packman.x, packman.y);


if (Math.floor((packman.x/44))==Math.floor(ghost1.x/44) && Math.floor(packman.y/44)==((ghost1.y - 7)/44))   {clearInterval(game); j = 1;createMenu();}
if (Math.floor(packman.x/44)==Math.floor(ghost2.x/44) && Math.floor(packman.y/44)==Math.floor(ghost2.y/44)) {clearInterval(game); j = 1;createMenu();}
if (Math.floor(packman.x/44)==Math.floor(ghost3.x/44) && Math.floor(packman.y/44)==Math.floor(ghost3.y/44)) {clearInterval(game); j = 1;createMenu();}
if (Math.floor(packman.x/44)==Math.floor(ghost4.x/44) && Math.floor(packman.y/44)==Math.floor(ghost4.y/44)) {clearInterval(game); j = 1;createMenu();}
// console.log(Math.floor(packman.x/44),Math.floor(packman.y/44))

}

game = setInterval(drawGame,interval)






