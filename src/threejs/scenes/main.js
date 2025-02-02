import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { createCamera } from '../camera';
import { line } from './drawLine';
import { cube } from './drawCube';
import { animate } from './animateShapes';

export function fullScene() {
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const camera = createCamera();

  const myCube = cube(); // Get the cube mesh
  const myLine = line(); // Get the line mesh

  // Add the objects to the scene
  scene.add(myCube);
  scene.add(myLine);


  // WebGL compatibility check
  if (WebGL.isWebGL2Available()) {
    animate(camera, myCube, renderer, scene); // Initiate function or other initializations here
  } else {
    const warning = WebGL.getWebGL2ErrorMessage();
    document.getElementById('container').appendChild(warning);
  }

  return scene;
}
