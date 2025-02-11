import * as THREE from "three";
declare module "@react-three/fiber" {
    interface ThreeElements {
        primitive: { object: THREE.Object3D };
    }
}
