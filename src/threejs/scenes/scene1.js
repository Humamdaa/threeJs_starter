import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { createCamera } from '../camera';

export function createScene() {
  const scene = new THREE.Scene();
  const camera = createCamera();
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Add objects, lights, etc. to the scene
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  // WebGL compatibility check
  if (WebGL.isWebGL2Available()) {
    // Initiate function or other initializations here
    animate();
  } else {
    const warning = WebGL.getWebGL2ErrorMessage();
    document.getElementById('container').appendChild(warning);
  }
}
