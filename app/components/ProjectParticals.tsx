"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { animate, useMotionValue } from "framer-motion";

function Particles({ count = 2000, color }: { count?: number; color: string }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const motionColor = useMotionValue(color);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
const particleCount = isMobile ? 800 : 2000; // Fewer dots on phone = smoother FPS

  // Generate particle positions once
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Form a loose sphere shape
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
    animate(motionColor, color, {
      duration: 1.5, // How long the fade lasts
      ease: "easeInOut",
      onUpdate: (latest) => {
        if (pointsRef.current) {
          (pointsRef.current.material as THREE.PointsMaterial).color.set(latest);
        }
      },
    });
  }, [color, motionColor]);

  // Slow rotation animation
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.03; // Slow rotation
      pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1; // Gentle wobble
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
                  attach="attributes-position"
                  count={positions.length / 3}
                  array={positions}
                  itemSize={3} args={[]}        />
      </bufferGeometry>
      <pointsMaterial
        color={color} // Initial color
        size={0.03} // Size of dots
        sizeAttenuation={true}
        transparent={true}
        opacity={0.3} // Subtle
        depthWrite={false}
        blending={THREE.AdditiveBlending} // High-tech glow blend
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
        zIndex: 0, // Behind the card, but maybe in front of the main background
        pointerEvents: "none", // Don't block mouse interactions
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true }} // Alpha for transparent background
      >
        <Particles color={color} />
      </Canvas>
    </div>
  );
}