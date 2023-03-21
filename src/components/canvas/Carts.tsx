import { Suspense, useEffect,  useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

const Carts = (props:any) => {
  const cart = useGLTF(props.cart) as any;
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor='black' />
      <pointLight intensity={1} />
      <primitive
        object={cart.scene}
        scale={3}
        position={[0, -1.5, 0.1]}
        rotation={[-0.05, 0, 0]}
      />
    </mesh>
  );
}

const CartsCanvas = ( {cart}:any ) => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [4, 0, 0], fov: 60 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* <Suspense fallback={<CanvasLoader />}> */}
      <Suspense>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={3}
          enablePan={false}
        />
        <Carts cart={cart}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CartsCanvas;
