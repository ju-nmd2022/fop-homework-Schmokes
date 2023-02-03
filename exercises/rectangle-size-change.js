background(255);

let count = 0;
let x = 100;
let y = 100;
let rectSize = 30;

while (count < 4) {
  rect(x, y, rectSize, rectSize);

  x = x + 50;
  rectSize = rectSize + 20;
}
