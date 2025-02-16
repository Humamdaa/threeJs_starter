// import * as THREE from 'three';

// export function cone() {
//   const radius = 3; // Radius of the base of the cone
//   const height = 5; // Height of the cone
//   const radialSegments = 30; // Number of segmented faces around the circumference
//   const coneGeometry = new THREE.ConeGeometry(radius, height, radialSegments);

//   // Create a material for the cone
//   const coneMaterial = new THREE.MeshBasicMaterial({
//     color: 0x00bb,
//     wireframe: true,
//   });

//   // Create a mesh with the geometry and material
//   const cone = new THREE.Mesh(coneGeometry, coneMaterial);
//   cone.position.y = 2;

//   return cone;
// }


import * as THREE from 'three';

export class Cone {
  constructor(radius = 3, height = 5, radialSegments = 30) {
    this.radius = radius;
    this.height = height;
    this.radialSegments = radialSegments;
    this.cone = null;
    this.geometry = new THREE.ConeGeometry(this.radius, this.height, this.radialSegments);
    this.material = new THREE.MeshBasicMaterial({
      color: 0x00bb00,
      wireframe: true,
    });

    // Create the cone mesh
    this.createCone();
  }

  createCone() {
    this.cone = new THREE.Mesh(this.geometry, this.material);
    this.cone.position.y = 2; // Position the cone slightly above the ground
  }

  addToScene(scene) {
    if (this.cone) {
      scene.add(this.cone);
    } else {
      console.warn('Cone not created yet.');
    }
  }

  setPosition(x, y, z) {
    if (this.cone) {
      this.cone.position.set(x, y, z);
    } else {
      console.warn('Cone not created yet.');
    }
  }

  setScale(x, y, z) {
    if (this.cone) {
      this.cone.scale.set(x, y, z);
    } else {
      console.warn('Cone not created yet.');
    }
  }

  rotate(x, y, z) {
    if (this.cone) {
      this.cone.rotation.set(x, y, z);
    } else {
      console.warn('Cone not created yet.');
    }
  }
  
  // Animation method to rotate the cone
  animate() {
    if (this.cone) {
      this.cone.rotation.y += 0.01;  // Rotate around the Y-axis for animation
    }
  }
}
