import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface SceneProps {
  isMobile?: boolean;
}

// 1. MIDGROUND LAYER: Low-poly 3D Book Element (Elegantly Sized & Positioned)
function FloatingBook({
  position,
  rotation,
  coverColor = "#1D4ED8",
  spineColor = "#F59E0B",
  floatSpeed = 0.5,
  floatOffset = 0,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  coverColor?: string;
  spineColor?: string;
  floatSpeed?: number;
  floatOffset?: number;
}) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime * floatSpeed + floatOffset;
      meshRef.current.position.y = position[1] + Math.sin(t) * 0.07;
      meshRef.current.position.x = position[0] + Math.cos(t * 0.6) * 0.03;
      meshRef.current.rotation.y = rotation[1] + Math.sin(t * 0.5) * 0.08;
    }
  });

  return (
    <group ref={meshRef} position={position} rotation={rotation}>
      {/* Book Cover */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.78, 1.05, 0.15]} />
        <meshStandardMaterial color={coverColor} roughness={0.25} metalness={0.35} />
      </mesh>
      {/* Book Pages */}
      <mesh position={[0.02, 0, 0]}>
        <boxGeometry args={[0.73, 1.0, 0.12]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.5} />
      </mesh>
      {/* Spine Accent */}
      <mesh position={[-0.37, 0, 0]}>
        <boxGeometry args={[0.04, 1.06, 0.17]} />
        <meshStandardMaterial color={spineColor} roughness={0.15} metalness={0.85} />
      </mesh>
    </group>
  );
}

// 2. MIDGROUND LAYER: Low-poly 3D Pencil Element (Scaled up ~12% for crisp visibility)
function FloatingPencil({
  position,
  rotation,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
}) {
  const pencilRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (pencilRef.current) {
      const t = state.clock.elapsedTime;
      pencilRef.current.position.y = position[1] + Math.sin(t * 0.6 + 4.0) * 0.07;
      pencilRef.current.position.x = position[0] + Math.sin(t * 0.4) * 0.03;
      pencilRef.current.rotation.z = rotation[2] + Math.sin(t * 0.5) * 0.07;
    }
  });

  return (
    <group ref={pencilRef} position={position} rotation={rotation}>
      {/* Yellow Hexagonal Body */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.075, 0.075, 1.15, 6]} />
        <meshStandardMaterial color="#F59E0B" roughness={0.25} metalness={0.25} />
      </mesh>
      {/* Wood Tip */}
      <mesh position={[0, 0.65, 0]}>
        <coneGeometry args={[0.075, 0.18, 16]} />
        <meshStandardMaterial color="#FDE68A" roughness={0.5} />
      </mesh>
      {/* Graphite Lead */}
      <mesh position={[0, 0.73, 0]}>
        <coneGeometry args={[0.028, 0.07, 16]} />
        <meshStandardMaterial color="#0F172A" roughness={0.2} />
      </mesh>
      {/* Ferrule */}
      <mesh position={[0, -0.61, 0]}>
        <cylinderGeometry args={[0.078, 0.078, 0.09, 16]} />
        <meshStandardMaterial color="#CBD5E1" metalness={0.85} roughness={0.15} />
      </mesh>
      {/* Eraser */}
      <mesh position={[0, -0.7, 0]}>
        <cylinderGeometry args={[0.075, 0.075, 0.1, 16]} />
        <meshStandardMaterial color="#F43F5E" roughness={0.4} />
      </mesh>
    </group>
  );
}

// 3. MIDGROUND LAYER: Mathematical Symbols (π / ∞)
function MathSymbol({
  symbol,
  position,
  color = "#F59E0B",
  offset = 0,
}: {
  symbol: string;
  position: [number, number, number];
  color?: string;
  offset?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime * 0.5 + offset;
      groupRef.current.position.y = position[1] + Math.sin(t * 1.2) * 0.06;
      groupRef.current.rotation.y = Math.sin(t * 0.6) * 0.12;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Text
        fontSize={0.78}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {symbol}
      </Text>
    </group>
  );
}

