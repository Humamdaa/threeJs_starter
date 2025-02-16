import * as THREE from 'three';

export class Cube {
  constructor(texturePath) {
    this.geometry = new THREE.BoxGeometry();
    this.texturePath = texturePath;
    this.texture = null;
    this.material = null;
    this.cube = null;
    this.loader = new THREE.TextureLoader();

    // Call loadTexture immediately upon object creation
    this.loadTexture();
  }

  loadTexture() {
    this.texture = this.loader.load(
      this.texturePath,
      (loadedTexture) => {
        console.log('Texture loaded successfully', loadedTexture);
        this.createMaterial();
      },
      undefined,
      (error) => {
        console.error('Error loading texture:', error);
      }
    );
  }

  createMaterial() {
    // Use MeshStandardMaterial for better visual appearance with lights
    this.material = new THREE.MeshStandardMaterial({
      map: this.texture,
    });
    this.createCube();
  }

  createCube() {
    this.cube = new THREE.Mesh(this.geometry, this.material);
    // Cube will now be visible once the texture is loaded and material is applied
    if (this.material) {
      this.cube.visible = true; // Ensure it's visible once texture is loaded
    }
  }

  addToScene(scene) {
    if (this.cube) {
      scene.add(this.cube);
    } else {
      console.warn('Cube not created yet. Ensure texture is loaded.');
    }
  }

  setPosition(x, y, z) {
    if (this.cube) {
      this.cube.position.set(x, y, z);
    } else {
      console.warn('Cube not created yet. Ensure texture is loaded.');
    }
  }

  setScale(x, y, z) {
    if (this.cube) {
      this.cube.scale.set(x, y, z);
    } else {
      console.warn('Cube not created yet. Ensure texture is loaded.');
    }
  }

  rotate(x, y, z) {
    if (this.cube) {
      this.cube.rotation.set(x, y, z);
    } else {
      console.warn('Cube not created yet. Ensure texture is loaded.');
    }
  }

  // Animation method
  animate() {
    if (this.cube) {
      // Rotate the cube over time for animation effect
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
    }
  }
}
