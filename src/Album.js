import Particles from './Particles';

/**
 * Gerencia um album, pré carregamento das imagens, e autoplay...
 */
export default class Album {
    constructor(){
        this.options = {
            particles: {
                totalNumber: 30,//FIXIT o total não é usado
                numberInteractiveParticles: 20,
                minRadius: 7,
                maxRadius: 15,
                color: 'rgb(255,255,255)',
                visitedColor: 'rgba(200, 200, 200, .8)',
                activeColor: 'rgb(67, 24, 168)',
                opacity: 0.9,
            },
            decorativeParticles: {
                total: 10,
                radius: 3,
                color: 'rgb(255,255,255)',
                opacity: 0.8,
            },
            links: {
                maxDistance: 250,
                opacity: .7, /* máxima opacidade */
                width: 1,
            },
            interaction : {
                dragMode: true, /* quando TRUE, mover o mouse já interage com as particulas, não sendo necessário clicar e arrastar para movê-las */
            },
            slide : {
                autoplay: true,
                duration: 8000 /* período de exibição de cada foto em milissegundos */
            }
        };
        this.canvasEl = document.querySelector("#canvas");
        this.el = document.querySelector('#album1');
        this.photos = [];
        this.index = null;
        this.activeParticle = null;

        this.particlesController = new Particles(this.canvasEl, this.options, this);
        this.interval;
    }

    resize() {
        this.canvasEl.width = window.innerWidth;
        this.canvasEl.height = window.innerHeight;
    }

    init(){
        console.log('[ALBUM] init');
        // this.openFullscreen();
        window.addEventListener('resize', this.resize.bind(this));
        this.resize();
        this.particlesController.init();

        if(this.options.slide.autoplay) {
            this.startPresentation();
        }

    }

    /**
     * Inicia a apresentação automática das fotos se o modo options.slide.autoplay estiver ligado
     */
    startPresentation(){
        if(this.photos.length){
            this.next();
        } else {
            this.interval = setTimeout(() => {
                this.startPresentation();
            }, this.options.slide.duration);
        }
    }

    /**
     * 
     */
    openFullscreen() {
        let elem = document.body;
        /* When the openFullscreen() function is executed, open the video in fullscreen.
        Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
        if (elem.requestFullscreen) {
        elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
        }
    }

    /**
     * Baixa uma imagem da url e adiciona ao álbum
     * 
     * Utiliza Promisses para baixar as imagens de forma assíncrona.
     * @param {string} url Endreço da imagem
     */
    loadImage(url) {
        const promisse = new Promise( (resolve, reject) => {
            const image = new Image();
            image.src = url;
            image.style.display = 'none';
            image.onload = () => resolve(image);
            image.onerror = () => reject(new Error('[ALBUM] could not load image: ' + url));
        });

        promisse.then( image => {
            /* é preciso adicionar uma img com a url e escondê-la com display:none; 
            para conseguir utilizar a url da imagem em outros lugares e obter o efeito desejado de assync load */
            document.body.appendChild(image);
            
            //adiciona uma particula
            const data = {
                id: 'img'+ '_' + Math.random().toString(36).substr(2, 9),
                img: url,
            };
            const particle = this.particlesController.addInteractiveParticle(data);
            //adiciona a imagem no slide
            this.photos.push(particle);
        }).catch((err) => {
            console.log(err);
        });
    }

    /**
     * Mostra a imagem associada a uma particula específica
     */
    show(particle) {
        console.log('[SLIDE] show image ', particle);
        if(this.activeParticle){
            this.activeParticle.active = false;
        }
        this.activeParticle = particle;
        particle.visited = true;
        particle.active = true;
        
        /* ripple transition effect */
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.left = particle.x + 'px';
        ripple.style.top = particle.y + 'px';
        ripple.style.backgroundImage = `url('${particle.data.img}')`;
        this.el.appendChild(ripple);
        setTimeout(() => {
            this.el.querySelector('.album_background').style.backgroundImage = `url('${particle.data.img}')`;
            ripple.remove();
            var foregrounds = document.querySelectorAll('.album_foreground');
            if(foregrounds.length > 1) {
                foregrounds[0].remove();
            }
        }, 700);

        /* responsive image foreground */
        const foreground = document.createElement('div');
        foreground.classList.add('album_foreground');
        foreground.style.backgroundImage = `url('${particle.data.img}')`;
        this.el.appendChild(foreground);
        
        /* autoplay */
        if(this.options.slide.autoplay) {
            clearInterval(this.interval);
            this.interval = setTimeout(() => {
                this.next();
            }, this.options.slide.duration);
        }

    }

    /**
     * Mostra a imagem na próxima particula do array, reiniciando a contagem quando chega na ultima
     */
    next(){
        if(this.photos.length>0){
            if(this.index === null) {
                this.index = 0;
            } else {
                this.index++;
                if(this.index>=this.photos.length){
                    this.index = 0;
                }
            }

            this.show(this.photos[this.index]);
        }
    }

}
