background(255);

let size = 100;
let margin = 10;
let x = margin;

for (let i = 0; i < 5; i++) {
  const percentage = (i + 1) / 5;
  console.log(percentage);
  rect(x, 100 - (size / 2) * percentage, size * percentage, size * percentage);

  x = x + size * percentage + margin;
}
