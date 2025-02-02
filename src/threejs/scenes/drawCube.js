import * as THREE from 'three';

export function cube() {
  // Add objects, lights, etc. to the scene
  const geometry = new THREE.BoxGeometry();
  const texture = new THREE.TextureLoader().load(
    'assets/textures/car.jpg', // Adjusted path
    (loadedTexture) => {
      console.log('Texture loaded successfully', loadedTexture);
    },
    undefined, // You can provide a progress callback if needed
    (error) => {
      console.error('Error loading texture:', error);
    }
  );

  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    map: texture,
  });
  const cube = new THREE.Mesh(geometry, material);

  return cube;
}
