import * as THREE from 'three';
import { Camera } from '../camera';
import { ModelLoader } from './loadModel';
import { Cube } from './drawCube';
import { Cone } from './drawCone';
import { Arch } from './drawArch';
import { Line } from './drawLine';

export function fullScene() {
  // Set up the scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new Camera();
  const threeCamera = camera.getCamera();
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Create instances of each class

  // ModelLoader Example
  const modelLoader = new ModelLoader();
  modelLoader.loadModel(
    'assets/models/searsia_lucida_1k.gltf', // Replace with your model URL
    (model) => {
      // Add the model to the scene
      modelLoader.addToScene(scene);

      // Set position and scale
      modelLoader.setPosition(0, 0, 0);
      modelLoader.setScale(2, 2, 1);

      // Add lights to the scene
      modelLoader.addLights(scene); // Add lighting

      // Set color (for example, red)
      modelLoader.setColor(0xff0000); // Red color
    },
    undefined, // onProgress
    (error) => console.error('Error loading model:', error) // onError
  );

  // Cube Example
  const cube = new Cube('assets/textures/car.jpg');
  cube.addToScene(scene);
  cube.setPosition(10, 0, 0);
  cube.setScale(1, 1, 1);

  // Cone Example
  const cone = new Cone();
  cone.addToScene(scene);
  cone.setPosition(-10, 0, 0);
  cone.setScale(1, 1, 1);

  // Arch Example
  const arch = new Arch(3, 5, 1, 0xff5733, true); // Example with custom color
  arch.addToScene(scene);
  arch.setPosition(0, -10, 0);
  arch.setScale(1, 1, 1);

  // Line Example
  const line = new Line(0x00ff00); // Green line
  line.addToScene(scene);
  line.setPosition(0, 10, 0);
  line.setScale(1, 1, 1);

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // Update camera position based on arrow keys
    camera.updateCameraPosition();
    camera.updateAspectRatio(window.innerWidth / window.innerHeight);
    // Call the animate function for each object
    modelLoader.animate(); // If you want to animate your model (e.g., rotating)
    cube.animate();
    cone.animate();
    arch.animate();
    line.animate();

    renderer.render(scene, threeCamera);
  }

  // Start the animation
  animate();

  // Resize listener for responsive design
  window.addEventListener('resize', () => {
    camera.updateAspectRatio(window.innerWidth / window.innerHeight);
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return scene;
}
