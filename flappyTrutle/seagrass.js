let x = 50;
let y = 50;
let s = 1;

background(255);

translate(x, y);

//stone
push();
stroke(0, 0, 0);
fill(0, 0, 0);
beginShape();
vertex(x * s, y - 20 * s);
vertex(x + 20 * s, y - 10 * s);
vertex(x + 20 * s, y * s);
vertex(x - 20 * s, y * s);
vertex(x - 20 * s, y - 5 * s);
vertex(x - 16 * s, y - 13 * s);
vertex(x * s, y - 20 * s);
endShape();
pop();
