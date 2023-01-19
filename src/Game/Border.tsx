import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import Ball from "./Ball";

const Border = () =>{
    return(
        <div className="border-4 border-black h-3/4 w-1/2 mx-auto">
            <Canvas>
                <Physics>
                    <Ball />
                </Physics>
            </Canvas>
        </div>
    )
}

export default Border;