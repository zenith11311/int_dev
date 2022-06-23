import React, { useRef } from "react";
import {useFrame} from "@react-three/fiber";
//import {OrbitControls} from "@react-three/drei";

const Mesh = () => {
    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.z += 0.1 ));
    return (
        <mesh ref={mesh} scale={3}>
            <cylinderBufferGeometry color="red" args={[1, 1, 0.3, 50]} />
            <meshLambertMaterial attach="material" />
        </mesh>
    )
};

export default Mesh;
