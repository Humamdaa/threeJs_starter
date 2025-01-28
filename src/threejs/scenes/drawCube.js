import * as THREE from 'three';

export function cube() {
  // Add objects, lights, etc. to the scene
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);

  return cube;
}
