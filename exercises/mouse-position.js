/* let lastX = 0;
let lastY = 0; */
let circleSize = 20;
frameRate(90);

function draw() {
  noStroke();
  fill((mouseX / width) * 255, (mouseY / height) * 255, 255);
  ellipse(mouseX, mouseY, circleSize);

  /*  lastX = mouseX;
    lastY = mouseY; */
}

function mouseClicked() {
  circleSize = circleSize + 10;
}
