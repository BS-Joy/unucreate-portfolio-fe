import { Object3DNode, MeshStandardMaterial } from "three";
import { JSX } from "react";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            ambientLight: Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>;
            directionalLight: Object3DNode<THREE.DirectionalLight, typeof THREE.DirectionalLight>;
            primitive: Object3DNode<THREE.Object3D, typeof THREE.Object3D>;
        }
    }
}