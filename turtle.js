let x = 100;
let y = 100;
background(255, 255, 255);
noStroke();

//Front Fins
fill(0, 107, 61);
beginShape();
vertex(x + 5, y);
bezierVertex(x + 10, y + 13, x + 8, y + 15, x - 2, y + 25);
vertex(x + 3, y + 25);
bezierVertex(x + 20, y + 20, x + 16, y + 10, x + 15, y);
endShape();

fill(6, 156, 86);
beginShape();
vertex(x + 20, y);
bezierVertex(x + 25, y + 15, x + 25, y + 23, x + 10, y + 30);
vertex(x + 3, y + 30);
vertex(x + 15, y + 17);
vertex(x + 10, y);
endShape();

//Back Fins
fill(0, 107, 61);
beginShape();
vertex(x - 38, y - 9);
vertex(x - 49, y - 8);
bezierVertex(x - 47, y + 3, x - 34, y + 2, x - 32, y - 5);
endShape();

fill(6, 156, 86);
beginShape();
vertex(x - 34, y - 5);
vertex(x - 48, y);
bezierVertex(x - 42, y + 10, x - 38, y + 8, x - 27, y);
endShape();

//Head
push();
beginShape();
vertex(x + 18, y - 8);
bezierVertex(x + 45, y - 38, x + 43, y + 20, x + 20, y - 3);
endShape();
pop();

//Shell
push();
fill(255, 104, 30);
beginShape();
vertex(x - 40, y - 10);
bezierVertex(x - 10, y + 20, x + 10, y + 5, x + 20, y);
bezierVertex(x + 20, y - 35, x - 20, y - 30, x - 37, y - 10);
vertex(x - 40, y - 10);
endShape();
pop();

//Eye
push();
fill(0);
ellipse(x + 32, y - 8, 3, 5);
pop();

//Details on the shell
fill(255, 170, 14);
triangle(x - 17, y - 18, x - 28, y - 15, x - 19, y - 7);
triangle(x - 15, y - 3, x - 8, y - 17, x - 4, y - 10);
triangle(x - 8, y + 1, x + 9, y - 3, x + 7, y - 11);
triangle(x, y - 13, x - 4, y - 20, x + 4, y - 20);
