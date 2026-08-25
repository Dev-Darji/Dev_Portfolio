"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function CyberWaveLandscape() {
  const meshRef = useRef<THREE.Mesh>(null!);

  const { originalZ } = useMemo(() => {
    const width = 18;
    const height = 12;
    const segmentsX = 45;
    const segmentsY = 35;

    const geometry = new THREE.PlaneGeometry(width, height, segmentsX, segmentsY);
    const pos = geometry.attributes.position.array as Float32Array;
    const origZ = new Float32Array(pos.length / 3);

    for (let i = 0; i < origZ.length; i++) {
      origZ[i] = pos[i * 3 + 2];
    }

    return { originalZ: origZ };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const mouseX = state.pointer.x * 1.5;
    const mouseY = state.pointer.y * 1.5;

    if (meshRef.current) {
      const positionAttr = meshRef.current.geometry.attributes.position;
      const arr = positionAttr.array as Float32Array;

      for (let i = 0; i < arr.length; i += 3) {
        const x = arr[i];
        const y = arr[i + 1];

        // Smooth harmonic wave reacting to cursor position
        const wave1 = Math.sin(x * 0.45 + time * 1.1) * 0.5;
        const wave2 = Math.cos(y * 0.55 + time * 0.75) * 0.45;
        const mouseDist = Math.sqrt((x - mouseX * 4) ** 2 + (y - mouseY * 3) ** 2);
        const mouseRipple = Math.sin(mouseDist * 1.2 - time * 2) * 0.35 * Math.exp(-mouseDist * 0.2);

        arr[i + 2] = wave1 + wave2 + mouseRipple;
      }

      positionAttr.needsUpdate = true;
      meshRef.current.rotation.x = -Math.PI / 3.4 + mouseY * 0.08;
      meshRef.current.rotation.z = Math.sin(time * 0.15) * 0.06 + mouseX * 0.08;
    }
  });

  return (
    <group position={[0, -0.6, -1.2]}>
      {/* Dynamic Cyber Wave Surface - No Cube Behind Text */}
      <mesh ref={meshRef}>
        <planeGeometry args={[18, 12, 45, 35]} />
        <meshStandardMaterial
          color="#06132b"
          emissive="#0284c7"
          emissiveIntensity={0.65}
          roughness={0.2}
          metalness={0.9}
          wireframe
        />
      </mesh>
    </group>
  );
}

export default function ConnectedNodesCanvas() {
  return (
    <div className="w-full h-full min-h-[460px] relative pointer-events-none select-none">
      <Canvas
        camera={{ position: [0, 1.2, 5.5], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[6, 10, 6]} intensity={1.8} color="#ffffff" />
        <pointLight position={[-4, 3, 2]} color="#06b6d4" intensity={3} distance={14} />
        <pointLight position={[4, -2, 2]} color="#6366f1" intensity={2.5} distance={14} />
        <pointLight position={[0, 4, 1]} color="#10b981" intensity={1.5} distance={12} />

        <CyberWaveLandscape />
      </Canvas>
    </div>
  );
}
