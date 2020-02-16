import Particles from './Particles';
import {isWebUri} from 'valid-url'; 

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
                autoplay: false,
                duration: 8000 /* período de exibição de cada foto em milissegundos */
            }
        };
        this.albumEl;
        this.particlesCanvasEl;
        this.particlesController;
        this.photos = [];
        this.index = null;
        this.activeParticle = null;

        this.interval;
        this.playing = false;
    }

    resize() {
        this.particlesCanvasEl.width = window.innerWidth;
        this.particlesCanvasEl.height = window.innerHeight;
    }

    buildAlbum(capaBackground, capaForeground) {
        this.albumEl = document.createElement('section');
        this.albumEl.classList.add('album');

        const cursor = document.createElement('div');
        cursor.classList.add('cursor');
        this.albumEl.appendChild(cursor);
        
        const capa = document.createElement('div');
        capa.classList.add('capa');
        capa.addEventListener('click', this.startPresentation.bind(this));
        this.albumEl.appendChild(capa);

        const capa__background = document.createElement('div');
        capa__background.classList.add('capa__background');
        capa__background.style.backgroundImage = `url('${capaBackground}')`;
        capa.appendChild(capa__background);
        
        const capa__foreground = document.createElement('div');
        capa__foreground.classList.add('capa__foreground');
        capa__foreground.style.backgroundImage = `url('${capaForeground}')`;
        capa.appendChild(capa__foreground);

        const h1 = document.createElement('h1');
        h1.innerHTML = 'Nossa Turma é cultura';
        capa.appendChild(h1);

        const h2 = document.createElement('h2');
        h2.innerHTML = '1999 - Natal/RN - Palácio da Cultura';
        capa.appendChild(h2);

        const album__background = document.createElement('div');
        album__background.classList.add('album__background');
        this.albumEl.appendChild(album__background);

        this.particlesCanvasEl = document.createElement('canvas');
        this.particlesCanvasEl.classList.add('particles-canvas');
        this.albumEl.appendChild(this.particlesCanvasEl);

        const controls = document.createElement('button');
        controls.classList.add('controls');
        controls.addEventListener('click', this.pausePresentation.bind(this));
        this.albumEl.appendChild(controls);
        
        document.querySelector('main').appendChild(this.albumEl);
    }

    init(capaBackground, capaForeground){
        console.log('[ALBUM] init');
        this.buildAlbum(capaBackground, capaForeground);
        
        // this.openFullscreen();
        window.addEventListener('resize', this.resize.bind(this));
        this.resize();
        
        this.particlesController = new Particles(this.particlesCanvasEl, this.options, this);
        this.particlesController.init();

        if(this.options.slide.autoplay) {
            this.startPresentation();
        }
    }

    /**
     * Inicia a apresentação automática das fotos se o modo options.slide.autoplay estiver ligado
     */
    startPresentation(){
        this.albumEl.classList.add('album--playing');
        if(this.photos.length){
            this.playing = true;
            this.next();
        } else {
            this.interval = setTimeout(() => {
                this.startPresentation();
            }, this.options.slide.duration);
        }
    }

    pausePresentation() {
        if(this.playing) {
            this.albumEl.querySelector('.controls').classList.add('paused');
            clearInterval(this.interval);
            this.playing = false;
            console.log(this.playing);
        } else {
            this.albumEl.querySelector('.controls').classList.remove('paused');
            this.playing = true;
            console.log(this.playing);
            this.next();
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
        if(!isWebUri(url)){
            var n = window.location.href.lastIndexOf("/");
            // console.log(window.location.href.slice(0, n) + '/' + 'dist/assets/photos/');
            url = window.location.href.slice(0, n) + '/' + 'dist/assets/photos/' + url;
            console.log(url); 
        }
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
        this.albumEl.appendChild(ripple);
        setTimeout(() => {
            this.albumEl.querySelector('.album__background').style.backgroundImage = `url('${particle.data.img}')`;
            ripple.remove();
            var foregrounds = this.albumEl.querySelectorAll('.album_foreground');
            if(foregrounds.length > 1) {
                foregrounds[0].remove();
            }
        }, 700);

        /* responsive image foreground */
        const foreground = document.createElement('div');
        foreground.classList.add('album_foreground');
        foreground.style.backgroundImage = `url('${particle.data.img}')`;
        this.albumEl.appendChild(foreground);
        
        /* autoplay */
        if(this.playing) {
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
