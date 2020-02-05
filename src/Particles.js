/**
 * inspirado no Particles.js
 * https://vincentgarreau.com/particles.js
 */
import Particle from './Particle';

export default class Particles {
    constructor(slide, canvas, options) {
        this.slideController = slide,
        this.canvasEl = canvas;
        this.context = this.canvasEl.getContext('2d');
        this.options = options;

        this.allParticlesArray = [];
        this.interactiveParticlesArray = [];
        this.selected = null;
        this.isDragging = false;
        this.dragStart = {};
        this.dragEnd = {};
        this.mousePos = {
            offsetX: 0, 
            offsetY: 0,
        };
        this.customCursor = document.querySelector('#cursor');
    }

    /**
     * 
     */
    init() {
        console.log('[PARTICLES] init');
        if(this.context) {
            this.startEventListeners();

            if(this.options.interaction.dragMode){
                this.isDragging = true;
            }

            for(let i=0; i< this.options.decorativeParticles.total; i++) {
                this.addDecorativeParticle();
            }

            this.draw();
        } else {
            //TODO canvas não suportado
        }
    }

    /**
     * Escuta os eventos no canvas
     */
    startEventListeners() {
        this.canvasEl.addEventListener('mousedown', this.mousedown.bind(this));
        this.canvasEl.addEventListener('mouseup', this.mouseup.bind(this));
        this.canvasEl.addEventListener('mousemove', this.mousemove.bind(this));
    }

    /**
     * Adiciona uma particula decorativa numa posição aleatória do canvas
     */
    addDecorativeParticle(){
        let p = new Particle(
            Math.random() * this.canvasEl.width,
            Math.random() * this.canvasEl.height,
            this.options.decorativeParticles.radius,
            this.options.decorativeParticles.color,
            this.options.decorativeParticles.opacity,
            false
        );
        this.allParticlesArray.push(p);
    }

    /**
     * Adiciona uma particula interativa numa posição aleatória do canvas
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
        this.allParticlesArray.push(p);
        this.interactiveParticlesArray.push(p);
    }

    /**
     * Atualiza a posição do cursor personalizado do mouse 
     * e exibe o thumbnail ao fazer hover sobre uma partícula
     */
    updateCustomMouseCursor(){
        this.customCursor.style.left = this.mousePos.offsetX + 'px';
        this.customCursor.style.top = this.mousePos.offsetY + 'px';

        const particleHover = this.getParticleInCoordinate(this.mousePos.offsetX, this.mousePos.offsetY);
        if(particleHover) {
            this.selected = particleHover;
            this.customCursor.classList.add('cursor--thumbnail-active');
            this.customCursor.style.backgroundImage = `url('${this.selected.data.img}')`;            
        } else {
            this.customCursor.classList.remove('cursor--thumbnail-active');
            this.customCursor.style.backgroundImage = '';
        }
    }

    /**
     * Verifica se existe uma partícula na coordenada
     * @param {number} x 
     * @param {number} y 
     * @returns {Particle} retorna uma particula ou null
     */
    getParticleInCoordinate(x, y) {
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

    /**
     * Ao clicar numa partícula, mostra a imagem correspondente no slide
     * @param {Event} e
     */
    mousedown(e) {
        const particle = this.getParticleInCoordinate(e.offsetX, e.offsetY);
        if(particle){
            this.selected = particle;
            this.isDragging = true;
            this.dragStart = { x: e.offsetX, y: e.offsetY };

            this.selected.vx += 10;
            this.selected.vy += 10;
            this.slideController.showImage(particle.data.id, particle.data.img, this.mousePos);
        }
    }

    /**
     * Interação com as particulas ao mover o mouse sobre elas 
     * @param {Event} e 
     */
    mousemove(e) {
        //FIXIT quando só existe uma particula interativa é ipossível clicar nela porque ela foge muito rápido
        this.mousePos = e;

        // if(e.offsetX == this.dragStart.x && e.offsetY == this.dragStart.y) {
        //     this.isDragging = false;
        // }

        if(this.isDragging && this.selected) {
            const posRelativeToMouse = {
                x: e.movementX,
                y: e.movementY
            };

            const distance = Math.sqrt(
                posRelativeToMouse.x * posRelativeToMouse.x +
                posRelativeToMouse.y * posRelativeToMouse.y
            );

            const forceDirection = {
                x: posRelativeToMouse.x / distance,
                y: posRelativeToMouse.y / distance,
            };

  
            let force = (distance) * 0.08;
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

    /**
     * Interação ao arrastar uma partícula com o mouse
     * @param {Event} e 
     */
    mouseup(e) {
        this.dragEnd = { x: e.offsetX, y: e.offsetY };

        if(!this.options.interaction.dragMode){
            this.isDragging = false;
        }

        // if(this.dragEnd.x == this.dragStart.x && this.dragEnd.y == this.dragStart.y) {
        //     this.isDragging = false;
        // }
    }

    moveParticle(particle) {
        /* move particle */
        const velFactor = 5;
        particle.x += particle.direction.x * particle.vx/velFactor;
        particle.y += particle.direction.y * particle.vy/velFactor;

        /* faz a velocidade sempre cair lentamente para 1, mas nunca abaixo de 1*/
        if(particle.vx > 1) {
            particle.vx -= 0.2;
        }
        if(particle.vy > 1) {
            particle.vy -= 0.2;
        }
        if(particle.vx < 1) particle.vx = 1;
        if(particle.vy < 1) particle.vy = 1;

        // faz a direção ficar sempre em torno de (-1,-1) até (1,1)
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

    }

    /**
     * Atualiza parâmetros de uma particula (posição, direção, velocidade, links, cor, raio, etc...) 
     * e desenha no canvas
     * @param {*} particle 
     * @param {*} i 
     */
    updateParticle(particle, i){
        /* move particle */
        this.moveParticle(particle);

        /* links e interactions between particles */
        for(let j = i + 1; j < this.allParticlesArray.length; j++) {
            this.linkParticles(particle, this.allParticlesArray[j]);
            this.attractParticles(particle, this.allParticlesArray[j]);
        }

        //TODO refatorar esse código confuso
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

        
    }
    
    /**
     * Desenha as partículas e links no canvas (em loop)
     */
    draw(){
        // clear canvas
        this.context.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
        
        this.allParticlesArray.forEach((particle, i) => this.updateParticle(particle, i));
        
        this.updateCustomMouseCursor();

        window.requestAnimationFrame(this.draw.bind(this));
    }

    /**
     * Atração entre partículas próximas
     * @param {Particle} p1 
     * @param {Particle} p2 
     */
    attractParticles(p1, p2) {
        const posRelative = {
            x: p1.x - p2.x,
            y: p1.y - p2.y
        };

        const distance = Math.sqrt(
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

    /**
     * Desenha links entre as partículas próximas
     * @param {Particle} p1 
     * @param {Particle} p2 
     */
    linkParticles(p1, p2) {
        const posRelative = {
            x: p1.x - p2.x,
            y: p1.y - p2.y
        };

        const distance = Math.sqrt(
            posRelative.x * posRelative.x +
            posRelative.y * posRelative.y
        );

        //TODO criar uma distancia máxima para link
        if(distance <= this.options.links.maxDistance + 100) {
            const opacity = this.options.links.opacity - (distance / (1/this.options.links.opacity)) / this.options.links.maxDistance;
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
