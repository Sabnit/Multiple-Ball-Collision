/**
 * Returns a random number between min and max.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */

function getRandomNumber(min = 0, max = 1) {
  return Math.random() * (max - min) + min;
}

/**
 * Calculates the distance between two points (x1, y1) and (x2, y2) using the distance formula.
 * @param {number} x1 - The x-coordinate of the first point.
 * @param {number} y1 - The y-coordinate of the first point.
 * @param {number} x2 - The x-coordinate of the second point.
 * @param {number} y2 - The y-coordinate of the second point.
 * @returns {number} The distance between the two points.
 */
function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

/**
 * Resolves a collision between two balls by updating their velocities.
 * @param {Object} ball - The first ball object.
 * @param {Object} otherBall - The second ball object.
 */
function ballCollision(ball, otherBall) {
  // Calculate the differences in velocities and positions
  const xVelocityDiff = ball.dx - otherBall.dx;
  const yVelocityDiff = ball.dy - otherBall.dy;
  const xDist = otherBall.x - ball.x;
  const yDist = otherBall.y - ball.y;

  // Prevent accidental overlap of balls
  if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
    // Calculate the angle between the two colliding balls
    const angle = -Math.atan2(otherBall.y - ball.y, otherBall.x - ball.x);

    // Set the masses of the balls
    const mass1 = 1; // mass of ball
    const mass2 = 1; // mass of otherBall

    // Get the velocities before the collision along the collision axis
    const u1 = rotate(ball.dx, ball.dy, angle);
    const u2 = rotate(otherBall.dx, otherBall.dy, angle);

    // Using collision equation to calculate the final velocities
    const velocity1 = {
      x:
        (u1.x * (mass1 - mass2)) / (mass1 + mass2) +
        (u2.x * 2 * mass2) / (mass1 + mass2),
      y: u1.y,
    };
    const velocity2 = {
      x:
        (u2.x * (mass1 - mass2)) / (mass1 + mass2) +
        (u1.x * 2 * mass2) / (mass1 + mass2),
      y: u2.y,
    };

    // Get the final velocities after rotating the axis back to the original location
    const velocityFinal1 = rotate(velocity1.x, velocity1.y, -angle);
    const velocityFinal2 = rotate(velocity2.x, velocity2.y, -angle);

    // Swap the ball velocities for a realistic bounce effect
    ball.dx = velocityFinal1.x;
    ball.dy = velocityFinal1.y;

    otherBall.dx = velocityFinal2.x;
    otherBall.dy = velocityFinal2.y;
  }
}

/**
 * Generates a random RGB color.
 * @returns {string} A random RGB value.
 */
function getRandomColor() {
  const R = getRandomNumber() * 255;
  const G = getRandomNumber() * 255;
  const B = getRandomNumber() * 255;
  const color = `rgb(${R},${G},${B})`;
  return color;
}

/**
 * Rotates balls for velocities.
 * Takes velocities and alters them as if the coordinate system they're on was rotated.
 * @param {number} dx - The velocity along the x-axis.
 * @param {number} dy - The velocity along the y-axis.
 * @param {number} angle - The angle to rotate the ball.
 * @returns {Object} The rotated velocities.
 */

function rotate(dx, dy, angle) {
  return {
    x: dx * Math.cos(angle) - dy * Math.sin(angle),
    y: dx * Math.sin(angle) + dy * Math.cos(angle),
  };
}
