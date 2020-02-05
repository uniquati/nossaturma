/**
 * inspirado no Particle.js
 * https://vincentgarreau.com/particles.js
 */
import Particle from './Particle';

export default class Particles {
    constructor(slide, canvas, options) {
        this.slideController = slide,
        this.canvasEl = canvas;
        this.context = this.canvasEl.getContext('2d');
        this.options = options;
        this.particlesArray = [];
        this.interactiveParticlesArray = [];
        this.selected = null;
        this.isDragging = false;
        this.dragStart = {};
        this.dragEnd = {};
        this.mousePos = {
            offsetX: 0, 
            offsetY: 0,
        };
    }

    init() {
        console.log('[PARTICLES] init');
        if(this.context) {
            this.addEventListeners();
            this.resize();
            this.isDragging = true;

            //adiciona particulas não interativas (decorativas)
            for(let i=0; i< this.options.decorativeParticles.total; i++) {
                this.addDecorativeParticle();
            }

            //this.selected = this.particlesArray[0];
            this.draw();
        } else {
            //TODO canvas não suportado
        }
    }

    addEventListeners() {
        window.addEventListener('resize', this.resize.bind(this));
        // this.canvasEl.addEventListener('click', this.click.bind(this));
        this.canvasEl.addEventListener('mousedown', this.mousedown.bind(this));
        this.canvasEl.addEventListener('mouseup', this.mouseup.bind(this));
        this.canvasEl.addEventListener('mousemove', this.mousemove.bind(this));
    }

    addDecorativeParticle(){
        let p = new Particle(Math.random() * this.canvasEl.width, Math.random() * this.canvasEl.height, this.options.decorativeParticles.radius, this.options.decorativeParticles.color, this.options.decorativeParticles.opacity, false);
        this.particlesArray.push(p);
    }

    /**
     * Adiciona uma particula interativa
     * @param {*} id 
     * @param {*} url 
     */
    addInteractiveParticle(id, url) {
        let p = new Particle(
            Math.random() * this.canvasEl.width,
            Math.random() * this.canvasEl.height,
            (Math.random() * (this.options.particles.maxRadius-this.options.particles.minRadius))+this.options.particles.minRadius,
            this.options.particles.color,
            this.options.particles.opacity,
            true,
            { 
                id: id,
                img: url,
            }
        );
        this.particlesArray.push(p);
        this.interactiveParticlesArray.push(p);
    }

    checkHover(){
        //TODO transformar focus num atributo da classe
        const focus = document.querySelector('#focus');
        focus.style.left = this.mousePos.offsetX + 'px';
        focus.style.top = this.mousePos.offsetY + 'px';

        // const ripple = document.querySelector('#ripple');
        // ripple.style.left = this.mousePos.offsetX + 'px';
        // ripple.style.top = this.mousePos.offsetY + 'px';

        const particleHover = this.isParticleInCoordinate(this.mousePos.offsetX, this.mousePos.offsetY);
        if(particleHover !== null) {
            this.selected = particleHover;
            focus.classList.add('is-particle');
            focus.style.backgroundImage = `url('${this.selected.data.img}')`;
            // ripple.style.backgroundImage = `url('${this.selected.data.img}')`;
            // ripple.classList.add('is-particle');
            
        } else {
            focus.classList.remove('is-particle');
            focus.style.backgroundImage = '';
            // ripple.classList.remove('is-particle');
        }
    }

    isParticleInCoordinate(x, y) {
        for(let i=0; i< this.interactiveParticlesArray.length; i++){
            let p = this.interactiveParticlesArray[i];
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
            this.selected = particle;
        }
    }

    mousedown(e) {
        const particle = this.isParticleInCoordinate(e.offsetX, e.offsetY);
        if(particle !== null){
            this.selected = particle;
            this.isDragging = true;
            this.dragStart = { x: e.offsetX, y: e.offsetY };

            this.selected.vx += 10;
            this.selected.vy += 10;
            this.slideController.showImage(particle.data.id, particle.data.img, this.mousePos);
        }
    }

