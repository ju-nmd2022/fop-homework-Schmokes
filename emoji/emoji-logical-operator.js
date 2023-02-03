/*
    This is my first emoji which I made myself. It looks gloomy and not that
    amazed by my first try. Maybe the next one will be more happy.
*/
const sentence = "The sky is blue 🌞";

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

let x = 100;
let speed = 5;

function draw() {
  background(255);
  emoji(x, 150, 0.4, 255, 255, 0);

  x = x + speed;
  if (x > 400 || x < 100) {
    speed = speed * -1;
  }
}
