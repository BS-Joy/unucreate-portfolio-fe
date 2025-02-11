"use client";

import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

export default function Avatar() {
    const { scene } = useGLTF("/models/avatar.glb");

    return (
        <Canvas camera={{ position: [0, 1, 3], fov: 50, near: 0.1, far: 100 }} className="w-full h-full">
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} intensity={1} />
                <primitive object={scene} scale={0.8} position={[0, -1, 0]} />
                <OrbitControls />
            </Suspense>
        </Canvas>
    );
}
