const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 7;

const gradient = ctx.createLinearGradient(0, 0, 0, 70);
gradient.addColorStop("0.4", "#fff");
gradient.addColorStop("0.5", "#000");
gradient.addColorStop("0.55", "#4040ff");
gradient.addColorStop("0.6", "#000");
gradient.addColorStop("0.9", "#fff");

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillRect(10, canvas.height - 90, 50, 50);
  tokeni.update();
  tokeni.draw();
  handleObstacles();
  handleParticles();
  ctx.fillStyle = gradient;
  ctx.strokeText(score, 450, 70);
  ctx.fillText(score, 450, 70);
  ctx.font = "70px Georgia";
  handleCollisions();
  if (handleCollisions()) return;
  requestAnimationFrame(animate);
  angle += 0.14;
  hue++;
  frame++;
}
animate();

window.addEventListener("keydown", function (e) {
  if (e.code === "Space") spacePressed = true;
});

window.addEventListener("keyup", function (e) {
  if (e.code === "Space") spacePressed = false;
});

const bang = new Image();
bang.src = "bang.png";
function handleCollisions() {
  for (let i = 0; i < obstaclesArray.length; i++) {
    if (
      tokeni.x < obstaclesArray[i].x + obstaclesArray[i].width &&
      tokeni.x + tokeni.width > obstaclesArray[i].x &&
      ((tokeni.y < 0 + obstaclesArray[i].top && tokeni.y + tokeni.height > 0) ||
        (tokeni.y > canvas.height - obstaclesArray[i].bottom &&
          tokeni.y + tokeni.height < canvas.height))
    ) {
      ctx.drawImage(bang, tokeni.x - 12, tokeni.y - 12, 42, 42);
      ctx.font = "28px Georgia";
      ctx.fillStyle = "black";
      ctx.fillText(
        `GAME OVER - you scored ${score}`,
        140,
        canvas.height / 2 - 14
      );
      return true;
    }
  }
}
