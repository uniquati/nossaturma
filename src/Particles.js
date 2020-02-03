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
                this.particlesArray.push({x:i*30, y:i*50});
            }
            this.draw();
        } else {
            //canvas não suportado
        }
    }

    draw(){
        this.ctx.clearRect(0, 0, 800, 800); // clear canvas

        this.particlesArray.forEach(particle => {
            particle.x++;
            particle.y++;
            this.ctx.fillStyle = "rgb(200,0,0)";
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, 10, 0, Math.PI * 2, false);
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