/**
 * Return a random number between a range
 *
 * @param {number} min
 * @param {number} max
 * @returns number
 */

function getRandomNumber(min = 0, max = 1) {
  return min + Math.random() * (max - min);
}

/**
 *Returns distance between two points
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 *
 * @returns {number}
 */
function distance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;

  return Math.sqrt(dx * dx + dy * dy);
}

function getRandomColor() {
  const R = getRandomNumber() * 255;
  const G = getRandomNumber() * 255;
  const B = getRandomNumber() * 255;
  const color = `rgb(${R},${G},${B})`;
  return color;
}

function getBallSize() {
  return (ballSize = getRandomNumber(1, 20));
}

function calcSpeed() {
  return getRandomNumber(1, 9);
}
