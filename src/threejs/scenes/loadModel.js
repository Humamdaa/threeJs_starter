import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * Function to load a 3D model (GLTF/GLB) into the scene
 * @param {THREE.Scene} scene - The Three.js scene where the model will be added
 * @param {string} modelUrl - The URL of the 3D model to load (GLTF/GLB)
 */
export function load3DModel(scene, modelUrl) {
  const loader = new GLTFLoader();
  
  loader.load(
    modelUrl,
    (gltf) => {
      // Successfully loaded the model
      const model = gltf.scene;
      model.scale.set(1, 1, 1); // Adjust scale as needed
      model.position.set(0, 0, 0); // Set the model position
      scene.add(model); // Add the model to the scene
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded'); // Progress log
    },
    (error) => {
      console.error('An error occurred while loading the model:', error);
    }
  );
}
