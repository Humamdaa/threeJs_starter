import * as THREE from 'three';

export function Arch(
  radius = 2,
  height = 2,
  depth = 0.5,
  color = 0x00ff00,
  wireframe = true
) {
  // Create a custom shape for the arch
  const shape = new THREE.Shape();

  // Define the points of the arch
  const startX = -radius; // Starting X position
  const startY = 0; // Starting Y position
  // Move to the starting point
  shape.moveTo(startX, startY);

  // Draw the left vertical line
  shape.lineTo(startX, startY + height);

  // Draw the top semicircle (arch)
  shape.absarc(0, startY + height, radius, Math.PI, 0, false);

  // Draw the right vertical line
  shape.lineTo(startX + 2 * radius, startY);

  // Draw the bottom line to close the shape
  shape.lineTo(startX, startY);

  // Extrude the shape into a 3D object
  const extrudeSettings = {
    depth: depth, // Depth of the extrusion
    bevelEnabled: false, // Disable bevel for simplicity
  };
  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

  // Create a material for the arch
  const material = new THREE.MeshBasicMaterial({ color, wireframe });

  // Create and return the mesh
  const arch = new THREE.Mesh(geometry, material);

  return arch;
}