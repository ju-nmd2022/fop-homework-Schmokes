/*
    This is my first emoji which I made myself. It looks gloomy and not that
    amazed by my first try. Maybe the next one will be more happy.
*/

const sentence = "The sky is blue 🌞";

function emoji(x, y, s, r, g, b, eyesAreClosed) {
  //face
  fill(r, g, b);
  strokeWeight(3 * s);
  ellipse(x, y, 500 * s);

  if (eyesAreClosed) {
    fill(0, 0, 0);
    ellipse(x - 80 * s, y - 30 * s, 30, 10);
    ellipse(x + 70 * s, y - 30 * s, 30, 10);
  } else {
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
  }

  //mouth
  strokeWeight(5);
  line(x - 80 * s, y + 100 * s, x + 85 * s, y + 100 * s);

  //speechbubble
  /*  noFill();
  strokeWeight(3 * s);
  beginShape();
  vertex(x + 100, y - 140);
  vertex(x + 50, y - 140);
  bezierVertex(x + 20, y - 140, x + 20, y - 180, x + 50, y - 180);
  vertex(x + 230, y - 180);
  bezierVertex(x + 260, y - 180, x + 260, y - 140, x + 230, y - 140);
  vertex(x + 150, y - 140);
  vertex(x + 100, y - 110);
  vertex(x + 100, y - 140);
  endShape(CLOSE);

  fill(0, 0, 255);
  textSize(20);
  text(sentence, x + 60, y - 153);
} */

  /* function draw() {
  clear();
  background(255, 255, 255);
  emoji(mouseX, mouseY, s, 240, 216, 11);

  x = x + 1;
  y = y + 1;
  s = s + 0.005;
} */
}

function draw() {
  background(255);
  if (mouseIsPressed === true) {
    emoji(150, 150, 0.4, 230, 50, 40, true);
  } else {
    emoji(150, 150, 0.4, 230, 50, 40, false);
  }
}
