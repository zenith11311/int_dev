import React, { useRef, useEffect, useState } from 'react'

import { CanvasContext } from '../Hooks/useCanvas'
import useResponsiveSize from '../Hooks/useResponsiveSize'
import Wave from './Wave'

const Canvas = () => {
    const canvasRef = useRef(null)
    const { width, height } = useResponsiveSize()
    const [context, setContext] = useState()

    useEffect(() => {
        const ctx = canvasRef?.current?.getContext('2d');
        if (ctx) setContext(ctx)
    }, [])

    return (
        <CanvasContext.Provider value={{ context: context }}>
            <canvas
            ref={canvasRef}
            width={width}
            height={height}/>
            <Wave />
        </CanvasContext.Provider>
    )
}

export default Canvas
