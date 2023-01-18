/*
    This is my first emoji which I made myself. It looks gloomy and not that
    amazed by my first try. Maybe the next one will be more happy.
*/

const x = 380;
const y = 350;
const s = 0.8;

//background
background(255, 255, 255);

//face
fill(240, 216, 11);
strokeWeight(3);
ellipse(x, y, 500 * s);

//left eye
fill(255, 255, 255);
ellipse(x - 80 * s, y - 50 * s, 120 * s);

fill(0, 0, 0);
ellipse(x - 80 * s, y - 85 * s, 50 * s);

//rigth eye
fill(255, 255, 255);
ellipse(x + 70 * s, y - 50 * s, 120 * s);

fill(0, 0, 0);
ellipse(x + 70 * s, y - 85 * s, 50 * s);

//mouth
strokeWeight(5);
line(x - 80 * s, y + 100 * s, x + 85 * s, y + 100 * s);
