import {useState, useEffect} from 'react'
import * as THREE from 'three'
import {useBox} from "@react-three/cannon"
import { useLoader } from '@react-three/fiber'
import wall from '../../img/wall2.jpg'
import img from '../../img/img.jpeg'
import floor from '../../img/floor3.jpg'
import Scene from './Scene'


const Building =({cursorRef})=>{

    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        cursorRef.current.style.border = hovered ? 'solid 1px white' : 'none'
    }, [hovered,cursorRef])
    
    const texture = useLoader(THREE.TextureLoader, wall)
    if (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
        texture.anisotropy = 6;
    }
    const imgTexture = useLoader(THREE.TextureLoader, img)
    const floorTexture = useLoader(THREE.TextureLoader, floor)
    if (floorTexture) {
        floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
        floorTexture.repeat.set(5, 5);
        floorTexture.anisotropy = 6;
    }

    // onCollide: (e) => collide(e)
    const [refUp] = useBox(() => ({type: "Static", args:[30,1,9], rotation:[0,0,2.7], position:[3,-0.3,15]}))
    const [refUp2] = useBox(() => ({type: "Static", args:[25,1,9], rotation:[0,3.2,2.68], position:[0,11,25]}))
    const [refUp3] = useBox(() => ({type: "Static", args:[13,1,9], rotation:[0,0,2.7], position:[-3,19,15]}))
    const [refUp4] = useBox(() => ({type: "Static", args:[25,1,9], rotation:[0,3.2,2.68], position:[0,27,25]}))

    const [refCeiling] = useBox(() => ({type: "Static", args:[40,1,40], position:[0,17,0]}))
    const [refCeiling2] = useBox(() => ({type: "Static", args:[40,1,40], position:[0,32.9,0]}))

    const [refBridge] = useBox(() => ({type: "Static", args:[16,1,40], position:[12,17,-40]}))
    const [refBridge2] = useBox(() => ({type: "Static", args:[16,1,40], position:[12,32.9,-40]}))


    const [refFloor] = useBox(() => ({type: "Static", args:[10,1,20], position:[-15,6,20]}))
    const [refFloor2] = useBox(() => ({type: "Static", args:[10,1,10], position:[15.5,17,25]}))
    const [refFloor3] = useBox(() => ({type: "Static", args:[10,1,20], position:[-15,22.5,20]}))
    const [refFloor4] = useBox(() => ({type: "Static", args:[9,1,10], position:[15.5,32.9,25]}))

    const [refFrontOne] = useBox(() => ({type: "Static", args:[1,19,25], position:[20,8,18]}))
    const [refFrontTwo] = useBox(() => ({type: "Static", args:[1,19,17], position:[20,8,-12]}))
    const [refFrontTop] = useBox(() => ({type: "Static", args:[1,31,50], position:[20,31.5,5]}))

    const [refBack] = useBox(() => ({type: "Static",args:[1,48,50], position:[-20,23,5]}))    
    const [refLeft] = useBox(() => ({type: "Static",args:[31,17,1], position:[4,8,20]}))    
    const [refLeft2] = useBox(() => ({type: "Static",args:[41,48,1], position:[0,23,30]})) 
    const [refLeft3] = useBox(() => ({type: "Static",args:[22,35,1], position:[1,29,20]}))    
    const [refRight] = useBox(() => ({type: "Static",args:[41,18,1], position:[0,8.4,-20]}))
    const [refRightTop] = useBox(() => ({type: "Static",args:[25,30,1], position:[-8,32,-20]}))        
    const [refStairsWall] = useBox(() => ({type: "Static",args:[22,34,1], position:[-9,16,10]}))    
    const [refPainting] = useBox(() => ({ mass:0, position:[0,6,-18]}))

    return(
        <>  
            <Scene position={[6,14.44,25 ]} scale={[6,7,7]} rotation={[0,-7.87,0]}/>
            <Scene position={[-5,8.76,25 ]} scale={[6,7,7]} rotation={[0,-7.85,0.01]}/>
            <Scene position={[-5,3,15 ]} scale={[6,8,7]} rotation={[0,7.85,0]}/>
            <Scene position={[-5,20,15 ]} scale={[6,7,7]} rotation={[0,7.85,-0.02]}/>
            <Scene position={[6,30.48,25]} scale={[6,6.5,7]} rotation={[0,-7.87,0]}/>
            <Scene position={[-5,25,25]} scale={[6,7,7]} rotation={[0,-7.87,0]}/>
            <mesh
                castShadow
                ref={refStairsWall} >
                <boxBufferGeometry attach="geometry" args={[22,34,1]}/>
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
                ref={refBridge} >
                <boxBufferGeometry attach="geometry" args={[16,1,40]}/>
                <meshLambertMaterial attach="material" map={floorTexture} />
            </mesh>
            <mesh
                castShadow
                ref={refBridge2} >
                <boxBufferGeometry attach="geometry" args={[16,1,40]}/>
                <meshLambertMaterial attach="material" map={floorTexture} />
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
                <boxBufferGeometry attach="geometry" args={[9,1,10]}/>
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
                ref={refFloor4} >
                <boxBufferGeometry attach="geometry" args={[9,1,10]}/>
                <meshLambertMaterial attach="material" map={floorTexture} />
            </mesh>
            <mesh
                castShadow
                ref={refCeiling} >
                <boxBufferGeometry attach="geometry" args={[40,1,40]}/>
                <meshLambertMaterial attach="material" map={floorTexture} />
            </mesh>
            <mesh
                castShadow
                ref={refCeiling2} >
                <boxBufferGeometry attach="geometry" args={[40,1,40]}/>
                <meshLambertMaterial attach="material" map={floorTexture} />
            </mesh>
            <mesh
                castShadow
                ref={refFrontOne} >
                <boxBufferGeometry attach="geometry" args={[1,19,25]}/>
                <meshLambertMaterial attach="material" map={texture} />
            </mesh>
            <mesh
                castShadow
                ref={refFrontTwo} >
                <boxBufferGeometry attach="geometry" args={[1,19,17]}/>
                <meshLambertMaterial attach="material" map={texture} />
            </mesh>
            <mesh
                castShadow
                ref={refFrontTop} >
                <boxBufferGeometry attach="geometry" args={[1,31,50]}/>
                <meshLambertMaterial attach="material" map={texture} />
            </mesh>
            <mesh
                castShadow
                ref={refBack} >
                <boxBufferGeometry attach="geometry" args={[1,48,50]}/>
                <meshLambertMaterial attach="material" map={texture}  />
            </mesh>
            <mesh
                castShadow
                ref={refLeft} >
                <boxBufferGeometry attach="geometry" args={[31,17,1]}/>
                <meshLambertMaterial attach="material" map={texture}  />
            </mesh>
            <mesh
                castShadow
                ref={refLeft2} >
                <boxBufferGeometry attach="geometry" args={[41,48,1]}/>
                <meshLambertMaterial attach="material" map={texture}  />
            </mesh>
            <mesh
                castShadow
                ref={refLeft3} >
                <boxBufferGeometry attach="geometry" args={[22,35,1]}/>
                <meshLambertMaterial attach="material" map={texture}  />
            </mesh>
            <mesh
                castShadow
                ref={refRight} >
                <boxBufferGeometry attach="geometry" args={[41,18,1]}/>
                <meshLambertMaterial attach="material" map={texture}  />
            </mesh>
            <mesh
                castShadow
                ref={refRightTop} >
                <boxBufferGeometry attach="geometry" args={[25,30,1]}/>
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

export default Building