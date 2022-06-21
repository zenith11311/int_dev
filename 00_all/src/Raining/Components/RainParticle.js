import { useCanvasContext } from "../Hooks/useCanvas";
import useResponsiveSize from "../Hooks/useResponsiveSize";
import RainDropEntity from '../Entities/RainDropEntity';


const RainParticle = () => {
    const { context }= useCanvasContext();
    const { width, height } = useResponsiveSize();

    const drops = Array(1000).fill(0).map((_, idx) => {
        return new RainDropEntity(
            Math.random() * width,
            Math.random() * height,
            0,
            Math.random() * 15 + 1,
            Math.random() * 2,
        );
    });

    const render = () => {
        context?.clearRect(0, 0, width, height);
        Object.entries(drops).forEach(([dropName, drop]) => {
            drop.draw(context, width, height);
            drop.move(width, height);
        });
        requestAnimationFrame(render);
    };

    if (context) render();
    return null;
};

export default RainParticle;
