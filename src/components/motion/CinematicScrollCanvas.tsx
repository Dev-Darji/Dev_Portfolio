"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useScrollTimeline } from "./ScrollTimelineProvider";

// Corporate Architectural Lattice Points
function CorporateDataGrid() {
  const pointsRef = useRef<THREE.Points>(null!);
  const { smoothProgress } = useScrollTimeline();

  const particleCount = 1200;
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color("#38bdf8"); // Ice Cyan
    const color2 = new THREE.Color("#2563eb"); // Royal Sapphire
    const color3 = new THREE.Color("#94a3b8"); // Platinum Slate

    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 36;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const choice = Math.random();
      const c = choice < 0.45 ? color1 : choice < 0.8 ? color2 : color3;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return [pos, col];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const progress = smoothProgress ? smoothProgress.get() : 0;
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.015 + progress * 0.4;
      pointsRef.current.rotation.x = Math.sin(t * 0.02) * 0.04;
      pointsRef.current.position.y = -progress * 8;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Right Crystalline Engineering Node (Higher Above Center)
function RightEngineeringPrism() {
  const meshRef = useRef<THREE.Group>(null!);
  const { smoothProgress } = useScrollTimeline();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const progress = smoothProgress ? smoothProgress.get() : 0;

    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.2 + progress * 1.5;
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.position.y = 1.25 + Math.sin(t * 0.8) * 0.12;
    }
  });

  return (
    <group ref={meshRef} position={[5.8, 1.25, -1.8]}>
      <mesh>
        <octahedronGeometry args={[1.15, 0]} />
        <meshStandardMaterial
          color="#0f172a"
          emissive="#2563eb"
          emissiveIntensity={0.65}
          roughness={0.2}
          metalness={0.9}
          wireframe
        />
      </mesh>
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.7, 0.015, 16, 48]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.45} />
      </mesh>
    </group>
  );
}

// Left Crystalline Engineering Node (Slightly Lower & Proportional)
function LeftEngineeringPrism() {
  const meshRef = useRef<THREE.Group>(null!);
  const { smoothProgress } = useScrollTimeline();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const progress = smoothProgress ? smoothProgress.get() : 0;

    if (meshRef.current) {
      meshRef.current.rotation.y = -t * 0.2 - progress * 1.5;
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.position.y = -0.65 + Math.sin(t * 0.8 + 1.5) * 0.12;
    }
  });

  return (
    <group ref={meshRef} position={[-5.8, -0.65, -1.8]} scale={0.88}>
      <mesh>
        <octahedronGeometry args={[1.15, 0]} />
        <meshStandardMaterial
          color="#0f172a"
          emissive="#38bdf8"
          emissiveIntensity={0.65}
          roughness={0.2}
          metalness={0.9}
          wireframe
        />
      </mesh>
      <mesh rotation={[-Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.7, 0.015, 16, 48]} />
        <meshBasicMaterial color="#2563eb" transparent opacity={0.45} />
      </mesh>
    </group>
  );
}

export function CinematicScrollCanvas() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 48 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[6, 12, 6]} intensity={1.8} color="#ffffff" />
        <pointLight position={[-6, 4, 3]} color="#38bdf8" intensity={2} distance={18} />
        <pointLight position={[6, -4, 3]} color="#2563eb" intensity={2.2} distance={18} />

        <CorporateDataGrid />
        <RightEngineeringPrism />
        <LeftEngineeringPrism />
      </Canvas>
    </div>
  );
}
