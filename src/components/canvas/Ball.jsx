import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Loader from '../Loader'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'

const Ball = ({icon}) => {
  const [decal]= useTexture([icon]);

  return (
    <Float speed={5.5} rotationIntensity={2} floatIntensity={4} >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0,0,0.5]} intensity={1}/>


      <mesh castShadow={true} receiveShadow scale={1.3}>
        <icosahedronGeometry args={[1,3]} />
        <meshStandardMaterial 
          color="#edf1e6"
          polygonOffset
          polygonOffsetFactor={1.5}
          flatShading/>
        <Decal 
          position={[0,0,1]}
          rotation={[2*Math.PI, 0,0]}
          flaShading
          scale={1.2}
          map={decal}/>
          </mesh>
    </Float>  
  )
}


const BallCanvas=({icon})=>(
  <div className="w-28 h-28 overflow-visible">
  <Canvas 
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 40}}
      gl={{ preserveDrawingBuffer: true }}

      >
        <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          

        />
          <Ball icon={icon} />
      </Suspense>

      <Preload all />

      </Canvas>
      </div>
  
)

export default BallCanvas