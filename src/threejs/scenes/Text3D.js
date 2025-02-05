import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

export async function text3D() {
  const fontLoader = new FontLoader();
  const font = await new Promise((resolve, reject) => {
    fontLoader.load(
      'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
      resolve,
      undefined,
      reject
    );
  });

  // Create 3D text geometry
  const textGeometry = new TextGeometry('Hello, Three.js!', {
    font: font,
    size: 2,
    height: 1,
    curveSegments: 12,
    bevelEnabled: false,
    bevelThickness: 0.2,
    bevelSize: 0.3,
    bevelOffset: 0,
    bevelSegments: 5,
  });

  // Create a material
  const textMaterial = new THREE.MeshBasicMaterial({ color: 0xfaaaa }); // This material doesn't respond to light

  // Create a mesh with the geometry and material
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);

  // Center the text
  textGeometry.computeBoundingBox();
  const textWidth =
    textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;
  textMesh.position.set(-textWidth / 2, 0, 0);

  console.log('font:', font);
  console.log('text:', textGeometry);
  return textMesh;
}
