// import * as THREE from 'three';

// export function Arch(
//   radius = 2,
//   height = 2,
//   depth = 0.5,
//   color = 0x00ff00,
//   wireframe = true
// ) {
//   // Create a custom shape for the arch
//   const shape = new THREE.Shape();

//   // Define the points of the arch
//   const startX = -radius; // Starting X position
//   const startY = 0; // Starting Y position
//   // Move to the starting point
//   shape.moveTo(startX, startY);

//   // Draw the left vertical line
//   shape.lineTo(startX, startY + height);

//   // Draw the top semicircle (arch)
//   shape.absarc(0, startY + height, radius, Math.PI, 0, false);

//   // Draw the right vertical line
//   shape.lineTo(startX + 2 * radius, startY);

//   // Draw the bottom line to close the shape
//   shape.lineTo(startX, startY);

//   // Extrude the shape into a 3D object
//   const extrudeSettings = {
//     depth: depth, // Depth of the extrusion
//     bevelEnabled: false, // Disable bevel for simplicity
//   };
//   const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

//   // Create a material for the arch
//   const material = new THREE.MeshBasicMaterial({ color, wireframe });

//   // Create and return the mesh
//   const arch = new THREE.Mesh(geometry, material);

//   return arch;
// }


import * as THREE from 'three';

export class Arch {
  constructor(radius = 2, height = 2, depth = 0.5, color = 0x00ff00, wireframe = true) {
    this.radius = radius;
    this.height = height;
    this.depth = depth;
    this.color = color;
    this.wireframe = wireframe;
    this.arch = null;

    // Create the arch geometry and material
    this.createArch();
  }

  createArch() {
    // Create a custom shape for the arch
    const shape = new THREE.Shape();

    // Define the points of the arch
    const startX = -this.radius; // Starting X position
    const startY = 0; // Starting Y position

    // Move to the starting point
    shape.moveTo(startX, startY);

    // Draw the left vertical line
    shape.lineTo(startX, startY + this.height);

    // Draw the top semicircle (arch)
    shape.absarc(0, startY + this.height, this.radius, Math.PI, 0, false);

    // Draw the right vertical line
    shape.lineTo(startX + 2 * this.radius, startY);

    // Draw the bottom line to close the shape
    shape.lineTo(startX, startY);

    // Extrude the shape into a 3D object
    const extrudeSettings = {
      depth: this.depth, // Depth of the extrusion
      bevelEnabled: false, // Disable bevel for simplicity
    };
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

    // Create a material for the arch
    this.material = new THREE.MeshBasicMaterial({
      color: this.color,
      wireframe: this.wireframe,
    });

    // Create the arch mesh
    this.arch = new THREE.Mesh(geometry, this.material);
  }

  addToScene(scene) {
    if (this.arch) {
      scene.add(this.arch);
    } else {
      console.warn('Arch not created yet.');
    }
  }

  setPosition(x, y, z) {
    if (this.arch) {
      this.arch.position.set(x, y, z);
    } else {
      console.warn('Arch not created yet.');
    }
  }

  setScale(x, y, z) {
    if (this.arch) {
      this.arch.scale.set(x, y, z);
    } else {
      console.warn('Arch not created yet.');
    }
  }

  rotate(x, y, z) {
    if (this.arch) {
      this.arch.rotation.set(x, y, z);
    } else {
      console.warn('Arch not created yet.');
    }
  }

  // Animation method to rotate the arch
  animate() {
    if (this.arch) {
      this.arch.rotation.y += 0.01;  // Rotate around the Y-axis for animation
    }
  }
}
