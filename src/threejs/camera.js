import * as THREE from 'three';

export class Camera {
  constructor(fov = 75, aspect = window.innerWidth / window.innerHeight, near = 0.1, far = 1000) {
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.camera.position.set(0, 0, 10);
    this.camera.lookAt(0, 0, 0);
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
}