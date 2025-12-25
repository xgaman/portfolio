import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, color, speed = 1, scale = 1 }: { 
  position: [number, number, number]; 
  color: string; 
  speed?: number;
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function TorusShape({ position, color, speed = 1 }: { 
  position: [number, number, number]; 
  color: string; 
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15 * speed;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.4}
          transparent
          opacity={0.6}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 500;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        color="#a855f7" 
        transparent 
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} color="#a855f7" intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#0ea5e9" intensity={0.5} />
      <pointLight position={[0, 10, -10]} color="#06b6d4" intensity={0.5} />
      
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1}
      />
      
      <ParticleField />
      
      {/* Floating shapes */}
      <FloatingShape position={[-4, 2, -5]} color="#a855f7" speed={0.8} scale={0.8} />
      <FloatingShape position={[4, -2, -8]} color="#0ea5e9" speed={1.2} scale={1.2} />
      <FloatingShape position={[-6, -3, -10]} color="#06b6d4" speed={0.6} scale={0.6} />
      <FloatingShape position={[6, 3, -6]} color="#ec4899" speed={1} scale={0.9} />
      
      <TorusShape position={[0, 0, -15]} color="#a855f7" speed={0.5} />
      <TorusShape position={[-8, 4, -12]} color="#06b6d4" speed={0.7} />
      <TorusShape position={[8, -4, -12]} color="#ec4899" speed={0.4} />
    </>
  );
}

export const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
    </div>
  );
};
