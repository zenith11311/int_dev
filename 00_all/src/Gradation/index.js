import React from "react";
import Canvas from "./Components/Canvas";
import Menu from "../Components/Menu";

const Gradation = (props) => {
    return (
        <div className="gradation">
            <Canvas />
            <Menu page="Gradation"/>
        </div>
    );
}

export default Gradation
