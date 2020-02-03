import Particle from './Particle';

export default class Particles {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.size = 10;
        this.particlesArray = [];
    }

    init() {
        console.log('[PARTICLES] init');
        if(this.canvas.getContext) {
            for(let i=0; i< this.size; i++) {
                let p = new Particle(Math.random() * this.canvas.width, Math.random() * this.canvas.height, (Math.random() * 10)+5);
                this.particlesArray.push(p);
            }
            this.draw();
        } else {
            //canvas não suportado
        }
    }

    draw(){
        this.ctx.clearRect(0, 0, 800, 600); // clear canvas

        this.particlesArray.forEach(particle => {
            // console.log(particle.direction.x * particle.speed/100);
            particle.x += particle.direction.x * particle.speed/100;
            particle.y += particle.direction.y * particle.speed/100;

            /* check position  - into the canvas ao chegar num extremo é teletrasnportada para o outro extremo continuando na mesma direção*/
            if(particle.x > this.canvas.width + particle.radius*4) particle.x = -particle.radius*2;
            else if(particle.x < 0 - particle.radius*4) particle.x = this.canvas.width + particle.radius*2;
            if(particle.y > this.canvas.height + particle.radius*4) particle.y = -particle.radius*2;
            else if(particle.y < 0 - particle.radius*4) particle.y = this.canvas.height + particle.radius*2;

            this.ctx.fillStyle = particle.color;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
            this.ctx.fill();
            
        });
        
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.moveTo( 125, 125);
        this.ctx.lineTo(300, 200);
        this.ctx.closePath();
        this.ctx.stroke();
        window.requestAnimationFrame(this.draw.bind(this));
    }
}