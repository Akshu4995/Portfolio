"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function WireframeCore() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Rotating it on multiple axes for that high-tech "scanning" look
    meshRef.current.rotation.y = t * 0.15;
    meshRef.current.rotation.x = t * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        {/* Icosahedron gives those exact triangular wireframe lines from your image */}
        <icosahedronGeometry args={[2, 0]} />
        <meshBasicMaterial 
          wireframe 
          color="#00f0ff" 
          transparent 
          opacity={0.9}
        />
      </mesh>
      
      {/* Optional: A second, smaller wireframe inside for extra "AI Core" depth */}
      <mesh scale={0.5}>
        <icosahedronGeometry args={[2, 0]} />
        <meshBasicMaterial 
          wireframe 
          color="#00f0ff" 
          transparent 
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    // Keeping your original container and positioning
    <div className="w-full h-[40vh] lg:h-[60vh] flex items-center justify-center relative z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        
        <WireframeCore />

        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate 
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}