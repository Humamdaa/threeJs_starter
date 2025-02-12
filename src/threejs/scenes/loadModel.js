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
}
