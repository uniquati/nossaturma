import Particles from './Particles';
import Slide from './Slide';

/**
 * Gerencia um album, pré carregamento das imagens, e autoplay...
 */
export default class Album {
    constructor(){
        const options = {
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
            }
        };
        this.canvasEl = document.querySelector("#canvas");
        this.el = document.querySelector('#album1');
        this.photos = [];
        this.slideController = new Slide(this.el, this.photos);

        this.particlesController = new Particles(this.canvasEl, options, this.photos, this.slideController);
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

        const interval = setInterval(() => {
            this.slideController.next();
        }, 8000);
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
            // image.style.display = 'none';
            image.onload = () => resolve(image);
            image.onerror = () => reject(new Error('[ALBUM] could not load image: ' + url));
        });

        promisse.then( image => {
            
            /* é preciso adicionar uma img com a url e escondê-la com display:none; 
            para conseguir utilizar a url da imagem em outros lugares e obter o efeito desejado de assync load */
            document.body.appendChild(image);
            
            const data = {
                id: 'img'+ '_' + Math.random().toString(36).substr(2, 9),
                img: url,
            };
            //adiciona uma particula
            const particle = this.particlesController.addInteractiveParticle(data);
            //adiciona a imagem no slide
            this.photos.push(particle);
        }).catch((err) => {
            console.log(err);
        });
    }

}
