"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function CodeCube() {
  const meshRef = useRef<any>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3,3, 3]} />
      <meshStandardMaterial
  color="#00f0ff"
  emissive="#00f0ff"
  emissiveIntensity={0.5}
  wireframe
/>
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <div style={{  width:"100%" , height: "300px" ,maxWidth:"400px"}}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />

        <CodeCube />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}