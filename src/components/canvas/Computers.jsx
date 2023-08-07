import {Suspense,useEffect,useState} from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF } from '@react-three/drei';
import CanvasLoader from "../Loader"

const Computers = () => {
  const computer = useGLTF("./gaming_pc/scene.gltf");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const mediaQuery=window.matchMedia('(max-width:500px)');

      setIsMobile(mediaQuery.matches);



    const mediaQueryChangeHandler=(event)=>{
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change',mediaQueryChangeHandler);
    return ()=>{
    mediaQuery.removeEventListener('change',mediaQueryChangeHandler);
    }
  })

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />

      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2.6}
        castShadow
        color="#B59410"
        shadow-mapSize={1024}
      />
      <pointLight 
      intensity={1.5} 

      color="#B59410"
      position={[0,0,0.5]}

/>

      <pointLight 
      intensity={0.4} 
      color="#EE82EE"
      position={[-10,10,20]} />
      <primitive
        object={computer.scene}
        rotation={[0.0, 30, -0.14]}
        position={isMobile?  [0.2,-1.0,0] : [0.5, -1.2, -0.0]}
        scale={isMobile? 0.2:  0.28}
      />
    </mesh>
  )
}
const ComputersCanvas=()=>{
  return(

    <Canvas 
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [1, 3, 5], fov: 40}}
      gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />

      </Canvas>


      )
}

export default ComputersCanvas;