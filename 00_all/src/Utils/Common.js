const randomInt = (_min=0, _max=255) => _min + Math.floor((Math.random() * (_max - _min )));

const Common = {
    randomInt: randomInt,
};

export default Common;
