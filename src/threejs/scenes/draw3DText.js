import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

export function text() {
  const loader = new THREE.FontLoader(); // Corrected FontLoader (uppercase L)

  // Load the font (ensure the path to 'Valeor_Regular.json' is correct)
  loader.load('/assets/fonts/Valeor_Regular.json', function (font) {
    // Create the TextGeometry with the loaded font
    const geometry = new TextGeometry('Hi.\n How are you?', {
      font: font,
      size: 6,
      height: 2,
    });

    // Use correct MeshPhongMaterial
    const frontMaterial = new THREE.MeshPhongMaterial({ color: 0xad4000 }); // Front material
    const sideMaterial = new THREE.MeshPhongMaterial({ color: 0x5c2301 }); // Side material

    // Create the text mesh
    const textMesh = new THREE.Mesh(geometry, [frontMaterial, sideMaterial]);

    // Enable shadow if needed
    textMesh.castShadow = true;

    // Position the text in the scene
    textMesh.position.set(-0.5, 15, -40);

    // Add the text mesh to the scene (if you're returning it from here, you can add it to the scene in the parent scope)
    // Assuming you're adding this mesh to the scene in your main function
    return textMesh;
  });
}
