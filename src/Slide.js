export default class Slide {
    constructor(albumEl, photosArray){
        this.photosArray = photosArray;
        this.albumEl = albumEl;
        this.index = null;
        this.active = null;
    }

    showImage(particle) {
        if(this.active){
            this.active.active = false;
        }
        this.active = particle;
        console.log('[SLIDE] show image ', particle);
        particle.visited = true;
        particle.active = true;

        
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
        if(this.photosArray.length>0){
            if(this.index === null) {
                this.index = 0;
            } else {
                this.index++;
                if(this.index>=this.photosArray.length){
                    this.index = 0;
                }
            }

            this.showImage(this.photosArray[this.index]);
        }
    }
}