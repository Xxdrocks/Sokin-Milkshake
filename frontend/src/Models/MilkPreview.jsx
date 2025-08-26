// MilkPreview.jsx
import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Milk } from "./Milk";

const MilkPreview = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div data-aos-duration="1200" data-aos="fade-left" className="h-screen w-1/2 flex justify-center z-10">
                <Canvas camera={{ fov: 20, position: [30, -35, 30] }}>
                    <ambientLight intensity={3} />
                    <directionalLight position={[0, 30, 0]} intensity={2} />
                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                    <Milk scale={1} />
                </Canvas>
            </div>

            <div className="w-1/2 flex-col text-left flex justify-center items-start">
                <h1 data-aos="fade-right"  data-aos-duration="1000" className="text-3xl font-poppins font-semibold">
                    Pure Taste, Premium Quality
                </h1>
                <p data-aos="fade-right"  data-aos-duration="1200" className="w-1/2">
                    Setiap detail dihadirkan dengan ketelitian, dari bahan pilihan hingga proses terbaik,
                    untuk pengalaman rasa istimewa yang tak tergantikan.
                </p>
            </div>

        </div>

    );
};

export default MilkPreview;
