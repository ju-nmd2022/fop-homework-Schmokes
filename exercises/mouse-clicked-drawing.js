let lastX = 0;
let lastY = 0;

function mouseClicked() {
  line(lastX, lastY, mouseX, mouseY);

  lastX = mouseX;
  lastY = mouseY;
}
