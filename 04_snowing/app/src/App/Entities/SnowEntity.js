class SnowEntity {
    constructor(_x, _y, _xs, _ys, _r) {
        this.x = _x;
        this.y = _y;
        this.xs = _xs;
        this.ys = _ys;
        this.r = _r;
    }

    draw = (_ctx, _width, _height) => {
        _ctx.beginPath();
        _ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        _ctx.moveTo(this.x, this.y);
        //_ctx.fillStyle =`rgba(225, 250, 255, 0.8)`;
        _ctx.fillStyle =`rgba(250, 250, 255, 0.6)`;
        _ctx.strokeStyle =`rgba(200, 220, 255, 0.6)`;
        _ctx.fill();
        _ctx.stroke();
    }

    move = (_width, _height) => {
        this.x += this.xs;
        this.y += this.ys;
        if (this.x > _width || this.y > _height) {
            this.x = Math.random() * _width;
            this.y = -20;
        }
    }
}

export default SnowEntity;
