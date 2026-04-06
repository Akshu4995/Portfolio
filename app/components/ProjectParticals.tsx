"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { animate, useMotionValue } from "framer-motion";

function Particles({ color }: { color: string }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const motionColor = useMotionValue(color);

  // Use a stable count to prevent re-renders
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const count = isMobile ? 800 : 2000;

  // Generate particle positions once
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 5 + Math.random() * 2;
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      pos[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
      pos[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = radius * Math.cos(theta);
    }
    return pos;
  }, [count]);

  // Smoothly update the color when the project changes
  useEffect(() => {
    const controls = animate(motionColor, color, {
      duration: 1.5,
      ease: "easeInOut",
      onUpdate: (latest) => {
        if (pointsRef.current) {
          (pointsRef.current.material as THREE.PointsMaterial).color.set(latest);
        }
      },
    });
    return () => controls.stop();
  }, [color, motionColor]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.03;
      pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        {/* FIXED: Removed args={[]} and used correct attribute props */}
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          itemSize={3}
          array={positions}
          // Passing the array as the first argument to the constructor 
          // satisfies the 'args' requirement in TypeScript
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.4}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ProjectParticles({ color }: { color: string }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <Particles color={color} />
      </Canvas>
    </div>
  );
}