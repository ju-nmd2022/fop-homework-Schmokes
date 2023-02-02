/*
    This is my emoji and he will tell you some things, just
    click on the screen
*/
let x = 150;
let y = 200;
let s = 0.4;
const sentence = "The sky is blue 🌞";

function emoji(x, y, s, r, g, b, sentence) {
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

  //speechbubble
  noFill();
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
}

function mouseClicked() {
  background(255);
  let sentence = "Moin Moin";
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    sentence = "Guten Morgen";
  } else if (randomNumber === 1) {
    sentence = "Guten Mittag";
  } else if (randomNumber === 2) {
    sentence = "Guten Abend";
  }
  emoji(x, y, s, 240, 216, 11, sentence);
}
