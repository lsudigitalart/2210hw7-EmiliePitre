// Emilie Pitre ©2016 hw7

var mySound;
var actualTime;
var loadTime;

rainY = 0
var rainY1 = 0;
var rainY2 = 0;
var rainY3 = 0;
var rainY4 = 0;
var rainY5 = 0;
var rainY6 = 0;
var rainY7 = 0;
var rainSpeed = 20
var length = 10

var dia = 0;
var opacity = 255;
var speed = 30;

function setup() {
  frameRate(60);
  createCanvas(640, 480);
  background(45, 65, 80);

  mySound = loadSound("histheme.m4a", playMusic);
}

function draw() {
  background(45, 65, 80);
  actualTime = millis() - loadTime;
  println(actualTime);
  rotate(0.001);


  if((actualTime > 0 && actualTime < 2200)
  || (actualTime > 2700 && actualTime < 4900)
  || (actualTime > 5400 && actualTime < 7700)
  || (actualTime > 800 && actualTime < 10400)
  ){
    rainY += rainSpeed;
      if (rainY > height + length + 2100) {
        rainY = -600;
      }
    noStroke();
    fill(100, 150, 150);
    rect(100, rainY - 0, length, 50, 5);
    rect(600, rainY - 300 , length, 50, 5);
    rect(400, rainY - 600, length, 50, 5);
    rect(450, rainY - 900, length, 50, 5);
    rect(500, rainY - 1300, length, 50, 5);
    rect(100, rainY - 1700, length, 50, 5);
    rect(200, rainY - 2100, length, 50, 5);
  }

//rain1

  // if(actualTime > 0 && actualTime < 50000){
  //   rainY1 += speed/2;
  //     if (rainY1 > height + length) {
  //       rainY1 = -length;
  //     }
  //   noStroke();
  //   fill(100, 150, 150);
  //   rect(100, rainY1, length, 50, 5);
  // }
  //
  //
  // if(actualTime > 300 && actualTime < 50000){
  //   rainY2 += speed/2;
  //     if (rainY2 > height + length) {
  //       rainY2 = -length;
  //     }
  //     noStroke();
  //     fill(100, 150, 150);
  //     rect(350, rainY2, 5, 20, 5);
  // }
  //
  //
  // if(actualTime > 600 && actualTime < 50000){
  //   rainY3 += speed/2;
  //     if (rainY3 > height + length) {
  //       rainY3 = -length;
  //     }
  //     noStroke();
  //     fill(100, 150, 150);
  //     rect(400, rainY3, 10, 40, 5);
  // }
  //
  //
  // if(actualTime > 900 && actualTime < 50000){
  //   rainY4 += speed/2;
  //     if (rainY4 > height + length) {
  //       rainY4 = -length;
  //     }
  //     noStroke();
  //     fill(100, 150, 150);
  //     rect(50, rainY4, 10, 40, 5);
  // }
  //
  //
  // if(actualTime > 1400 && actualTime < 50000){
  //   rainY5 += speed/2;
  //     if (rainY5 > height + length) {
  //       rainY5 = -length;
  //     }
  //     noStroke();
  //     fill(100, 150, 150);
  //     rect(550, rainY5, 5, 20, 5);
  // }
  //
  //
  // if(actualTime > 1800 && actualTime < 50000){
  //   rainY6 += speed/2;
  //     if (rainY6 > height + length) {
  //       rainY6 = -length;
  //     }
  //     noStroke();
  //     fill(100, 150, 150);
  //     rect(300, rainY6, 5, 20, 5);
  // }
  //
  //
  // if(actualTime > 2100 && actualTime < 50000){
  //   rainY7 += speed/2;
  //     if (rainY7 > height + length) {
  //       rainY7 = -length;
  //     }
  //     noStroke();
  //     fill(100, 150, 150);
  //     rect(250, rainY7, 10, 40, 5);
  // }
// endrain

// waterline
  // if((actualTime > 0 && actualTime < 100)
  // || (actualTime > 300 && actualTime < 400)
  // || (actualTime > 600 && actualTime < 700)
  // || (actualTime > 900 && actualTime < 1000)
  // || (actualTime > 1300 && actualTime < 1400)
  // || (actualTime > 1700 && actualTime < 1800)
  // || (actualTime > 2100 && actualTime < 2200)
  // ){
  //   strokeWeight(5);
  //   stroke(35,55,65);
  // } else {
  //   strokeWeight(1);
  //   stroke(30,50,60);
  // }

//water
//   noStroke();
//   fill(10, 40, 50);
//   rect(-50, 300, width + 100, height/2);
// //end water

//waterline
  if((actualTime > 0 && actualTime < 100)
  || (actualTime > 300 && actualTime < 400)
  || (actualTime > 600 && actualTime < 700)
  || (actualTime > 900 && actualTime < 1000)
  || (actualTime > 1300 && actualTime < 1400)
  || (actualTime > 1700 && actualTime < 1800)
  || (actualTime > 2100 && actualTime < 2200)

  || (actualTime > 2700 && actualTime < 2800)
  || (actualTime > 3000 && actualTime < 3100)
  || (actualTime > 3300 && actualTime < 3400)
  || (actualTime > 3600 && actualTime < 3700)
  || (actualTime > 4000 && actualTime < 4100)
  || (actualTime > 4400 && actualTime < 4500)
  || (actualTime > 4800 && actualTime < 4900)

  || (actualTime > 5400 && actualTime < 5500)
  || (actualTime > 5700 && actualTime < 5800)
  || (actualTime > 6100 && actualTime < 6200)
  || (actualTime > 6400 && actualTime < 6500)
  || (actualTime > 6800 && actualTime < 6900)
  || (actualTime > 7200 && actualTime < 7300)
  || (actualTime > 7600 && actualTime < 7700)

  || (actualTime > 8200 && actualTime < 8300)
  || (actualTime > 8500 && actualTime < 8600)
  || (actualTime > 8800 && actualTime < 8900)
  || (actualTime > 9100 && actualTime < 9200)
  || (actualTime > 9500 && actualTime < 9600)
  || (actualTime > 9900 && actualTime < 10000)
  || (actualTime > 10300 && actualTime < 10400)
  ){
    strokeWeight(6);
    stroke(100, 150, 150, 100);
  } else {
    strokeWeight(1)
    stroke(10, 40, 50, 100);
  }
  fill(10, 40, 50);
  line(-10, 300, width + 10, 300);
//end waterline

  if((actualTime > 0 && actualTime < 2500)
  || (actualTime > 2600 && actualTime < 5100)
  || (actualTime > 5200 && actualTime < 7700)
  || (actualTime > 7800 && actualTime < 10000)
  ){
    dia += speed;
    opacity -= (speed * 2);
    strokeWeight(3);
  } else {
    dia = 0;
    opacity = 0;
    strokeWeight(0);
  }
  fill(0, 0, 0, opacity);
  stroke(30,50,60);
  ellipse(width/2, 300, 2*dia, dia);
  ellipse(width/2, 300, dia, dia/2);
  ellipse(width/2, 300, dia/2, dia/4);

}

function playMusic(){
  loadTime = millis();
  mySound.play();
}
