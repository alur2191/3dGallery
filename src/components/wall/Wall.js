import React from 'react'
import * as THREE from 'three'
import {useBox} from "@react-three/cannon"
import { useLoader } from '@react-three/fiber'
import wall from '../../img/wall.jpg'
import img from '../../img/img.jpeg'


const Wall =()=>{
    const texture = useLoader(THREE.TextureLoader, wall)
    const imgTexture = useLoader(THREE.TextureLoader, img)
    const [refFront] = useBox(() => ({mass:0, position:[20,5,0]}))    
    const [refBack] = useBox(() => ({mass:0, position:[-20,5,0]}))    
    const [refLeft] = useBox(() => ({mass:0, position:[0,5,20]}))    
    const [refRight] = useBox(() => ({mass:0, position:[0,5,-20]}))    
    const [refPainting] = useBox(() => ({mass:0, position:[0,5,-19]}))
    return(
        <>
            <mesh
                ref={refFront} >
                <boxBufferGeometry attach="geometry" args={[1,10,40]}/>
                <meshLambertMaterial attach="material" map={texture} />
            </mesh>
            <mesh
                ref={refBack} >
                <boxBufferGeometry attach="geometry" args={[1,10,40]}/>
                <meshLambertMaterial attach="material" map={texture}  />
            </mesh>
            <mesh
                ref={refLeft} >
                <boxBufferGeometry attach="geometry" args={[41,10,1]}/>
                <meshLambertMaterial attach="material" map={texture}  />
            </mesh>
            <mesh
                ref={refRight} >
                <boxBufferGeometry attach="geometry" args={[41,10,1]}/>
                <meshLambertMaterial attach="material" map={texture}  />
            </mesh>
            <mesh 
                ref={refPainting}>
                
                <planeBufferGeometry attach="geometry" args={[5, 4]} />
                <meshBasicMaterial attach="material" map={imgTexture} toneMapped={false} />
            </mesh>
        </>
    )
}

export default Wall