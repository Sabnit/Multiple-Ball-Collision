# Ball Collision Simulation

This project focuses on simulating ball collision within a defined canvas.

## Description

The simulation involves the movement of multiple balls with unique properties such as position, velocity, size, and color. The key feature of this project is the detection and handling of collisions between these balls.

## Features

Ball Creation: Create balls with randomized properties (position, velocity, size, color).
Collision Detection: Detect collisions between balls based on their positions and radii.
Realistic Bouncing: Simulate a realistic bounce effect upon collision.

## File Structure

The project directory consists of several files, each serving specific purposes and functionalities:

### constants.js

**Purpose:** Stores constants used throughout the project.

**Key Contents:**
VIEWPORT_WIDTH and VIEWPORT_HEIGHT: Define the canvas dimensions.
BALL_COUNT, BALL_WIDTH, BALL_HEIGHT, BORDER_RADIUS: Define ball-related properties.

### Ball.js

**Purpose:**
Defines the Ball class and its properties representing individual balls in the simulation.

**Key Contents:**
constructor: Initializes ball properties such as position, velocity, radius, and color.
createBall: Creates a ball element in the canvas with defined properties.
update: Manages ball movement, collision detection, and boundary checks.

### index.js

**Purpose:**
Initiates the animation loop and manages ball creation and updates.

**Key Contents:**
startAnimation: Initializes and continues the animation loop by updating ball positions and rendering frames.

### utils.js

**Purpose:**
Contains utility functions used in the project.

**Key Contents:**
getRandomNumber: Generates random numbers within specified ranges.
distance: Calculates the distance between two points.
ballCollision: Handles collision between two balls by updating their velocities.
getRandomColor: Generates random RGB color values.
rotate: Rotates velocities for realistic collision effects.
