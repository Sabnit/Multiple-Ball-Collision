// Ball will be rendered in this dom element
const viewport = document.querySelector(".viewport");

// Array to store balls
const ballsArray = [];

// Create balls and store in an array
for (let i = 0; i < BALL_COUNT; i++) {
  const x = getRandomNumber(0, VIEW_PORT_WIDTH - BALL_WIDTH);

  const y = getRandomNumber(0, VIEW_PORT_HEIGHT - BALL_HEIGHT);
  const ball = new Ball(x, y);

  ball.element.style.width = BALL_WIDTH + "px";

  ball.element.style.height = BALL_HEIGHT + "px";

  ballsArray.push(ball);
}

// Add balls in viewport
ballsArray.forEach((ball) => {
  viewport.appendChild(ball.getElement());
});

// Renders balls
function render() {
  ballsArray.forEach((ball) => {
    ball.draw();
    ball.move();
    ball.checkWallCollision(0, 0, VIEW_PORT_WIDTH, VIEW_PORT_HEIGHT);

    ballsArray.forEach((otherBall) => {
      if (ball === otherBall) return;

      ball.checkBallCollision(otherBall);
    });
  });

  requestAnimationFrame(render);
}

render();
