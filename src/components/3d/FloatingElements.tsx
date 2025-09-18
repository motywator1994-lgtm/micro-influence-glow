import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, MeshWobbleMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const FloatingPhone = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.5, 1, 0.1]} />
        <MeshWobbleMaterial color="#6366f1" factor={0.3} speed={2} />
      </mesh>
    </Float>
  );
};

const FloatingIcon = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.3]} />
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </mesh>
  );
};

const AnimatedText = () => {
  const textRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={textRef} position={[-1, 0, 0]}>
      <mesh>
        <sphereGeometry args={[0.2]} />
        <meshStandardMaterial color="#ec4899" metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  );
};

export const Hero3DScene = () => {
  return (
    <div className="absolute inset-0 opacity-30">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
        
        <FloatingPhone position={[2, 1, 0]} />
        <FloatingPhone position={[-2, -1, 0]} />
        
        <FloatingIcon position={[3, -2, 0]} color="#06d6a0" />
        <FloatingIcon position={[-3, 2, 0]} color="#f72585" />
        <FloatingIcon position={[1, 3, 0]} color="#4cc9f0" />
        
        <AnimatedText />
      </Canvas>
    </div>
  );
};

export const Interactive3DCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-64 overflow-hidden rounded-xl">
      <div className="absolute inset-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[2, 2, 2]} intensity={0.8} />
          
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <mesh>
              <torusKnotGeometry args={[0.6, 0.2, 128, 16]} />
              <MeshWobbleMaterial color="#6366f1" factor={0.4} speed={1} />
            </mesh>
          </Float>
        </Canvas>
      </div>
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
};