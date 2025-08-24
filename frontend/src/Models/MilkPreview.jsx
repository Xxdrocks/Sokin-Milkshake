import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Milk } from "./Milk";

const MilkPreview = () => {
    return (
        <div className="h-screen">
            <Canvas camera={{ fov: 45, position: [0,0,90] }}>
                <ambientLight intensity={0.5} />
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    enableRotate={true}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                />
                
                <Milk scale={1} />
            </Canvas>
        </div>
    );
};

export default MilkPreview;
