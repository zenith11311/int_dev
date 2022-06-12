import { useCanvasContext } from '../Hooks/useCanvas';
import useResponsiveSize from '../Hooks/useResponsiveSize';
import WaveEntity from '../Entities/WaveEntity';
import Common from '../../Utils/Common';
import Color from '../../Utils/Color';

const num_of_wave_g = 3;

const Wave = () => {
    const { context } = useCanvasContext();
    const { width, height } = useResponsiveSize();

    let timer = 1;
    let frequency = 0.013;

    const waves = new Array(num_of_wave_g).fill(0).map((_, idx) => {
        const color = Color.generate(0, 180);
        const pos = [
            Common.randomInt(0, 100)/1000,
            Common.randomInt(0, 500)/10000,
            Common.randomInt(0, 500)/10000,
        ];
        return new WaveEntity(pos, Color.format(color.r, color.g, 255 - Common.randomInt(0, 50), 0.8/(1+idx)));
        //return new WaveEntity(pos, Color.format(color.r, color.g, color.b, 0.8/(1+idx)));
    });

    let colors = new Array(num_of_wave_g).fill(0).map((_, idx) => {
        return Color.generate(0, 180);
    });

    const render = () => {
        context?.clearRect(0, 0, width, height)
        waves.forEach((_, idx) => {
            const color = colors[idx];
            _.waveColor = Color.format(color.r, color.g, 255 - Common.randomInt(0, 50), 0.8/(1+idx));
            //_.waveColor = Color.format(color.r, color.g, color.b, 0.8/(1+idx));
            _.draw(context, width, height, frequency);
        });

        if (timer === 10) {
            colors = colors.fill(0).map((_, idx) =>  Color.generate(0, 180));
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
