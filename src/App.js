import {useRef} from 'react'
import {Canvas,useLoader} from '@react-three/fiber'
import './Main.css';
import {  Stars } from '@react-three/drei'
import {Physics,usePlane} from "@react-three/cannon"
import Building from './components/building/Building'
import SecondBuilding from './components/building/SecondBuilding'

import * as THREE from 'three'
import img from './img/floor3.jpg'
import { User } from './components/user/User';



function Plane() {
  
  const [ref] = usePlane(()=>({
    rotation: [-Math.PI / 2,0,0],
    position:[0,0,0]
  }));
  const texture = useLoader(THREE.TextureLoader, img)
  if (texture) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(15, 15);
    texture.anisotropy = 16;
  }
  return(
    <mesh position={[0,0,0]} rotation={[-Math.PI/ 2,0,0]}>
      <planeBufferGeometry attach="geometry" args={[500,500]}/>
      <meshLambertMaterial attach="material" map={texture} />
    </mesh>
    
  )
}

function App() {
  const cursorRef = useRef()
  return (
    <div>
      <div ref={cursorRef} id="cursor"><span></span></div>
        <Canvas style={{height:'100vh', background:'#161616'}}  raycaster={{
        computeOffsets: (_, { size: { width, height } }) => {
          // isLocked.current
          if (true) {
            return ({
              offsetX: width / 2,
              offsetY: height / 2
            })
          } else {
            return null;
          }
        }
      }}>
      {/* <OrbitControls  target={[0,3,0]} position={[0,5,0]}/> */}
      <Stars />
      <ambientLight intensity={0.5}/>
      <spotLight
        position={[10,15,10]}
        angle={0.3}
      />
      <Physics gravity={[0, -30, 0]} >
        <User position={[15, 2, 10]} />
        <Building cursorRef={cursorRef}/>
        <SecondBuilding cursorRef={cursorRef}/>
        <Plane />
      </Physics>
    </Canvas>
    
    </div>
  );
}

export default App;
