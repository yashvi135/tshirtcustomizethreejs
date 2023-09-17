import React from 'react';
import { Canvas } from '@react-three/fiber';
import Backdrop from './Backdrop';
import { Center, Environment } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import state from '../store';
import Tshirt from '../component/Tshirt';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  const snap = useSnapshot(state);
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0],fov:25}}
      gl={{ preserveDrawingBuffer: true }}
      style={{height:"580px",width:"58%"}}
      className="w-full max-w-full h-full transition-all ease-in" 
    >
      <ambientLight intensity={0.5} />
      <Environment preset='city'  />
      <CameraRig>
        <Tshirt/>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