    mousemove(e) {
        //FIXIT quando só existe uma particula interativa é ipossível clicar nela porque ela foge muito rápido
        this.mousePos = e;

        if(e.offsetX == this.dragStart.x && e.offsetY == this.dragStart.y) {
            // this.isDragging = false;
        }

        if(this.isDragging && this.selected) {
            const posRelativeToMouse = {
                x: e.movementX,
                y: e.movementY
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
            var force = (distance) * 0.08;
            // if we went below zero, set it to zero.
            if (force > 0){
                this.selected.vx += force;
                this.selected.vy += force;
                this.selected.direction.x = forceDirection.x;
                this.selected.direction.y = forceDirection.y;
    
                if(this.selected.vx < 1) this.selected.vx = 1;
                if(this.selected.vy < 1) this.selected.vy = 1;
            }
        }

    }

    mouseup(e) {
        this.dragEnd = { x: e.offsetX, y: e.offsetY };

        if(this.dragEnd.x == this.dragStart.x && this.dragEnd.y == this.dragStart.y) {
            // this.isDragging = false;
        }
    }

    //TODO mover resize para Album.js
    resize() {
        this.canvasEl.width = window.innerWidth;
        this.canvasEl.height = window.innerHeight;
    }

    moveParticles() {
        // console.log('vx:' + this.particlesArray[0].vx, 'vy:'+ this.particlesArray[0].vy, 'dx:' + this.particlesArray[0].direction.x,  'dy:' + this.particlesArray[0].direction.y);
        this.particlesArray.forEach((particle, i) => {
            /* move particle */
            const velFactor = 5;
            particle.x += particle.direction.x * particle.vx/velFactor;
            particle.y += particle.direction.y * particle.vy/velFactor;

            /* faz a velocidade sempre cair para 1, mas nunca abaixo de 1*/
            if(particle.vx > 1) {
                particle.vx -= 0.2;
            }
            if(particle.vy > 1) {
                particle.vy -= 0.2;
            }
            if(particle.vx < 1) particle.vx = 1;
            if(particle.vy < 1) particle.vy = 1;

            /* faz a direção ficar sempre em torno de (-1,-1) (1,1) */
            if(particle.direction.x > 1) {
                particle.direction.x = 1;
            } else if(particle.direction.x < -1) {
                particle.direction.x = -1;
            }
            if(particle.direction.y > 1) {
                particle.direction.y = 1;
            } else if(particle.direction.y < -1) {
                particle.direction.y = -1;
            }

            /* check position  - into the canvas ao chegar num extremo é teletransportada para o outro extremo continuando na mesma direção*/
            if(particle.x > this.canvasEl.width + this.options.links.maxDistance) particle.x = -this.options.links.maxDistance/2;
            else if(particle.x < 0 - this.options.links.maxDistance) particle.x = this.canvasEl.width + this.options.links.maxDistance/2;
            if(particle.y > this.canvasEl.height + this.options.links.maxDistance) particle.y = -this.options.links.maxDistance/2;
            else if(particle.y < 0 - this.options.links.maxDistance) particle.y = this.canvasEl.height + this.options.links.maxDistance/2;

            /* interactions between particles */
            for(let j = i + 1; j < this.particlesArray.length; j++) {
                this.linkParticles(particle, this.particlesArray[j]);
                this.attractParticles(particle, this.particlesArray[j]);
            }

            if(particle == this.selected){
                this.context.fillStyle = 'rgb(0, 0, 200)';
            } else {
                // console.log(particle.animation.state);
                if(particle.animation.state === 'adding') {
                    if(particle.animation.radius<particle.radius){
                        particle.animation.radius+=0.05;
                    } else {
                        particle.animation.state === 'added';
                    }
                } else {
                    // this.context.globalAlpha = 1;
                }
                this.context.fillStyle = particle.color;
            }
            this.context.beginPath();
            this.context.arc(particle.x, particle.y, particle.animation.radius, 0, Math.PI * 2, false);
            this.context.fill();

            this.checkHover();
            
        });
    }

    draw(){
        this.context.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height); // clear canvas

        this.moveParticles();

        window.requestAnimationFrame(this.draw.bind(this));
    }

    /**
     * Atração das particulas
     * @param {*} p1 
     * @param {*} p2 
     */
    attractParticles(p1, p2) {
        /* condensed particles */
        const posRelative = {
            x: p1.x - p2.x,
            y: p1.y - p2.y
        };

        var distance = Math.sqrt(
            posRelative.x * posRelative.x +
            posRelative.y * posRelative.y
        );

        if(distance <= this.options.links.maxDistance) {
            var factor = 0.0001;
            const ax = distance*factor,
            ay = distance*factor;
            
            p1.vx += ax;
            p1.vy += ay;

            p2.vx += ax;
            p2.vy += ay;

            var forceDirection = {
                x: posRelative.x / distance,
                y: posRelative.y / distance,
            };

            p1.direction.x += forceDirection.x*factor;
            p1.direction.y += forceDirection.y*factor;

            p2.direction.x -= forceDirection.x*factor;
            p2.direction.y -= forceDirection.y*factor;
        }
    }

    linkParticles(p1, p2) {
        const dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

        if(dist <= this.options.links.maxDistance + 100) {
            const opacity = this.options.links.opacity - (dist / (1/this.options.links.opacity)) / this.options.links.maxDistance;
            this.context.lineWidth = this.options.links.width;
            this.context.strokeStyle = 'rgba(255,255,255, ' + opacity + ')';
            this.context.beginPath();
            this.context.moveTo( p1.x, p1.y);
            this.context.lineTo(p2.x, p2.y);
            this.context.closePath();
            this.context.stroke();
        }
    }
}
