export default class Slide {
    constructor(album){
        this.albumEl = album;
        this.particles = [];
        this.index = null;
    }

    add(particle){
        // console.log('[SLIDE] added photo ', photo);
        this.particles.push(particle);
    }
    
    remove() {

    }

    showImage(particle) {
        console.log('[SLIDE] show image ', particle);
        particle.visited = true;

        
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.id = 'ripple' + (Math.random() * 1000);
        ripple.style.left = particle.x + 'px';
        ripple.style.top = particle.y + 'px';
        ripple.style.backgroundImage = `url('${particle.data.img}')`;
        ripple.classList.add('ripple--active');
        this.albumEl.appendChild(ripple);

        setTimeout(() => {
            this.albumEl.style.backgroundImage = ripple.style.backgroundImage;
            ripple.remove();
        }, 700);

    }

    next(){
        if(this.particles.length>0){
            if(this.index === null) {
                this.index = 0;
            } else {
                this.index++;
                if(this.index>=this.particles.length){
                    this.index = 0;
                }
            }

            this.showImage(this.particles[this.index]);
        }
    }
}