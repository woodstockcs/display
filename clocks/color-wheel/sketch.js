//source: https://editor.p5js.org/D_Snyder/sketches/Xtx2Zu9D5
let clockFont;
let red = 0;
let green = 0;
let blue = 0;
let redStep = 1;
let greenStep = 0;
let blueStep = 0;

let red2 = 0;
let green2 = 0;
let blue2 = 0;
let redStep2 = 0;
let greenStep2 = 200;
let blueStep2 = 0;


  function preload() {
  clockFont = loadFont('Jersey10-Regular.ttf');
  }
function setup() {
  // createCanvas(windowWidth, windowHeight);
  let canvas = createCanvas(700, 400);
  canvas.parent('sketch-container');
   // clockFont = loadFont("Jersey10-Regular.ttf");
}

function windowResized() {
  //resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  //red

  red += redStep;
  if (red > 255) {
    redStep = -1;
    greenStep = +1;
  }
  if (red < 0) {
    greenStep = +1;
    red = 0;
    redStep = 0;
  }

  //green

  green += greenStep;
  if (green > 255) {
    greenStep = -1;
    blueStep = +1;
  }
  if (green < 0) {
    blueStep = +1;
    green = 0;
    greenStep = 0;
  }

  //blue
  blue += blueStep;
  if (blue > 255) {
    blueStep = -1;
    redStep = +1;
  }
  if (blue < 0) {
    redStep = +1;
    blue = 0;
    blueStep = 0;
  }
   blue+=blueStep
  if(blue>255){
  blueStep=-1
  redStep=+1
  }
  if(blue<0){
    bluestep=+ 1
    if (redStep == 0) {
      redStep = 1
    }
  }

  // Rect Opposite color

  //red

  red2 += redStep2;
  if (red2 > 255) {
    redStep2 = -1;
    greenStep2 = +1;
  }
  if (red2 < 0) {
    greenStep2 = +1;
    red2 = 0;
    redStep2 = 0;
  }

  //green

  green2 += greenStep2;
  if (green2 > 255) {
    greenStep2 = -1;
    blueStep2 = +1;
  }
  if (green2 < 0) {
    blueStep2 = +1;
    green2 = 0;
    greenStep2 = 0;
  }

  //blue
  blue2 += blueStep2;
  if (blue2 > 255) {
    blueStep2 = -1;
    redStep2 = +1;
  }
  if (blue2 < 0) {
    redStep2 = +1;
    blue2 = 0;
    blueStep2 = 0;
  }
  fill(red2, green2, blue2);
  //150, 317,
  rectMode(CENTER);
  rect(width/2, height / 2-50, 450, 20);
  //150, 460
  rect(width/2, height / 2+105, 450, 20);

  // End
  clock();
  push();
  fill(255);
  textSize(12);
  //text(red + " " + green + " " + blue, 100, 100);
  pop();
}

function clock() {
  fill(red, green, blue);
  textAlign(CENTER, CENTER);
  textSize(200);
  textFont(clockFont);
  let Hour = hour();
  let min = minute();
  let secs = second();
  let noon = Hour >= 12 ? " PM" : " AM";
  if (min < 10) min = "0" + min;
  if (secs < 10) secs = "0" + secs;
  Hour %= 12;
   if (Hour == 0) { // If the hour is 0, set it to 12
    Hour = 12;
  }
  text(Hour + ":" + min + ":" + secs + noon, width / 2, height / 2);
}
