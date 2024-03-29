import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Carts = (props:any) => {
  const cart = useGLTF(props.cart) as any;
  return (
    <mesh>
      <hemisphereLight intensity={1.35} groundColor='black' />
      <primitive
        object={cart.scene}
        scale={3}
        position={[0, -1.5, 0.1]}
        rotation={[-0.02, 20.45, 0]}
      />
    </mesh>
  );
}

const CartsCanvas = ( {cart, activeIndex}:{cart:any, activeIndex:boolean} ) => {
  return (
    <Canvas
      frameloop='demand'
      camera={{ position: [4, 0, 0], fov: 60 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={activeIndex}
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
