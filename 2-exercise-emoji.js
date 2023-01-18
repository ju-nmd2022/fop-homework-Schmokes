/*
    This is my first emoji which I made myself. It looks gloomy and not that
    amazed by my first try. Maybe the next one will be more happy.
*/

const x = 280;
const y = 250;
const s = 0.4;
const sentence = "The sky is blue 🌞";

//background
background(255, 255, 255);

//face
fill(240, 216, 11);
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
