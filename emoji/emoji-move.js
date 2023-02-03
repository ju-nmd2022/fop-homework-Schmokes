/*
    This is my first emoji which I made myself. It looks gloomy and not that
    amazed by my first try. Maybe the next one will be more happy.
*/
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

const speed = 5;
let x = 200;
let y = 200;

function draw() {
  if (keyIsDown(37)) {
    x = x - speed;
  } else if (keyIsDown(39)) {
    x = x + speed;
  }
  if (keyIsDown(38)) {
    y = y - speed;
  } else if (keyIsDown(40)) {
    y = y + speed;
  }
  background(255);

  emoji(x, y, 0.4, 170, 50, 30);
}

/* function keyPressed() {
  if (keyCode === 37) {
    x = x - speed;
  } else if (keyCode === 39) {
    x = x + speed;
  }
  if (keyCode === 38) {
    y = y - speed;
  } else if (keyCode === 40) {
    y = y + speed;
  }
} */