// 4. FOREGROUND LAYER: CENTRAL EDUCATIONAL CORE (Primary Focal Point at 50% X, 50% Y)
function AcademicCore({ isMobile }: { isMobile?: boolean }) {
  const coreGroup = useRef<THREE.Group>(null);
  const outerMesh = useRef<THREE.Mesh>(null);
  const innerMesh = useRef<THREE.Mesh>(null);
  const ringMesh = useRef<THREE.Mesh>(null);
  const wireMesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreGroup.current) {
      // Subtle, clamped mouse parallax
      coreGroup.current.rotation.x = THREE.MathUtils.lerp(coreGroup.current.rotation.x, state.pointer.y * 0.08, 0.04);
      coreGroup.current.rotation.y = THREE.MathUtils.lerp(coreGroup.current.rotation.y, state.pointer.x * 0.1, 0.04);
      coreGroup.current.position.y = Math.sin(t * 0.4) * 0.05;
    }
    if (outerMesh.current) {
      outerMesh.current.rotation.x = t * 0.12;
      outerMesh.current.rotation.y = t * 0.15;
    }
    if (innerMesh.current) {
      innerMesh.current.rotation.x = -t * 0.18;
      innerMesh.current.rotation.y = -t * 0.12;
    }
    if (ringMesh.current) {
      ringMesh.current.rotation.z = t * 0.06;
    }
    if (wireMesh.current) {
      wireMesh.current.rotation.y = t * 0.05;
    }
  });

  return (
    <group ref={coreGroup} position={[0, 0, 0.4]}>
      {/* Main Primary Core Octahedron - Reduced scale by ~13% with flatShading for distinct facet readability */}
      <mesh ref={outerMesh}>
        <octahedronGeometry args={[isMobile ? 0.76 : 0.88, 0]} />
        <meshStandardMaterial
          color="#1E40AF"
          roughness={0.22}
          metalness={0.6}
          emissive="#1E3B8A"
          emissiveIntensity={0.35}
          flatShading={true}
        />
      </mesh>

      {/* Inner Glowing Gold Core */}
      <mesh ref={innerMesh}>
        <octahedronGeometry args={[isMobile ? 0.44 : 0.52, 0]} />
        <meshStandardMaterial
          color="#F59E0B"
          roughness={0.15}
          metalness={0.9}
          emissive="#D4A72C"
          emissiveIntensity={0.5}
          flatShading={true}
        />
      </mesh>

      {/* BACKGROUND DEPTH LAYER: Thin, Elegant Gold Orbital Ring */}
      <mesh ref={ringMesh} position={[0, 0, -0.6]} rotation={[Math.PI / 3.2, 0, 0]}>
        <torusGeometry args={[isMobile ? 1.15 : 1.4, 0.02, 16, 64]} />
        <meshStandardMaterial
          color="#F59E0B"
          roughness={0.12}
          metalness={0.9}
          emissive="#D4A72C"
          emissiveIntensity={0.25}
          transparent
          opacity={0.75}
        />
      </mesh>

      {/* BACKGROUND DEPTH LAYER: Subtle Wireframe Backdrop Geometry */}
      <mesh ref={wireMesh} position={[0, 0, -0.7]}>
        <octahedronGeometry args={[isMobile ? 1.05 : 1.25, 0]} />
        <meshStandardMaterial
          color="#B45309"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
}

// 5. BACKGROUND DEPTH LAYER: Subtle Atmosphere Particles
function BackgroundParticles({ count = 35 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8.0;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6.0;
      pos[i * 3 + 2] = -1.0 - Math.random() * 3.0;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        color="#F59E0B"
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  );
}

export const AcademicScene: React.FC<SceneProps> = ({ isMobile = false }) => {
  return (
    <>
      {/* Focused Directional Lighting */}
      <ambientLight intensity={1.35} />
      <directionalLight position={[5, 7, 8]} intensity={1.8} color="#FFFFFF" />
      <directionalLight position={[-5, -4, 2]} intensity={0.65} color="#93C5FD" />
      <pointLight position={[0, 0, 3.8]} intensity={1.7} color="#F59E0B" distance={10} />

      {/* 1. FOREGROUND FOCAL POINT: Central Core at 50% X, 50% Y */}
      <AcademicCore isMobile={isMobile} />

      {/* 2. MIDGROUND SUPPORTING ELEMENTS: Spatially Distributed with Clear Negative Space */}
      {/* Upper-Left Blue Book (25-30% X, 25-35% Y) */}
      <FloatingBook
        position={isMobile ? [-1.1, 1.0, 0.1] : [-1.75, 1.0, 0.1]}
        rotation={[0.25, 0.35, -0.15]}
        coverColor="#1D4ED8"
        spineColor="#F59E0B"
        floatSpeed={0.5}
        floatOffset={0}
      />

      {/* Lower-Right Gold Book (70-75% X, 65-75% Y) */}
      <FloatingBook
        position={isMobile ? [1.1, -0.9, 0.2] : [1.65, -1.0, 0.2]}
        rotation={[-0.25, -0.45, 0.2]}
        coverColor="#D4A72C"
        spineColor="#1D4ED8"
        floatSpeed={0.45}
        floatOffset={2.0}
      />

      {/* Lower-Left Pencil (25-30% X, 65-75% Y) */}
      <FloatingPencil
        position={isMobile ? [-1.0, -0.95, 0.2] : [-1.6, -1.05, 0.2]}
        rotation={[0.3, 0.2, -0.6]}
      />

      {/* Upper-Right Math Symbol π (75-80% X, 25-35% Y) */}
      {!isMobile && (
        <MathSymbol symbol="π" position={[1.7, 1.05, 0.1]} color="#F59E0B" offset={1.0} />
      )}

      {/* Mid-Right Math Symbol ∞ (78-82% X, 48-55% Y) */}
      {!isMobile && (
        <MathSymbol symbol="∞" position={[1.85, -0.05, 0.1]} color="#93C5FD" offset={3.0} />
      )}

      {/* 3. BACKGROUND DEPTH LAYER: Subtle Atmosphere Particles */}
      <BackgroundParticles count={isMobile ? 18 : 35} />
    </>
  );
};

export default AcademicScene;
