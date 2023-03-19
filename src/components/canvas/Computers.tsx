import { Suspense, useEffect,  useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

const Computers = () => {
  const computer = useGLTF('./among_us/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor='black' />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        position={[0, -30, -1.5]}
        rotation={[0, 1, -0.1]}
      />
    </mesh>
  );
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [100, 100, 0], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* <Suspense fallback={<CanvasLoader />}> */}
      <Suspense>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={8}
        />
        <Computers/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
