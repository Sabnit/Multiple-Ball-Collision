class Ball {
  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} radius
   * @param {number} speed
   */
  constructor(x, y, radius = BALL_WIDTH / 2, speed = calcSpeed()) {
    this.x = x;
    this.y = y;

    this.r = radius;
    this.speed = speed;

    this.dx = getRandomNumber(-1, 1);
    this.dy = getRandomNumber(-1, 1);

    this.element = document.createElement("div");
    this.element.classList.add("ball");
    this.element.style.backgroundColor = getRandomColor();
  }

  /**
   * Returns the DOM element representing the ball
   *
   * @returns HTMLDivElement
   */
  getElement = () => this.element;

  /**
   * Returns x position of ball
   *
   * @returns number
   */

  getX = () => this.x;

  /**
   * Returns y position of ball
   *
   * @returns number
   */
  getY = () => this.y;

  /**
   * Set x position of ball
   *
   * @param {number} x
   */
  setX = (x) => {
    thix.x = x;
  };

  /**
   * Set y position of ball
   *
   * @param {number} y
   */
  setY = (y) => (this.y = y);

  // Move the ball towards a direction
  move = () => {
    this.x += this.dx * this.speed;
    this.y += this.dy * this.speed;
  };

  // Update position of ball element
  draw = () => {
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
  };

  /**
   *
   * @param {number} boundaryLeft
   * @param {number} boundaryTop
   * @param {number} boundaryWidth
   * @param {number} boundaryHeight
   */
  checkWallCollision = (
    boundaryLeft,
    boundaryTop,
    boundaryWidth,
    boundaryHeight
  ) => {
    if (
      this.x + this.dx > boundaryLeft ||
      this.x + this.r > boundaryWidth - this.r
    ) {
      this.dx = -this.dx;
    }
    if (this.y < boundaryTop || this.y + this.r > boundaryHeight - this.r) {
      this.dy = -this.dy;
    }
  };
  // checkWallCollision = (
  //   boundaryLeft,
  //   boundaryTop,
  //   boundaryWidth,
  //   boundaryHeight
  // ) => {
  //   if (
  //     this.x + this.dx > boundaryWidth - this.r ||
  //     this.x + this.dx < this.r
  //   ) {
  //     this.dx = -this.dx;
  //   }

  //   if (
  //     this.y + this.dy > boundaryHeight - this.r ||
  //     this.y + this.dy < this.r
  //   ) {
  //     this.dy = -this.dy;
  //   }
  // };

  /**
   *
   * @param {Ball} ball
   */
  checkBallCollision = (ball) => {
    const dist = distance(this.x, this.y, ball.x, ball.y);

    const sumOfRadius = this.r + ball.r;
    if (dist < sumOfRadius) {
      this.dx = -this.dx;
      this.dy = -this.dy;

      ball.dx = -ball.dx;
      ball.dy = -ball.dy;
    }
  };
}
