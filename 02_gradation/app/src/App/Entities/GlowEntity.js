import useColor from '../Hooks/useColor';

class GlowEntity {
    constructor(_x, _y, _radius, _color) {
        this.x = _x;
        this.y = _y;
        this.radius = _radius;
        this.color = _color;
        this.vx = Math.random() * 4;
        this.vy = Math.random() * 4;
        this.sinValue = Math.random();
    }

    draw = (_ctx, _width, _height) => {

        this.sinValue += 0.01;
        this.radius += Math.sin(this.sinValue);

        if(this.x < 0) {
            this.vx *= -1;
            this.x += 10;
        } else if (this.x > _width) {
            this.vx *= -1;
            this.x -= 10;
        }

        if(this.y < 0) {
            this.vy *= -1;
            this.y += 10;
        } else if(this.y > _height) {
            this.vy *= -1;
            this.y -= 10;
        }

        _ctx.beginPath();
        const g = _ctx.createRadialGradient(
            this.x,
            this.y,
            this.radius * 0.01,
            this.x,
            this.y,
            this.radius
        );

        g.addColorStop(0, useColor.format(this.color.r, this.color.g, this.color.b, 1));
        g.addColorStop(1, useColor.format(this.color.r, this.color.g, this.color.b, 0.6));
        _ctx.fillStyle = g;
        _ctx.arc(this.x, this.y, this.radius, 0,  Math.PI * 2, false);
        _ctx.fill();
    }
}

export default GlowEntity;
