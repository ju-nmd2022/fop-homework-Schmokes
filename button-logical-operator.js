function button(x, y, w, h) {
  fill(0, 0, 255);
  noStroke();
  rect(x, y, w, h);

  fill(255);
  text("Click me", x + 70, y + 35);
}

let buttonIsClicked = false;

function draw() {
  if (buttonIsClicked) {
    background(200, 50, 30);
  } else {
    background(255);
  }

  button(100, 100, 200, 60);
}

function mousePressed() {
  if (mouseX > 100 && mouseX < 100 + 200 && mouseY > 100 && mouseY < 100 + 60) {
    buttonIsClicked = true;
  }
}

function mouseReleased() {
  buttonIsClicked = false;
}
