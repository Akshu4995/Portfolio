"use client";

import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Text, Float, OrbitControls, Center } from "@react-three/drei";

const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Redux", color: "#764ABC" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
];

function TechRing() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const radius = isMobile ? 3 : 5;

  return (
    <group>
      {techStack.map((tech, i) => {
        const angle = (i / techStack.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <Float 
            key={tech.name} 
            speed={2} 
            rotationIntensity={0.5} 
            floatIntensity={0.5}
            position={[x, 0, z]}
          >
            <Text
              fontSize={isMobile ? 0.4 : 0.6}
              color={tech.color}
              // This makes the text face the camera automatically
              font={undefined} // Uses default font
              maxWidth={2}
              textAlign="center"
            >
              {tech.name}
            </Text>
          </Float>
        );
      })}
    </group>
  );
}

export default function TechMarquee() {
  return (
    <div style={{ 
      width: "100%", 
      height: "350px", 
      position: "relative",
      background: "transparent",
      display: "block" 
    }}>
      <Canvas 
        camera={{ position: [0, 0, 12], fov: 40 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        
        <Suspense fallback={null}>
          <Center>
            <TechRing />
          </Center>
        </Suspense>

        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={1.5} 
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}