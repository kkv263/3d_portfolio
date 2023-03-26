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
      <ambientLight intensity={.75}></ambientLight>
      <animated.mesh castShadow receiveShadow scale={scale} >
        <icosahedronBufferGeometry args={[1, 1]} />
        <meshBasicMaterial color={props.activeIndex === props.index ? '#111' : '#fff'} 
          polygonOffset
          polygonOffsetFactor={-5}
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
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}/>
        <Ball imgUrl={icon} index={index} activeIndex={activeIndex}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas