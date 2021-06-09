const obstaclesArray = [];

class Obstacle {
  constructor() {
    this.top = (Math.random() * canvas.height) / 2.5 + 21;
    this.bottom = (Math.random() * canvas.height) / 2.5 + 21;
    this.x = canvas.height;
    this.width = 21;
    this.colour = `hsla(${hue}, 100%, 50%, .7)`;
    this.counted = false;
  }

  draw() {
    ctx.fillStyle = this.colour;
    ctx.fillRect(this.x, 0, this.width, this.top);
    ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
  }

  update() {
    this.x -= gamespeed;
    if (!this.counted && this.x < tokeni.x) {
      score++;
      this.counted = true;
    }
    this.draw();
  }
}

function handleObstacles() {
  if (frame % 21 === 0) {
    obstaclesArray.unshift(new Obstacle());
  }

  for (let i = 0; i < obstaclesArray.length; i++) {
    obstaclesArray[i].update();
  }

  if (obstaclesArray.length > 21) {
    obstaclesArray.pop(obstaclesArray[0]);
  }
}
