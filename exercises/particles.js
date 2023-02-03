let particles = [];

function createParticles() {
  const x = Math.random() * width;
  const y = Math.random() * height;
  const v = 0.2 + Math.random();
  return { x: x, y: y, velocity: v };
}

function darwParticle(particle) {
  push();
  translate(particle.x, particle.y);
  noStroke();
  fill(255, 255, 255, 170);
  ellipse(0, 0, 6);
  pop();
}

function updateParticle(particle) {
  particle.y = particle.y + particle.velocity;
  /* particle.x = particle.x - 0.2; */
}

for (let i = 0; i < 200; i++) {
  const particle = createParticles();
  particles.push(particle);
}

function draw() {
  background(0, 0, 0);
  for (let particle of particles) {
    darwParticle(particle);
    updateParticle(particle);
  }
}

//make your things as easy as possible, if you have multiple things happening make two functions
//use for Lunar Lanter game
