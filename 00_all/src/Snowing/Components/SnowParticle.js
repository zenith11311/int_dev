import { useCanvasContext } from "../Hooks/useCanvas";
import useResponsiveSize from "../Hooks/useResponsiveSize";
import SnowEntity from '../Entities/SnowEntity';


const SnowParticle = () => {
    const { context }= useCanvasContext();
    const { width, height } = useResponsiveSize();

    const drops = Array(1500).fill(0).map((_, idx) => {
        return new SnowEntity(
            Math.random() * width,
            Math.random() * height,
            0,
            Math.random() * 1 + 1,
            Math.random() * 3,
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

export default SnowParticle;
