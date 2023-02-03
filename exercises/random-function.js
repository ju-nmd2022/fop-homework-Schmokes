function roundedRandom(min, max) {
  let number = Math.floor(Math.random() * (max - min) + min);
  return number;
}

function mouseClicked() {
  let x = roundedRandom(50, 250);
  let y = roundedRandom(50, 250);

  background(255);
  fill(20, 70, 150);
  rect(x, y, 100, 100);
}
