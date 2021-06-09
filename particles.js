const particlesArray = [];

class Particle {
  constructor() {
    this.x = tokeni.x;
    this.y = tokeni.y + 14;
    this.size = Math.random() * 2;
    this.speedY = Math.random() * 1;
    this.colour = `hsla(${hue}, 100%, 50%, .7)`;
  }

  update() {
    this.x -= gamespeed;
    this.y += this.speedY;
  }

  draw() {
    ctx.fillStyle = this.colour;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function handleParticles() {
  particlesArray.unshift(new Particle());
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
  if (particlesArray.length > 210) {
    for (let i = 0; i < 21; i++) {
      particlesArray.pop(particlesArray[i]);
    }
  }
}
