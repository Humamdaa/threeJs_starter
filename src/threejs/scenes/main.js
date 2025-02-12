import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { Camera } from '../camera.js';
import { line } from './drawLine';
import { cube } from './drawCube';
import { animate } from './animateCube';
import { cone } from './drawCone';
import { Arch } from './drawArch';
import { animateArch } from './animateArch';
import { ModelLoader } from './loadModel.js';
import { text3D } from './Text3D.js';

// Initialize the scene and add objects
async function initScene() {
  const scene = new THREE.Scene();

  // Create and position objects
  const myCube = cube();
  const myCone = cone();
  const myText = await text3D();
  const myLine = line();
  const myArch = Arch();
  myArch.position.set(5, -3, -3);

  // Add objects to the scene
  scene.add(myCube, myLine, myText, myCone, myArch);

  // Load and configure the GLTF model
  const modelLoader = new ModelLoader();
  loadModel(scene, modelLoader);

  return { scene, myCube, myLine, myText, myCone, myArch };
}

// Load the GLTF model and apply materials
function loadModel(scene, modelLoader) {
  try {
    modelLoader.loadModel(
      'assets/models/searsia_lucida_1k.gltf', // Path to the model
      (model) => {
        // Model loaded successfully
        console.log('Model loaded:', model);

        // Set the model's position, scale, and rotation
        modelLoader.setPosition(0, 2, 0);

        // Add the model to the scene
        modelLoader.addToScene(scene);

        // Apply a material with an emissive color(green) to make it stand out
        model.traverse((child) => {
          if (child.isMesh) {
            const material = new THREE.MeshStandardMaterial({
              color: 0x00ff00,
              emissive: 0x00ff00,
              emissiveIntensity: 1, // Glow intensity
              metalness: 0, // Non-metallic
              roughness: 0.5, // Slightly rough
            });
            child.material = material;
          }
        });
      },
      (xhr) => {
        // Progress callback
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        // Error callback
        console.error('Error loading model:', error);
      }
    );
  } catch (error) {
    console.error('Error loading model:', error);
  }
}

// Check WebGL compatibility
function checkWebGLCompatibility() {
  if (WebGL.isWebGL2Available()) {
    return true;
  } else {
    const warning = WebGL.getWebGL2ErrorMessage();
    document.getElementById('container').appendChild(warning);
    return false;
  }
}

// Initialize the full scene and start animations
export async function fullScene() {
  const { scene, myCube, myArch } = await initScene();

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const cameraInstance = new Camera();
  const camera = cameraInstance.getCamera();

  if (checkWebGLCompatibility()) {
    animateArch(camera, myArch, renderer, scene, 0.01, Math.PI);
    animate(camera, myCube, renderer, scene);
  }

  return scene;
}
