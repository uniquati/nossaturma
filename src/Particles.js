/**
 * inspirado no Particle.js
 * https://vincentgarreau.com/particles.js
 */
import Particle from './Particle';

export default class Particles {
    constructor(canvas, options) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.options = options;
        this.particlesArray = [];
        this.selected = null;
        this.isDragging = false;
        this.dragStart = {};
        this.dragEnd = {};
    }

    init() {
        console.log('[PARTICLES] init');
        if(this.canvas.getContext) {
            this.addEventListeners();
            this.resize();

            for(let i=0; i< this.options.particles.number; i++) {
                let p = new Particle(Math.random() * this.canvas.width, Math.random() * this.canvas.height, (Math.random() * (this.options.particles.maxRadius-this.options.particles.minRadius))+this.options.particles.minRadius, "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")");
                this.particlesArray.push(p);
            }

            this.selected = this.particlesArray[0];
            this.draw();
        } else {
            //canvas não suportado
        }
    }

    addEventListeners() {
        window.addEventListener('resize', this.resize.bind(this));
        // this.canvas.addEventListener('click', this.click.bind(this));
        this.canvas.addEventListener('mousedown', this.mousedown.bind(this));
        this.canvas.addEventListener('mouseup', this.mouseup.bind(this));
    }

    isParticleInCoordinate(x, y) {
        for(let i=0; i< this.particlesArray.length; i++){
            let p = this.particlesArray[i];
            if(x >= p.x - p.radius*2 && x <= p.x + p.radius*2) {
                if(y >= p.y - p.radius*2 && y <= p.y + p.radius*2){
                    return p;
                }
            }
        }
        return null;
    }

    click(e) {
        const particle = this.isParticleInCoordinate(e.offsetX, e.offsetY);
        if(particle !== null){
            // console.log(particle);
            this.selected = particle;
        }
    }

    mousedown(e) {
        const particle = this.isParticleInCoordinate(e.offsetX, e.offsetY);
        if(particle !== null){
            // console.log(particle);
            this.selected = particle;
            this.isDragging = true;
            this.dragStart = { x: e.offsetX, y: e.offsetY };
        }
    }

    mouseup(e) {
        this.dragEnd = { x: e.offsetX, y: e.offsetY };

        if(this.dragEnd.x == this.dragStart.x && this.dragEnd.y == this.dragStart.y) {
            return;
        }

        if(this.isDragging){
            this.isDragging = false;

            const posRelativeToMouse = {
                x: this.dragEnd.x - this.dragStart.x,
                y: this.dragEnd.y - this.dragStart.y
            };

            var distance = Math.sqrt(
                posRelativeToMouse.x * posRelativeToMouse.x +
                posRelativeToMouse.y * posRelativeToMouse.y
            );

            var forceDirection = {
                x: posRelativeToMouse.x / distance,
                y: posRelativeToMouse.y / distance,
            };

            // distance past which the force is zero
            var force = (distance) * 0.015;
            // console.log(force);

            // if we went below zero, set it to zero.
            if (force > 0){
                // console.log(forceDirection);
                // this.selected.vx += forceDirection.x * force*3;
                // this.selected.vy += forceDirection.y * force*3;
                this.selected.vx += force;
                this.selected.vy += force;
                this.selected.direction.x = forceDirection.x;
                this.selected.direction.y = forceDirection.y;
    
                if(this.selected.vx < 1) this.selected.vx = 1;
                if(this.selected.vy < 1) this.selected.vy = 1;
            }

        }
        // console.log(this.selected);
        // console.log(this.dragEnd);
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear canvas

        console.log('vx:' + this.particlesArray[0].vx, 'vy:'+ this.particlesArray[0].vy, 'dx:' + this.particlesArray[0].direction.x,  'dy:' + this.particlesArray[0].direction.y);
        this.particlesArray.forEach((particle, i) => {
            /* move particle */
            particle.x += particle.direction.x * particle.vx/3;
            particle.y += particle.direction.y * particle.vy/3;

            /* faz a velocidade sempre cair para 1, mas nunca abaixo de 1*/
            if(particle.vx > 1) {
                particle.vx -= 0.01;
            }
            if(particle.vy > 1) {
                particle.vy -= 0.01;
            }
            if(particle.vx < 1) particle.vx = 1;
            if(particle.vy < 1) particle.vy = 1;

            /* check position  - into the canvas ao chegar num extremo é teletransportada para o outro extremo continuando na mesma direção*/
            if(particle.x > this.canvas.width + this.options.links.maxDistance) particle.x = -this.options.links.maxDistance/2;
            else if(particle.x < 0 - this.options.links.maxDistance) particle.x = this.canvas.width + this.options.links.maxDistance/2;
            if(particle.y > this.canvas.height + this.options.links.maxDistance) particle.y = -this.options.links.maxDistance/2;
            else if(particle.y < 0 - this.options.links.maxDistance) particle.y = this.canvas.height + this.options.links.maxDistance/2;

            /* interactions between particles */
            for(let j = i + 1; j < this.particlesArray.length; j++) {
                this.linkParticles(particle, this.particlesArray[j]);
                // this.attractParticles(particle, this.particlesArray[j]);
            }

            if(particle == this.selected){
                this.ctx.fillStyle = 'red';
            } else {
                this.ctx.fillStyle = particle.color;
            }
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
            this.ctx.fill();
            
        });

        window.requestAnimationFrame(this.draw.bind(this));
    }

    /**
     * Atração das particulas
     * @param {*} p1 
     * @param {*} p2 
     */
    attractParticles(p1, p2) {
        /* condensed particles */
        const dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

        if(dist <= this.options.links.maxDistance){
            // console.log(dist);
            const ax = dx/(30000),
            ay = dy/(30000);
            
            p1.vx -= ax;
            p1.vy -= ay;

            p2.vx += ax;
            p2.vy += ay;

        }
    }

    linkParticles(p1, p2) {
        const dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

        if(dist <= this.options.links.maxDistance) {
            const opacity = this.options.links.opacity - (dist / (1/this.options.links.opacity)) / this.options.links.maxDistance;
            this.ctx.lineWidth = this.options.links.width;
            this.ctx.strokeStyle = 'rgba(255,255,255, ' + opacity + ')';
            this.ctx.beginPath();
            this.ctx.moveTo( p1.x, p1.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.closePath();
            this.ctx.stroke();
        }
    }
}