import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import {ViewControls} from '../controls/ViewControls'

import { Vector3 } from "three";
import { useKeyboardControls } from "../../hooks/useKeyboardControls";

const SPEED = 6;

export const User = (props) => {
    const { camera } = useThree();
    const { moveForward, moveBackward, moveLeft, moveRight, jump, run } =
        useKeyboardControls();
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: "Dynamic",
        
        ...props,
    }));

    const velocity = useRef([0, 0, 0]);
    useEffect(() => {
        api.velocity.subscribe((v) => (velocity.current = v));
        api.position.subscribe((p) => {
        camera.position.copy({ x: p[0], y: p[1]+5, z: p[2] });
        });
    }, [api.velocity, api.position, camera.position]);

    useFrame(() => {
        const direction = new Vector3();
        
        const frontVector = new Vector3(
        0,
        0,
        (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
        );
        const sideVector = new Vector3(
        (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
        0,
        0
        );

        direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(run?18:SPEED)
        .applyEuler(camera.rotation);

        api.velocity.set(direction.x, velocity.current[1], direction.z);

        if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) {
        api.velocity.set(velocity.current[0], 8, velocity.current[2]);
        }
        
    });
    return (
    <>
        <ViewControls />
        <mesh ref={ref}>
            <sphereBufferGeometry args={[1, 16, 16]} />
        </mesh>
    </>
    );
};
