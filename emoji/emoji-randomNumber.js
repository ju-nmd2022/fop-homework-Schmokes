/*
    This is my emoji, and he will be spawned with a random number
*/
/* let x = 100;
let y = 200;
let s = 0.4; */

function emoji(x, y, s, r, g, b) {
  //face
  fill(r, g, b);
  strokeWeight(3 * s);
  ellipse(x, y, 500 * s);

  //left eye
  fill(255, 255, 255);
  ellipse(x - 80 * s, y - 50 * s, 120 * s);

  fill(0, 0, 0);
  ellipse(x - 80 * s, y - 85 * s, 50 * s);

  //rigth eye
  fill(255, 255, 255);
  ellipse(x + 70 * s, y - 50 * s, 120 * s);

  fill(0, 0, 0);
  ellipse(x + 70 * s, y - 85 * s, 50 * s);

  //mouth
  strokeWeight(5);
  line(x - 80 * s, y + 100 * s, x + 85 * s, y + 100 * s);
}

// USEFUL FOR ANIMATING OBJECTS THAT CHANGE POSITION RANDOMLY

let x = width / 2;
let y = height / 2;

function draw() {
  background(255);
  emoji(x, y, 0.4, 30, 70, 200);
}

function mouseClicked() {
  x = Math.floor(Math.random() * width);
  y = Math.floor(Math.random() * height);
}
