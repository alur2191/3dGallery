import {useState, useEffect} from 'react'
import * as THREE from 'three'
import {useBox} from "@react-three/cannon"
import { useLoader } from '@react-three/fiber'
import wall from '../../img/wall.jpg'
import img from '../../img/img.jpeg'
import floor from '../../img/floor.png'
import Scene from './Scene'


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
    const floorTexture = useLoader(THREE.TextureLoader, floor)

    const [refUp] = useBox(() => ({type: "Static", args:[30,1,9], rotation:[0,0,2.7], position:[3,-0.3,15], onCollide: (e) => collide(e)}))
    const [refUp2] = useBox(() => ({type: "Static", args:[25,1,9], rotation:[0,3.2,2.68], position:[0,11,25], onCollide: (e) => collide(e)}))
    const [refUp3] = useBox(() => ({type: "Static", args:[13,1,9], rotation:[0,0,2.7], position:[-3,19,15], onCollide: (e) => collide(e)}))
    const [refUp4] = useBox(() => ({type: "Static", args:[25,1,9], rotation:[0,3.2,2.68], position:[0,27,25], onCollide: (e) => collide(e)}))

    const [refCeiling] = useBox(() => ({type: "Static", args:[41,1,40], position:[0,17,0], onCollide: (e) => collide(e)}))
    const [refFloor] = useBox(() => ({type: "Static", args:[10,1,20], position:[-15,6,20], onCollide: (e) => collide(e)}))
    const [refFloor2] = useBox(() => ({type: "Static", args:[10,1,10], position:[17,17,25], onCollide: (e) => collide(e)}))
    const [refFloor3] = useBox(() => ({type: "Static", args:[10,1,20], position:[-15,22.5,20], onCollide: (e) => collide(e)}))

    const [refFrontOne] = useBox(() => ({type: "Static", args:[1,40,25], position:[20,10,18], onCollide: (e) => collide(e)}))
    const [refFrontTwo] = useBox(() => ({type: "Static", args:[1,25,17], position:[20,10,-12], onCollide: (e) => collide(e)}))
    const [refBack] = useBox(() => ({type: "Static",args:[1,25,40], position:[-20,10,0], onCollide: (e) => collide(e)}))    
    const [refLeft] = useBox(() => ({type: "Static",args:[31,22,1], position:[4,6,20], onCollide: (e) => collide(e)}))    
    const [refLeft2] = useBox(() => ({type: "Static",args:[41,25,1], position:[4,6,30], onCollide: (e) => collide(e)}))    
    const [refRight] = useBox(() => ({type: "Static",args:[41,25,1], position:[0,10,-20], onCollide: (e) => collide(e)}))    
    const [refStairsWall] = useBox(() => ({type: "Static",args:[22,25,1], position:[-9,10,10], onCollide: (e) => collide(e)}))    
    const [refPainting] = useBox(() => ({ mass:0, position:[0,6,-18]}))
    return(
        <>  
            <Scene position={[6,14.5,25 ]} scale={[7,7,5]} rotation={[0,-7.87,0]}/>
            <Scene position={[-5,8.8,25 ]} scale={[7,7,5]} rotation={[0,-7.9,0]}/>
            <Scene position={[-5,3,15 ]} scale={[7,7,7]} rotation={[0,7.9,0]}/>
            <Scene position={[-5,20,15 ]} scale={[7,7,7]} rotation={[0,7.9,0]}/>
            <Scene position={[6,30.5,25.4 ]} scale={[7,7,7]} rotation={[0,-7.87,0]}/>
            <Scene position={[-5,25,25.4 ]} scale={[7,7,7]} rotation={[0,-7.9,0]}/>
            <mesh
                castShadow
                ref={refStairsWall} >
                <boxBufferGeometry attach="geometry" args={[22,25,1]}/>
                <meshLambertMaterial attach="material"  map={texture} />
            </mesh>
            <mesh
                castShadow
                ref={refUp4} >
                <boxBufferGeometry attach="geometry" args={[25,1,9]} />
                <meshLambertMaterial attach="material"  transparent opacity={0}/>
            </mesh>
            <mesh
                castShadow
                ref={refUp3} >
                <boxBufferGeometry attach="geometry" args={[10,1,9]} />
                <meshLambertMaterial attach="material" transparent opacity={0} />
            </mesh>
            <mesh
                castShadow
                ref={refUp2} >
                <boxBufferGeometry attach="geometry" args={[25,1,9]} />
                <meshLambertMaterial attach="material" transparent opacity={0} />
            </mesh>
            <mesh
                castShadow
                ref={refUp} >
                <boxBufferGeometry attach="geometry" args={[30,1,9]} />
                <meshLambertMaterial attach="material" transparent opacity={0} />
            </mesh>
            <mesh
                castShadow
                ref={refFloor} >
                <boxBufferGeometry attach="geometry" args={[10,1,20]}/>
                <meshLambertMaterial attach="material" map={floorTexture} />
            </mesh>
            <mesh
                castShadow
                ref={refFloor2} >
                <boxBufferGeometry attach="geometry" args={[10,1,10]}/>
                <meshLambertMaterial attach="material" map={floorTexture} />
            </mesh>
            <mesh
                castShadow
                ref={refFloor3} >
                <boxBufferGeometry attach="geometry" args={[10,1,20]}/>
                <meshLambertMaterial attach="material" map={floorTexture} />
            </mesh>
            <mesh
                castShadow
                ref={refCeiling} >
                <boxBufferGeometry attach="geometry" args={[41,1,40]}/>
                <meshLambertMaterial attach="material" map={floorTexture} />
            </mesh>
            <mesh
                castShadow
                ref={refFrontOne} >
                <boxBufferGeometry attach="geometry" args={[1,25,25]}/>
                <meshLambertMaterial attach="material" map={texture} />
            </mesh>
            <mesh
                castShadow
                ref={refFrontTwo} >
                <boxBufferGeometry attach="geometry" args={[1,25,17]}/>
                <meshLambertMaterial attach="material" map={texture} />
            </mesh>
            <mesh
                castShadow
                ref={refBack} >
                <boxBufferGeometry attach="geometry" args={[1,25,40]}/>
                <meshLambertMaterial attach="material" map={texture}  />
            </mesh>
            <mesh
                castShadow
                ref={refLeft} >
                <boxBufferGeometry attach="geometry" args={[31,22,1]}/>
                <meshLambertMaterial attach="material" map={texture}  />
            </mesh>
            <mesh
                castShadow
                ref={refLeft2} >
                <boxBufferGeometry attach="geometry" args={[31,25,1]}/>
                <meshLambertMaterial attach="material" map={texture}  />
            </mesh>
            <mesh
                castShadow
                ref={refRight} >
                <boxBufferGeometry attach="geometry" args={[41,25,1]}/>
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