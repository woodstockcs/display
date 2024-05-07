let x;
let y;
//let img;
// seven segment display:
// https://en.wikipedia.org/wiki/Seven-segment_display

function preload() {
  //img = loadImage("clock.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //img.resize(img.width * 3, img.height * 3);
}

function draw() {
  background(100);
  if (mouseIsPressed) {
    showReferenceImage();
  }
  drawTime();
  drawNote();
}

function drawNote() {
  textAlign(CENTER, CENTER);
  textSize(30);
  noStroke();
  fill(200, 200, 0);
  text("1 bio break, 5 minutes max", width/2, -100);
  text("sign out, sign in", width/2, -60);
}

function drawTime() {
  // push();
  let time = getTimeString(0);
  let digits = time.replaceAll(":", "").split("");
  fill(0);
  noStroke();
  // text(time, 100, 100);
  // text(digits, 100, 80);
  fill(30, 220, 30, 100);
  stroke(30, 220, 30);
  strokeWeight(2);
  translate(50, 150);

  // draw each digit
  // TODO: finish this section
  drawDigit(digits[0], -32, 0, 1);
  drawDigit(digits[1], 108, 0, 1);
  drawSeparator(263, 0)
  drawDigit(digits[2], 307, 0, 1);
  drawDigit(digits[3], 447, 0, 1);
  // drawSeparator(532, 0)
  drawDigit(digits[4], 630, 100, .5);
  drawDigit(digits[5], 710, 100, .5);
  // drawSeparator(842, 0)
  // drawDigit(digits[6], 890, 0);
  // drawDigit(digits[7], 1070, 0);\
  // pop();
}

function drawSeparator(x, y) {
  push();
  translate(x, y + 55);
  beginShape();
  vertex(0, 0);
  vertex(8, 8);
  vertex(0, 16);
  vertex(-8, 8);
  vertex(0, 0);
  endShape();
  translate(0, 75);
  beginShape();
  vertex(0, 0);
  vertex(8, 8);
  vertex(0, 16);
  vertex(-8, 8);
  vertex(0, 0);
  endShape();
  pop();
}

function drawDigit(digit, x, y, s) {
  push();
  translate(x, y);
  scale(s)
  if (digit == 0) {
    drawSegments("abcdef");
  } else if (digit == 1) {
    drawSegments("bc");
  } else if (digit == 2) {
    drawSegments("abged");
  } else if (digit == 3) {
    drawSegments("abgcd");
  } else if (digit == 4) {
    drawSegments("fgbc");
  } else if (digit == 5) {
    drawSegments("afgcd") 
  } else if (digit == 6) {
    drawSegments("afgcde")
  } else if (digit == 7) {
    drawSegments("abc")
  } else if (digit == 8) {
    drawSegments("abcdefg")
  } else if (digit == 9) {
    drawSegments("abcfg") 
  }
  
  pop();
}

function drawSegments(segments, h) {
  if (segments.includes("a")) {
    push();
    translate(0, 0);
    beginShape();
    vertex(6, 0);
    vertex(16, -10);
    vertex(78, -10);
    vertex(88, 0);
    vertex(78, 13);
    vertex(16, 13);
    vertex(6, 0);
    endShape();
    pop();    
  }

  if (segments.includes("b")) {
    push();
    translate(97, 0);
    beginShape();
    vertex(-13, 19);
    vertex(-1, 9);
    vertex(11, 20);
    vertex(11, 79);
    vertex(-1, 92);
    vertex(-13, 83);
    vertex(-13, 20);
    endShape();
    pop(); 
  }

  if (segments.includes("c")) {
  push();
  translate(97, 97);
  beginShape();
  vertex(-13, 19);
  vertex(-1, 9);
  vertex(11, 20);
  vertex(11, 79);
  vertex(-1, 92);
  vertex(-13, 83);
  vertex(-13, 20);
  endShape();
  pop();
  }

    if (segments.includes("d")) {
  push();
  translate(0, 194);
  beginShape();
  vertex(6, 0);
  vertex(16, -10);
  vertex(78, -10);
  vertex(88, 0);
  vertex(78, 13);
  vertex(16, 13);
  vertex(6, 0);
  endShape();
  pop();
  }
  
  if (segments.includes("e")) {
  push();
  translate(0, 97);
  beginShape();
  vertex(-13, 19);
  vertex(-1, 9);
  vertex(11, 20);
  vertex(11, 79);
  vertex(-1, 92);
  vertex(-13, 83);
  vertex(-13, 20);
  endShape();
  pop();
  }
  
  if (segments.includes("f")) {
  push();
  translate(0, 0);
  beginShape();
  vertex(-13, 19);
  vertex(-1, 9);
  vertex(11, 20);
  vertex(11, 79);
  vertex(-1, 92);
  vertex(-13, 83);
  vertex(-13, 20);
  endShape();
  pop();

  }

  if (segments.includes("g")) {
  push();
  translate(0, 97);
  beginShape();
  vertex(6, 0);
  vertex(16, -10);
  vertex(78, -10);
  vertex(88, 0);
  vertex(78, 13);
  vertex(16, 13);
  vertex(6, 0);
  endShape();
  pop();
  }
  
}

function showReferenceImage() {
  //image(img, -900, -300);
}