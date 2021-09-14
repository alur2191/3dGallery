import {useState, useEffect} from 'react'
import * as THREE from 'three'
import {useBox} from "@react-three/cannon"
import { useLoader } from '@react-three/fiber'
import wall from '../../img/wall2.jpg'
import img from '../../img/img.jpeg'
import floor from '../../img/floor3.jpg'
import Scene from './Scene'


const SecondBuilding =({cursorRef})=>{

    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        cursorRef.current.style.border = hovered ? 'solid 1px white' : 'none'
    }, [hovered,cursorRef])
    
    const texture = useLoader(THREE.TextureLoader, wall)

    const imgTexture = useLoader(THREE.TextureLoader, img)
    const floorTexture = useLoader(THREE.TextureLoader, floor)

    const [refCeiling] = useBox(() => ({type: "Static", args:[198,1,40], position:[80,17,-80]}))
    const [refCeiling2] = useBox(() => ({type: "Static", args:[198,1,40], position:[80,32.9,-80]}))

    const [refBack] = useBox(() => ({type: "Static",args:[200,48,1], position:[80,23,-100]})) 
    const [refSide] = useBox(() => ({type: "Static",args:[1,48,41], position:[-20,23,-80]}))    

    const [refFrontLong] = useBox(() => ({type: "Static",args:[160,48,1], position:[100,23,-60]})) 
    const [refFrontShort] = useBox(() => ({type: "Static",args:[25,48,1], position:[-8,23,-60]})) 


    return(
        <>  
            <Scene position={[6,14.44,25 ]} scale={[6,7,7]} rotation={[0,-7.87,0]}/>

            <mesh
                castShadow
                ref={refCeiling} >
                <boxBufferGeometry attach="geometry" args={[198,1,40]}/>
                <meshLambertMaterial attach="material" map={floorTexture} />
            </mesh>
            <mesh
                castShadow
                ref={refCeiling2} >
                <boxBufferGeometry attach="geometry" args={[198,1,40]}/>
                <meshLambertMaterial attach="material" map={floorTexture} />
            </mesh>
            <mesh
                castShadow
                ref={refBack} >
                <boxBufferGeometry attach="geometry" args={[200,48,1]}/>
                <meshLambertMaterial attach="material" map={texture}  />
            </mesh>
            <mesh
                castShadow
                ref={refFrontLong} >
                <boxBufferGeometry attach="geometry" args={[160,48,1]}/>
                <meshLambertMaterial attach="material" map={texture}  />
            </mesh>
            <mesh
                castShadow
                ref={refFrontShort} >
                <boxBufferGeometry attach="geometry" args={[25,48,1]}/>
                <meshLambertMaterial attach="material" map={texture}  />
            </mesh>
            <mesh
                castShadow
                ref={refSide} >
                <boxBufferGeometry attach="geometry" args={[1,48,41]}/>
                <meshLambertMaterial attach="material" map={texture}  />
            </mesh>
        </>
    )
}

export default SecondBuilding