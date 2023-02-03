createCanvas(600, 300);
noStroke();

let fromColor = color(32, 42, 68);
let toColor = color(164, 219, 232);
colorMode(RGB);
let interA = lerpColor(fromColor, toColor, 0.33);
let interB = lerpColor(fromColor, toColor, 0.66);

fill(fromColor);
rect(10, 20, 20, 60);
fill(interA);
rect(30, 20, 20, 60);
fill(interB);
rect(50, 20, 20, 60);
fill(toColor);
rect(70, 20, 20, 60);
