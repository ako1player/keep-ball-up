import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const Ball = () =>{
const orbitControlsRef = useRef(null);

useEffect(() =>{
    if(!!orbitControlsRef.current){
        console.log(orbitControlsRef.current);
    }
}, [orbitControlsRef.current]);

return(
    <>
    <PerspectiveCamera makeDefault position={[0,-20,5]} />
    <OrbitControls position={[5,5,5]}/>
    <mesh position={[0,-8,1]}>
        <sphereBufferGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color="#a0b8a6"/>
    </mesh>
    <mesh position={[0,-8,0]}>
        <planeBufferGeometry args={[8, 8]} />
        <meshStandardMaterial color="#1ea3d8" />
    </mesh>
    <ambientLight args={["#ffffff", 0.25]} />
    </>
)
}

export default Ball;