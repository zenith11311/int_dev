const randomInt = (_min=0, _max=255) => _min + Math.floor((Math.random() * (_max - _min )));
const format = (_r, _g, _b, _a=1) => (`rgba(${_r}, ${_g}, ${_b}, ${_a})`);
const generate = () => {
    return { r: randomInt(), g: randomInt(), b: randomInt() };
};

const useColor = {
    randomInt: randomInt,
    format: format,
    generate: generate,
};

export default useColor;
