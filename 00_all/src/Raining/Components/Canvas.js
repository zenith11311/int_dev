import React, {useRef, useEffect, useState} from "react";

import { CanvasContext } from "../Hooks/useCanvas";
import useResponsiveSize from "../Hooks/useResponsiveSize";
import RainParticle from "./RainParticle";


const Canvas = () => {
    const canvasRef = useRef(null);
    const { width, height } = useResponsiveSize();
    const [ context, setContext ] = useState(null);

    useEffect(() => {
        const ctx = canvasRef?.current?.getContext("2d");
        if(ctx) setContext(ctx);
    }, []);

    return (
        <CanvasContext.Provider value={{ context: context }}>
            <canvas
                ref={canvasRef}
                width={width}
                height={height}/>
            <RainParticle />
        </CanvasContext.Provider>
    );

};

export default Canvas;
