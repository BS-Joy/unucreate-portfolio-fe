"use client";

import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { div } from "motion/react-client";

export default function Avatar() {
    const { scene } = useGLTF("/models/avatar.glb");

    return (
        <div>
            <Canvas camera={{ position: [0, 1, 3], fov: 50 }} className="w-full h-full">
                {/* <Suspense fallback={null}>
                
            </Suspense> */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} intensity={1} />
                <primitive object={scene} scale={1.5} />
                <OrbitControls />
            </Canvas>
        </div>
    );
}
