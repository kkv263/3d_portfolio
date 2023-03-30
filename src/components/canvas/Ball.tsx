import { Suspense, useState } from 'react'
import { useSpring, animated, config } from '@react-spring/three'
import { Canvas } from "@react-three/fiber"
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei"
import CanvasLoader from '../Loader';

import javascript from '../../assets/skills/javascript.png'
import python from '../../assets/skills/python.png'
import html from '../../assets/skills/html.png'
import css from '../../assets/skills/css.png'
import typescript from '../../assets/skills/typescript.png'
import reactjs from '../../assets/skills/reactjs.png'
import svelte from '../../assets/skills/svelte.png'
import optimizely from '../../assets/skills/optimizely.svg'
import figma from '../../assets/skills/figma.png'
import photoshop from '../../assets/skills/photoshop.png'
import blender from '../../assets/skills/blender.png'
import kermit from '../../assets/skills/kermit.png'

const Ball = (props:any) => {
  const [decal] = useTexture([props.imgUrl])
  const { scale } = useSpring({
    scale: props.activeIndex === props.index ? (props.device === 'desktop' ? 3 : 2.5) : (props.device === 'desktop' ? 2.5 : 2),
    config: config.wobbly,
  })

  const handleBallClick = (index: number, setActiveIndex:any) => {
    setActiveIndex(index);
  }

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={3}>
      <ambientLight intensity={0.05}></ambientLight>
      <directionalLight intensity={0.15} position={[0, 0, 0.01]}/>
      <animated.mesh castShadow receiveShadow scale={scale} onClick={(e) => handleBallClick(props.index, props.setActiveIndex)} position={props.position} >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial opacity={props.activeIndex === props.index ? 1 : 0.8} color={props.activeIndex === props.index ? '#111' : '#fff'} 
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal opacity={props.activeIndex === props.index ? 1 : 0.6} position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
          flatShading
        />
      </animated.mesh>
    </Float>
  )
}

const BallCanvas = ({ setActiveIndex, activeIndex, device }: any) => {
  const skills = [
    {
      img: javascript,
      pos: []
    },
    {
      img: python,
      pos: []
    },
    {
      img: html,
      pos: []
    },
    {
      img: css,
      pos: []
    },
    {
      img: typescript,
      pos: []
    },
    {
      img: reactjs,
      pos: []
    },
    {
      img: svelte,
      pos: []
    },
    {
      img: optimizely,
      pos: []
    },
    {
      img: photoshop,
      pos: []
    },
    {
      img: figma,
      pos: []
    },
    {
      img: blender,
      pos: []
    },
    {
      img: kermit,
      pos: []
    },
  ];
  
  const rows = device === 'desktop' ? 3 : 4;
  const cols = device === 'desktop' ? 4 : 3;
  const xFactor = device === 'desktop' ? 8 : 6;
  const yFactor = device === 'desktop' ? 6 : 5;
  const xOffset =  device === 'desktop' ? -12 : -6;
  const yOffset =  device === 'desktop' ? 6 : 8;
  let skillIndex = 0;
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      (skills[skillIndex].pos as number[]) = [
        (xOffset) + i * xFactor,
        (yOffset) + (-j * yFactor),
        0
      ];
      skillIndex++;
    }
  }

  return (
    <Canvas
      frameloop='always'
      dpr={[1, 2]}
      orthographic camera={{ zoom: 20, position: [0, 0, 20] }}
    >
      <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
          enableZoom={false}
          enablePan={false}
        />
          {skills.map((skill,index) => (
            <Ball device={device} key={index} imgUrl={skill.img} index={index} setActiveIndex={setActiveIndex} activeIndex={activeIndex} position={skill.pos}/>
          ))}
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas