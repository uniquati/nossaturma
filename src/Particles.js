/**
 * inspirado no Particle.js
 * https://vincentgarreau.com/particles.js
 */
import Particle from './Particle';

export default class Particles {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.size = 20;
        this.particlesArray = [];
        this.linkedDistance = 250;
        this.linkBaseOpacity = 0.7;
        this.linkWidth = 4;
        this.selected = null;
    }

    init() {
        console.log('[PARTICLES] init');
        if(this.canvas.getContext) {
            this.addEventListeners();
            this.resize();

            for(let i=0; i< this.size; i++) {
                let p = new Particle(Math.random() * this.canvas.width, Math.random() * this.canvas.height, (Math.random() * 10)+5);
                this.particlesArray.push(p);
            }

            this.draw();
        } else {
            //canvas não suportado
        }
    }

    addEventListeners() {
        window.addEventListener('resize', this.resize.bind(this));
        this.canvas.addEventListener('click', this.click.bind(this));
    }

    click(e) {
        this.particlesArray.forEach(p => {
            // console.log(e.offsetX, e.offsetY, p.x, p.y);
            if(e.offsetX >= p.x - p.radius*2 && e.offsetX <= p.x + p.radius*2) {
                if(e.offsetY >= p.y - p.radius*2 && e.offsetY <= p.y + p.radius*2){
                    this.selected = p;
                    console.log(p);
                    return;
                }
            }
        });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear canvas

        this.particlesArray.forEach((particle, i) => {
            // console.log(particle.direction.x * particle.speed/100);
            /* move particle */
            particle.x += particle.direction.x * particle.vx/4000;
            particle.y += particle.direction.y * particle.vy/4000;

            /* check position  - into the canvas ao chegar num extremo é teletransportada para o outro extremo continuando na mesma direção*/
            if(particle.x > this.canvas.width + this.linkedDistance) particle.x = -this.linkedDistance/2;
            else if(particle.x < 0 - this.linkedDistance) particle.x = this.canvas.width + this.linkedDistance/2;
            if(particle.y > this.canvas.height + this.linkedDistance) particle.y = -this.linkedDistance/2;
            else if(particle.y < 0 - this.linkedDistance) particle.y = this.canvas.height + this.linkedDistance/2;

            /* interactions between particles */
            for(let j = i + 1; j < this.particlesArray.length; j++) {
                this.linkParticles(particle, this.particlesArray[j]);
                this.attractParticles(particle, this.particlesArray[j]);
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

        if(dist <= this.linkedDistance){
            // console.log(dist);
            const ax = dx/(30),
            ay = dy/(30);
            
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

        if(dist <= this.linkedDistance) {
            const opacity = this.linkBaseOpacity - (dist / (1/this.linkBaseOpacity)) / this.linkedDistance;
            this.ctx.lineWidth = this.linkWidth;
            this.ctx.strokeStyle = 'rgba(255,255,255, ' + opacity + ')';
            this.ctx.beginPath();
            this.ctx.moveTo( p1.x, p1.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.closePath();
            this.ctx.stroke();
        }
    }
}