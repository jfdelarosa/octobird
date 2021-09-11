const { createCanvas } = require("canvas");
const SQUARE_WIDTH = 20;
const WEEKS = 53;
const PADDING = 2;

function createSquare(ctx, x, y) {
  ctx.beginPath();
  ctx.fillStyle = "#1d9bf0";
  ctx.globalAlpha = Math.random();
  ctx.rect(x, y, SQUARE_WIDTH, SQUARE_WIDTH);
  ctx.fill();
}

function createImage(user) {
  const width = 1500;
  const height = 500;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, width, height);

  ctx.textAlign = "right";
  ctx.fillStyle = "#0f1419";
  ctx.font = "18px Menlo";
  ctx.fillText(`@${user}`, width - 100, height - 100);

  for (let i = WEEKS; i > 0; i--) {
    for (let j = 7; j > 0; j--) {
      createSquare(
        ctx,
        width - 100 - i * (SQUARE_WIDTH + PADDING),
        height - 120 - j * (SQUARE_WIDTH + PADDING)
      );
    }
  }

  return canvas.toBuffer("image/png");
}

module.exports = createImage;
