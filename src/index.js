let canvas = document.getElementById("canvas");

// An array to store all the balls
let balls_array = [];

// Create instances of the balls and add them to the array
for (let i = 0; i < BALL_COUNT; i++) {
  // Generate random properties for the ball
  let radius = getRandomNumber(1, 10);
  let x = getRandomNumber(radius, VIEWPORT_WIDTH - radius);
  let y = getRandomNumber(radius, VIEWPORT_HEIGHT - radius);
  let dx = getRandomNumber(-2, 2);
  let dy = getRandomNumber(-2, 2);
  let color = getRandomColor();

  // Create a new ball and add it to the array
  let newBall = new Ball(x, y, dx, dy, radius, color);
  balls_array.push(newBall);
}

/**
 * Initiates and continues the animation loop by updating ball positions and rendering frames.
 */
function startAnimation() {
  // Clear the canvas before refreshing the frame
  canvas.innerHTML = "";

  //  Create and update each ball's position
  for (let i = 0; i < BALL_COUNT; i++) {
    balls_array[i].createBall();
    balls_array[i].update(balls_array);
  }

  // Request the next animation frame
  requestAnimationFrame(startAnimation);
}

// Call the start function to start the animation
startAnimation();
