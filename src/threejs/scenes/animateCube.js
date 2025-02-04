export function animate(camera, myCube, renderer, scene) {
  requestAnimationFrame(() => animate(camera, myCube, renderer, scene)); // Recursively call animate with correct parameters
  myCube.rotation.x += 0.01;
  myCube.rotation.y += 0.01;
  renderer.render(scene, camera); // Render the scene
}
