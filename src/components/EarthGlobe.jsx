import React from 'react';
import { useGLTF } from '@react-three/drei';

export function EarthGlobeHologram(props) {
  const { nodes, materials } = useGLTF('/models/earth_globe_hologram/scene.gltf');

  return (
    <group {...props} scale={[2, 2, 2]} rotation={[0, Math.PI / 4, 0]} position={[0, 1, 0]}>
      {/* Main Earth Sphere */}
      <mesh geometry={nodes.Earth_2.geometry} material={materials['Earth_Surface.002']} />
      
      {/* Holographic Rays */}
      <mesh
        geometry={nodes.Earth_rays_2.geometry}
        material={materials['transparent.004']}
        material-transparent
        material-opacity={0.5}
      />
    </group>
  );
}

useGLTF.preload('/models/earth_globe_hologram/scene.gltf');
