import React, { useEffect } from 'react';
import { PointerLockControls as PointerLockControlsImpl } from 'three/examples/jsm/controls/PointerLockControls';
import { useThree, extend } from 'react-three-fiber';
import { useRef } from 'react';

extend({ PointerLockControlsImpl });

export const ViewControls = (props) => {
  const isLocked = useRef(false);
  const { camera, gl } = useThree();
  const controls = useRef();

  useEffect(() => {
    document.addEventListener('click', () => {
      controls.current.lock();
    });
  }, []);

  return (
    <pointerLockControlsImpl
      ref={controls}
      args={[camera, gl.domElement]}
      onUpdate={() => {
        if (controls.current) {
          controls.current.addEventListener('lock', () => {
            console.log('lock');
            isLocked.current = true
          });
          controls.current.addEventListener('unlock', () => {
            console.log('unlock')
            isLocked.current = false;
          });
        }
      }}
      {...props}
    />
  );
};