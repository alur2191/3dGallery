import {useState, useEffect} from 'react'
import * as THREE from 'three'
import {useBox} from "@react-three/cannon"
import { useLoader } from '@react-three/fiber'
import wall from '../../img/wall.jpg'
import img from '../../img/img.jpeg'



const Wall =({cursorRef})=>{

    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        cursorRef.current.style.border = hovered ? 'solid 1px white' : 'none'
    }, [hovered,cursorRef])
    
    const collide = (e) => {
        console.log(e);
    }
    const texture = useLoader(THREE.TextureLoader, wall)
    const imgTexture = useLoader(THREE.TextureLoader, img)
    const [refFrontOne] = useBox(() => ({type: "Static", args:[1,10,17], position:[20,0,12], onCollide: (e) => collide(e)}))
    const [refFrontTwo] = useBox(() => ({type: "Static", args:[1,10,17], position:[20,0,-12], onCollide: (e) => collide(e)}))
    const [refBack] = useBox(() => ({type: "Static",args:[1,10,40], position:[-20,0,0], onCollide: (e) => collide(e)}))    
    const [refLeft] = useBox(() => ({type: "Static",args:[41,10,1], position:[0,0,20], onCollide: (e) => collide(e)}))    
    const [refRight] = useBox(() => ({type: "Static",args:[41,10,1], position:[0,0,-20], onCollide: (e) => collide(e)}))    
    const [refPainting] = useBox(() => ({ mass:0, position:[0,0,-18]}))
    return(
        <>
            <mesh
                castShadow
                ref={refFrontOne} >
                <boxBufferGeometry attach="geometry" args={[1,10,17]}/>
                <meshLambertMaterial attach="material" map={texture} />
            </mesh>
            <mesh
                castShadow
                ref={refFrontTwo} >
                <boxBufferGeometry attach="geometry" args={[1,10,17]}/>
                <meshLambertMaterial attach="material" map={texture} />
            </mesh>
            <mesh
                castShadow
                ref={refBack} >
                <boxBufferGeometry attach="geometry" args={[1,10,40]}/>
                <meshLambertMaterial attach="material" map={texture}  />
            </mesh>
            <mesh
                castShadow
                ref={refLeft} >
                <boxBufferGeometry attach="geometry" args={[41,10,1]}/>
                <meshLambertMaterial attach="material" map={texture}  />
            </mesh>
            <mesh
                castShadow
                ref={refRight} >
                <boxBufferGeometry attach="geometry" args={[41,10,2]}/>
                <meshLambertMaterial attach="material" map={texture}  />
            </mesh>
            <mesh 
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                ref={refPainting}>
                <planeBufferGeometry attach="geometry" args={[5, 4]} />
                <meshBasicMaterial attach="material" map={imgTexture} toneMapped={false} />
            </mesh>
        </>
    )
}

export default Wall