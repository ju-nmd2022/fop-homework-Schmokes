let x;
let y;

x = 300;
y = 640;

function rocket() {
  noStroke();
  fill(255, 185, 0);
  ellipse(x, y + random(35, 55), 20, 60);
  fill(255, 255, 0);
  ellipse(x, y + random(35, 50), 15, 40);

  //sidefins
  noStroke();
  fill(102, 0, 204);
  arc(x, y + 36, 40, 40, PI, 0, CHORD);
  //body
  stroke(2);
  fill(204, 153, 255);
  ellipse(x, y, 30, 80);
  //windows
  noStroke();
  fill(0);
  ellipse(x, y - 8, 20, 20);
  fill(255);
  ellipse(x, y - 8, 16, 16);
  //front fin
  stroke(2);
  fill(102, 0, 204);
  ellipse(x, y + 32, 5, 30);
  //tip
  beginShape();
  vertex(288, 618);
  bezierVertex(295, 620, 304, 620, 312, 618);
  bezierVertex(310, 609, 307, 600, 299, 588);
  bezierVertex(288, 609, 292, 600, 288, 612);
  endShape();
}

function draw() {
  rocket();
}
