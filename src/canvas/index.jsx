import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

import Tshirt from '../component/Tshirt';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "50%" }}
      className="" 
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        <Tshirt />
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
