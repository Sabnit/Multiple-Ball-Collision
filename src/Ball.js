class Ball {
  /**
   *
   * @param {number} x -  Ball left position
   * @param {number} y - Ball top position
   * @param {number} dx - Ball velocity along the x-axis
   * @param {number} dy - Ball velocity along the y-axis
   * @param {number} radius - Ball radius
   * @param {string} color - Ball color
   */
  constructor(x, y, dx, dy, radius = BALL_WIDTH / 2, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  /**
   * Creates a ball element in the canvas with specified properties.
   */
  createBall() {
    const canvas = document.getElementById("canvas");
    const ball = document.createElement("div");
    ball.setAttribute("class", "ball");

    // Set the styling properties of the ball
    ball.style.left = this.x + "px";
    ball.style.top = this.y + "px";
    ball.style.backgroundColor = this.color;
    ball.style.width = BALL_WIDTH + "px";
    ball.style.height = BALL_HEIGHT + "px";
    ball.style.borderRadius = BORDER_RADIUS + "px";

    // Append the ball element to the canvas
    canvas.appendChild(ball);
  }
  update(balls_array) {
    // Check for collisions with other balls
    for (let i = 0; i < balls_array.length; i++) {
      // Skip collision check with itself
      if (this === balls_array[i]) continue;
      // If the distance between the balls is less than their combined radius, they are colliding
      if (
        distance(this.x, this.y, balls_array[i].x, balls_array[i].y) -
          this.radius * 2 <
        0
      ) {
        ballCollision(this, balls_array[i]);
      }
    }

    let boundrayLeft = 0;
    let boundrayTop = 0;
    let boundrayWidth = VIEWPORT_WIDTH;
    let boundaryHeight = VIEWPORT_HEIGHT;

    // Check for collisions with the edges of the parent container

    // if ball is beyond horizontal range of the parent div
    if (this.x < boundrayLeft || this.x + BALL_WIDTH > boundrayWidth) {
      this.dx = -this.dx;
    }

    // if ball is beyond vertical range of the parent div
    if (this.y < boundrayTop || this.y + BALL_HEIGHT > boundaryHeight) {
      this.dy = -this.dy;
    }

    // Update positions
    this.x += this.dx;
    this.y += this.dy;
  }
}
