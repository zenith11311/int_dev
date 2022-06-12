import Common from "./Common"
const format = (_r, _g, _b, _a=1) => (`rgba(${_r}, ${_g}, ${_b}, ${_a})`);
const generate = (_min=0, _max=255) => {
    return { r: Common.randomInt(_min, _max), g: Common.randomInt(_min, _max), b: Common.randomInt(_min, _max) };
};

const Color = {
    format: format,
    generate: generate,
};

export default Color;
