import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { createCamera } from '../camera';
import { line } from './drawLine';
import { cube } from './drawCube';
import { animate } from './animateCube';
import { cone } from './drawCone';
import { Arch } from './drawArch';
import { animateArch } from './animateArch';
import { text3D } from './Text3D';

// Function to initialize the scene and add objects
// Function to initialize the scene and add objects
async function initScene() {
  const scene = new THREE.Scene();

  // Create objects
  const myCube = cube();
  const myLine = line();
  const myCone = cone();
  const myArch = Arch();
  const textMesh = await text3D(); // Ensure text is loaded asynchronously

  // Set positions of objects
  textMesh.position.set(-10, 10, -25);
  myArch.position.set(5, -3, -3);

  // Add objects to the scene
  scene.add(myCube);
  scene.add(myLine);
  scene.add(myCone);
  scene.add(myArch);
  scene.add(textMesh);

  // Return the objects so they can be used elsewhere
  return { scene, myCube, myLine, myCone, myArch, textMesh };
}

// Function to check WebGL compatibility
function checkWebGLCompatibility() {
  if (WebGL.isWebGL2Available()) {
    return true;
  } else {
    const warning = WebGL.getWebGL2ErrorMessage();
    document.getElementById('container').appendChild(warning);
    return false;
  }
}

// Main function to create the scene and start the rendering process
export async function fullScene() {
  // Initialize and load the scene along with all the objects
  const { scene, myCube, myLine, myCone, myArch, textMesh } = await initScene();

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const camera = createCamera();

  // Check WebGL compatibility
  if (checkWebGLCompatibility()) {
    // Start animations if WebGL2 is available
    animateArch(camera, myArch, renderer, scene, 0.01, Math.PI);
    animate(camera, myCube, renderer, scene); // Initiate function or other initializations here
  }

  return scene;
}
