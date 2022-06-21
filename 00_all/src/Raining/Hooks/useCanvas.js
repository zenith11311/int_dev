import { createContext, useContext } from 'react'
const CanvasContext = createContext({ context: undefined, })
const useCanvasContext = () => {
	return useContext(CanvasContext);
}
export {CanvasContext, useCanvasContext};
