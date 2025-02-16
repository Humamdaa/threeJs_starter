// //create a blue LineBasicMaterial
// import * as THREE from 'three';

// export function line() {
//   const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

//   const points = [];
//   points.push(new THREE.Vector3(-5, 0, 0));
//   points.push(new THREE.Vector3(0, 5, 0));
//   points.push(new THREE.Vector3(5, 0, 0));
//   points.push(new THREE.Vector3(-5, 0, 0));

//   const geometry = new THREE.BufferGeometry().setFromPoints(points);

//   const line = new THREE.Line(geometry, material);

//   return line;
// }

import * as THREE from 'three';

export class Line {
  constructor(color = 0x0000ff) {
    this.color = color;
    this.line = null;
    this.material = new THREE.LineBasicMaterial({ color: this.color });

    // Create the geometry and line
    this.createLine();
  }

  createLine() {
    const points = [];
    points.push(new THREE.Vector3(-5, 0, 0));
    points.push(new THREE.Vector3(0, 5, 0));
    points.push(new THREE.Vector3(5, 0, 0));
    points.push(new THREE.Vector3(-5, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    // Create the line mesh
    this.line = new THREE.Line(geometry, this.material);
  }

  addToScene(scene) {
    if (this.line) {
      scene.add(this.line);
    } else {
      console.warn('Line not created yet.');
    }
  }

  setPosition(x, y, z) {
    if (this.line) {
      this.line.position.set(x, y, z);
    } else {
      console.warn('Line not created yet.');
    }
  }

  setScale(x, y, z) {
    if (this.line) {
      this.line.scale.set(x, y, z);
    } else {
      console.warn('Line not created yet.');
    }
  }

  rotate(x, y, z) {
    if (this.line) {
      this.line.rotation.set(x, y, z);
    } else {
      console.warn('Line not created yet.');
    }
  }

  // Animation method to rotate the line
  animate() {
    if (this.line) {
      this.line.rotation.z += 0.01; // Rotate the line around the Z-axis
    }
  }
}
