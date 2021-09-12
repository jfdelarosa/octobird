const { createCanvas } = require("canvas");
const SQUARE_WIDTH = 20;
const WEEKS = 53;
const PADDING = 2;

function getAlpha(level) {
  const levels = [0.1, 0.4, 0.6, 0.8, 1];

  return levels[level];
}

function createSquare(ctx, x, y, level) {
  ctx.beginPath();
  ctx.fillStyle = "#1d9bf0";
  ctx.globalAlpha = getAlpha(level);
  ctx.rect(x, y, SQUARE_WIDTH, SQUARE_WIDTH, 5);
  ctx.fill();
}

function createImage(user, { contributions }) {
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

  for (let i = contributions.length; i > 0; i--) {
    for (let j = 7; j > 0; j--) {
      createSquare(
        ctx,
        width - 100 - i * (SQUARE_WIDTH + PADDING),
        height - 120 - j * (SQUARE_WIDTH + PADDING),
        contributions[WEEKS - i].week[7 - j].level
      );
    }
  }

  return canvas.toBuffer("image/png");
}

module.exports = createImage;
