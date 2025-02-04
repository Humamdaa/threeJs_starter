import * as THREE from 'three';

export function animateArch(
  camera,
  arch,
  renderer,
  scene,
  speed = 0.01,
  targetRotation = Math.PI / 2
) {
  // Animation logic for the arch
  function animate() {
    requestAnimationFrame(animate);

    // Check if the arch has reached the target rotation
    if (arch.rotation.z < targetRotation) {
      arch.rotation.z += speed; // Increment rotation
    } else {
      // Stop the animation once the target rotation is reached
      return;
    }

    // Render the scene
    renderer.render(scene, camera);
  }

  // Start the animation
  animate();
}
