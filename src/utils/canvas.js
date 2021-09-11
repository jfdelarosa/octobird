const { createCanvas } = require("canvas");

function createImage(user) {
  const width = 1500;
  const height = 500;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, width, height);

  ctx.textAlign = "right";
  ctx.fillStyle = "#fff";
  ctx.font = "bold 18px Menlo";
  ctx.fillText(`@${user}`, width - 100, height - 100);

  return canvas.toBuffer("image/png");
}

module.exports = createImage;
