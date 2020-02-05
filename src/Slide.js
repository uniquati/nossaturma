export default class Slide {
    constructor(album){
        this.albumEl = album;
        this.photos = [];
    }

    add(url){
        console.log('[SLIDE] added photo ', url)
        this.photos.push(url);
    }
    
    remove() {

    }

    showImage(id, url, mousePos) {
        console.log('[SLIDE] show image ' + id, url, mousePos);

        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.id = 'ripple' + (Math.random() * 1000);
        ripple.style.left = mousePos.offsetX + 'px';
        ripple.style.top = mousePos.offsetY + 'px';
        ripple.style.backgroundImage = `url('${url}')`;
        ripple.classList.add('is-particle');
        this.albumEl.appendChild(ripple);

        setTimeout(() => {
            this.albumEl.style.backgroundImage = ripple.style.backgroundImage;
            ripple.remove();
        }, 700);

    }
}