import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { createCamera } from '../camera';
import { line } from './drawLine';
import { cube } from './drawCube';
import { animate } from './animateCube';
import { cone } from './drawCone';
import { Arch } from './drawArch';
import { animateArch } from './animateArch';
// import { text } from './draw3DText';

export function fullScene() {
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const camera = createCamera();

  const myCube = cube(); // Get the cube mesh
  const myLine = line(); // Get the line mesh
  // const text = text();
  const myCone = cone();
  const myArch = Arch();

  myArch.position.set(5, -3, -3); // Move the arch to (x=2, y=1, z=-3)

  // Add the objects to the scene
  scene.add(myCube);
  scene.add(myLine);
  scene.add(myCone);
  scene.add(myArch);
  // scene.add(text);

  animateArch(camera, myArch, renderer, scene, 0.01, Math.PI); // Rotate slowly to 0 radians

  // WebGL compatibility check
  if (WebGL.isWebGL2Available()) {
    animate(camera, myCube, renderer, scene); // Initiate function or other initializations here
  } else {
    const warning = WebGL.getWebGL2ErrorMessage();
    document.getElementById('container').appendChild(warning);
  }

  return scene;
}
