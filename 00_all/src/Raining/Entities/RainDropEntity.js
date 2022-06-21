class RainDropEntity {
    constructor(_x, _y, _xs, _ys, _l) {
        this.x = _x;
        this.y = _y;
        this.xs = _xs;
        this.ys = _ys;
        this.l = _l;
    }

    draw = (_ctx, _width, _height) => {
        _ctx.beginPath();
        _ctx.moveTo(this.x, this.y);
        _ctx.lineTo(this.x + this.l * this.xs, this.y + this.l * this.ys);
        const r = parseInt(Math.random() * 10) + 180;
        const g = parseInt(Math.random() * 10) + 180;
        const b = 255;
        const a = parseInt(Math.random() * 10)/100 + 0.9;
        _ctx.strokeStyle =`rgba(${r}, ${g}, ${b}, ${a})`;
        _ctx.stroke();
    }

    move = (_width, _height) => {
        this.x += this.xs;
        this.y += this.ys;
        if (this.x > _width || this.y > _height) {
            this.x = Math.random() * _width;
            this.y = -10;
        }
    }
}

export default RainDropEntity;
