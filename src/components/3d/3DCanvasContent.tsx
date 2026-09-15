import React from 'react';
import { Canvas } from '@react-three/fiber';
import { AcademicScene } from './AcademicScene';

interface Props {
  isMobile: boolean;
}

export const ThreeCanvasContent: React.FC<Props> = ({ isMobile }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      gl={{ antialias: !isMobile, powerPreference: 'high-performance' }}
    >
      <AcademicScene isMobile={isMobile} />
    </Canvas>
  );
};

export default ThreeCanvasContent;
