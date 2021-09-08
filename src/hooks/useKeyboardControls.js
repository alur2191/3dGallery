import { useState, useEffect } from "react";

function actionByKey(key) {
    const keys = {
        KeyW: "moveForward",
        KeyS: "moveBackward",
        KeyA: "moveLeft",
        KeyD: "moveRight",
        Space: "jump",
        ShiftLeft: "run"
    };
    return keys[key];
    }

    export const useKeyboardControls = () => {
    const [movement, setMovement] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        run: false
    });

    useEffect(() => {
        const handleKeyDown = (e) => {
        // Movement key
        if (actionByKey(e.code)) {
            setMovement((state) => ({
            ...state,
            [actionByKey(e.code)]: true,
            }));
        }
        console.log(e.code);
        };
        const handleKeyUp = (e) => {
        if (actionByKey(e.code)) {
            setMovement((state) => ({
            ...state,
            [actionByKey(e.code)]: false,
            }));
        }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);

        return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    return movement;
};
