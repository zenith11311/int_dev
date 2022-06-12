import { useCanvasContext } from '../Hooks/useCanvas';
import useResponsiveSize from '../Hooks/useResponsiveSize';
import GlowEntity from '../Entities/GlowEntity';

const radius_g = {
    max : 200,
    min : 100,
};

const colors_g = [
    {r: 255, g: 100, b: 100},
    {r: 200, g: 255, b: 150},
    {r: 120, g: 255, b: 89},
    {r: 10,  g: 220, b: 255},
    {r: 10,  g: 200, b: 255},
    {r: 200, g: 150, b: 255},
    {r: 10,  g: 233, b: 200},
    {r: 225, g: 15,  b: 180},
    {r: 10,  g: 233, b: 200},
];


const GlowParticle = () => {
    const { context } = useCanvasContext();
    const { width, height } = useResponsiveSize();

    const glows = Array(15).fill(0).map((_, idx) => {
        const color = colors_g[idx%colors_g.length];
        return new GlowEntity(
            Math.random() * width,
            Math.random() * height,
            Math.random() * (radius_g.max - radius_g.min) + radius_g.min,
            color,
        );
    });

    const render = () => {
        context?.clearRect(0, 0, width, height);
        context.globalCompositeOperation = 'saturation';
        Object.entries(glows).forEach(([glowName, glow]) => {
            glow.draw(context, width, height);
        });
        requestAnimationFrame(render);
    };

    if (context) render();
    return null;
}

export default GlowParticle;
