import * as THREE from 'three';

export function cone() {
  const radius = 1; // Radius of the base of the cone
  const height = 2; // Height of the cone
  const radialSegments = 32; // Number of segmented faces around the circumference
  const coneGeometry = new THREE.ConeGeometry(radius, height, radialSegments);

  // Create a material for the cone
  const coneMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
  });

  // Create a mesh with the geometry and material
  const cone = new THREE.Mesh(coneGeometry, coneMaterial);
  cone.position.y = 2;

  return cone;
}
