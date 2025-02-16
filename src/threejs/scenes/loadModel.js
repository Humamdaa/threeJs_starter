import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class ModelLoader {
  constructor() {
    this.model = null;
    this.loader = new GLTFLoader();
  }

  loadModel(url, onLoad, onProgress, onError) {
    this.loader.load(
      url,
      (gltf) => {
        this.model = gltf.scene;
        if (onLoad) onLoad(this.model);
      },
      onProgress,
      onError
    );
  }

  setColor(color) {
    if (this.model) {
      this.model.traverse((child) => {
        if (child.isMesh) {
          if (child.material.map) {
            child.material.map = null; // Remove texture map
          }

          // Set the new material with the provided color
          child.material = new THREE.MeshStandardMaterial({
            color: color,
            metalness: 0.5,
            roughness: 0.5,
            transparent: false,
          });

          child.material.needsUpdate = true; // Update material
        }
      });
    } else {
      console.warn('Model not loaded yet. Call loadModel() first.');
    }
  }

  addToScene(scene) {
    if (this.model) {
      scene.add(this.model);
    } else {
      console.warn('Model not loaded yet. Call loadModel() first.');
    }
  }

  setPosition(x, y, z) {
    if (this.model) {
      this.model.position.set(x, y, z);
    } else {
      console.warn('Model not loaded yet. Call loadModel() first.');
    }
  }

  setScale(x, y, z) {
    if (this.model) {
      this.model.scale.set(x, y, z);
    } else {
      console.warn('Model not loaded yet. Call loadModel() first.');
    }
  }

  rotate(x, y, z) {
    if (this.model) {
      this.model.rotation.set(x, y, z);
    } else {
      console.warn('Model not loaded yet. Call loadModel() first.');
    }
  }

  animate() {
    if (this.model) {
      this.model.rotation.y += 0.01; // Rotate around the Y-axis for animation
    }
  }

  // Method to add lighting to the scene
  addLights(scene) {
    // Ambient light (soft light)
    const ambientLight = new THREE.AmbientLight(0x404040, 1); // Ambient light
    scene.add(ambientLight);

    // Directional light (strong light, simulating sunlight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Directional light
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    console.log('Lights added to the scene');
  }
}
