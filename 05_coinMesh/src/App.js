import React from "react";
import Meshes from "./Components/Meshes"
import {Canvas,} from "@react-three/fiber";

import "./App.css";

const App = () => {
    return (
        <div className="App">
            <div className="App-header">
                <Canvas>
                    <Meshes/>
                </Canvas>
            </div>
        </div>
    );
}

export default App;
