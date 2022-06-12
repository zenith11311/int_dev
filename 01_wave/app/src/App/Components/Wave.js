import { useCanvasContext } from '../Hooks/useCanvas';
import useResponsiveSize from '../Hooks/useResponsiveSize';
import WaveEntity from '../Entities/WaveEntity';
import useColor from '../Hooks/useColor';

const Wave = () => {
    const { context } = useCanvasContext();
    const { width, height } = useResponsiveSize();
    const { generateColor } = useColor();

    let frequency = 0.013;
    let colors = generateColor();
    let timer = 1;

    const waves = {
        firstWave: new WaveEntity([0.0211, 0.028, 0.015], 'rgba(255,179,120,0.88)'),
        secondWave: new WaveEntity([0.005, 0, 0.005], 'rgba(100,179,255,0.48)'),
        thirdWave: new WaveEntity([0.0122, 0.018, 0.005], 'rgba(255,10,200,0.20)'),
    };

    const render = () => {
        context?.clearRect(0, 0, width, height)
        Object.entries(waves).forEach(([waveName, wave]) => {
            wave.waveColor = colors[waveName]
            wave.draw(context, width, height, frequency)
        });
        if (timer === 2000) {
            colors = generateColor();
            timer = 1;
        }
        timer++;
        frequency += 0.013;
        requestAnimationFrame(render);
    };

    if (context) render();
    return null;
}

export default Wave;
