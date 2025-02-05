import * as THREE from 'three';

export function cone() {
  const radius = 3; // Radius of the base of the cone
  const height = 5; // Height of the cone
  const radialSegments = 30; // Number of segmented faces around the circumference
  const coneGeometry = new THREE.ConeGeometry(radius, height, radialSegments);

  // Create a material for the cone
  const coneMaterial = new THREE.MeshBasicMaterial({
    color: 0x00bb,
    wireframe: true,
  });

  // Create a mesh with the geometry and material
  const cone = new THREE.Mesh(coneGeometry, coneMaterial);
  cone.position.y = 2;

  return cone;
}
