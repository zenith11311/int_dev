import React from "react";
import Canvas from "./Components/Canvas";
import Menu from "../Components/Menu";
import "./index.css";

const Wave = () => {
    return (
        <div className="wave">
            <Canvas />
            <Menu page="Wave"/>
        </div>
    );
}

export default Wave;
