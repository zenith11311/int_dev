import React from "react";
import Canvas from "./Components/Canvas";
import Menu from "../Components/Menu";

import "./index.css";

const Snowing = () => {
    return (
        <div className="snowing">
            <Canvas />
            <Menu page="Snowing" light={true}/>
        </div>
    )
};

export default Snowing;
