/*
    This is my first emoji which I made myself. It looks gloomy and not that
    amazed by my first try. Maybe the next one will be more happy.
*/

const x = 380;
const y = 350;

//background
background(255, 255, 255);

//face
fill(240, 216, 11);
strokeWeight(3);
ellipse(x, y, 500);

//left eye
fill(255, 255, 255);
ellipse(x - 80, y - 50, 120);

fill(0, 0, 0);
ellipse(x - 80, y - 85, 50);

//rigth eye
fill(255, 255, 255);
ellipse(x + 70, y - 50, 120);

fill(0, 0, 0);
ellipse(x + 70, y - 85, 50);

//mouth
strokeWeight(5);
line(x - 80, y + 100, x + 85, y + 100);
