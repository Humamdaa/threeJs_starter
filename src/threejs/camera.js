import * as THREE from 'three';

export class Camera {
  constructor(
    fov = 75,
    aspect = window.innerWidth / window.innerHeight,
    near = 0.1,
    far = 1000
  ) {
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.camera.position.set(0, 0, 10);
    this.camera.lookAt(0, 0, 0);

    // Listen for keyboard events
    this.keyStates = {}; // To track the pressed keys
    window.addEventListener('keydown', this.onKeyDown.bind(this));
    window.addEventListener('keyup', this.onKeyUp.bind(this));

    // Set camera movement speed
    this.speed = 0.05;
  }

  getCamera() {
    return this.camera;
  }

  setPosition(x, y, z) {
    this.camera.position.set(x, y, z);
  }

  lookAt(x, y, z) {
    this.camera.lookAt(x, y, z);
  }

  updateAspectRatio(aspect) {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  // Method to handle key down event
  onKeyDown(event) {
    this.keyStates[event.code] = true;
  }

  // Method to handle key up event
  onKeyUp(event) {
    this.keyStates[event.code] = false;
  }

  // Method to update camera position and rotation based on keyboard inputs
  updateCameraPosition() {
    const cameraDirection = new THREE.Vector3();
    this.camera.getWorldDirection(cameraDirection);  // Get the current look direction of the camera
    cameraDirection.y = 0;  // Ignore the vertical direction (keep the camera's up orientation fixed)
    cameraDirection.normalize();

    // Left and Right (Arrow keys) to change camera's look direction
    if (this.keyStates['ArrowLeft']) {
      this.camera.rotation.y += 0.02; // Rotate left (counterclockwise around Y-axis)
    }
    if (this.keyStates['ArrowRight']) {
      this.camera.rotation.y -= 0.02; // Rotate right (clockwise around Y-axis)
    }
    if (this.keyStates['ArrowUp']) {
      this.camera.rotation.x += 0.02; // Rotate up (rotate around X-axis)
    }
    if (this.keyStates['ArrowDown']) {
      this.camera.rotation.x -= 0.02; // Rotate down (rotate around X-axis)
    }

    // Move forward and backward (W and S) along the camera's current look direction
    if (this.keyStates['KeyW']) {
      this.camera.position.addScaledVector(cameraDirection, this.speed); // Move forward
    }
    if (this.keyStates['KeyS']) {
      this.camera.position.addScaledVector(cameraDirection, -this.speed); // Move backward
    }

    // Move left and right (A and D) along the camera's local X axis
    const rightDirection = new THREE.Vector3();
    rightDirection.crossVectors(cameraDirection, new THREE.Vector3(0, 1, 0)); // Right is perpendicular to the camera's look direction
    rightDirection.normalize();

    if (this.keyStates['KeyA']) {
      this.camera.position.addScaledVector(rightDirection, -this.speed); // Move left
    }
    if (this.keyStates['KeyD']) {
      this.camera.position.addScaledVector(rightDirection, this.speed); // Move right
    }
  }
}
