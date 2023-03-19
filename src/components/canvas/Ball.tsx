import { Suspense, useState } from 'react'
import { useSpring, animated, config } from '@react-spring/three'
import { Canvas } from "@react-three/fiber"
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei"
import CanvasLoader from '../Loader';

const Ball = (props:any) => {
  const [decal] = useTexture([props.imgUrl])
  const { scale } = useSpring({
    scale: props.activeIndex === props.index ? 3 : 2.5,
    config: config.wobbly,
  })

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}></ambientLight>
      <directionalLight intensity={1} position={[0, 0, 0.05]}></directionalLight>
      <animated.mesh castShadow receiveShadow scale={scale} >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color={props.activeIndex === props.index ? '#111' : '#fff'} 
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
          flatShading
        />
      </animated.mesh>
    </Float>
  )
}

const BallCanvas = ({ icon, index, activeIndex }: any) => {
  return (
    <Canvas
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} index={index} activeIndex={activeIndex}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas