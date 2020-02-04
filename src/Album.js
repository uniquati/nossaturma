import Particles from './Particles';

/**
 * Gerencia um album, pré carregamento das imagens, e autoplay...
 */
export default class Album {
    constructor(){
        const options = {
            particles: {
                totalNumber: 30,
                numberInteractiveParticles: 20,
                minRadius: 7,
                maxRadius: 15,
                color: "rgb(255,255,255)",
                opacity: 0.9,
            },
            links: {
                maxDistance: 250,
                opacity: .7, /* máxima opacidade */
                width: 1,
            },
        };
        this.particlesController = new Particles(document.querySelector("#canvas"), options);
    }

    init(){
        console.log('[ALBUM] init');
        this.particlesController.init();
    }

    /**
     * Adiciona uma imagem ao álbum
     * 
     * Utiliza Promisses para baixar as imagens de forma assíncrona.
     * @param {string} url Endreço da imagem
     */
    addPhoto(url) {
        const promisse = new Promise( (resolve, reject) => {
            const image = new Image();
            image.src = url;
            image.onload = () => resolve(image);
            image.onerror = () => reject(new Error('[ALBUM] could not load image: ' + url));
        });

        promisse.then( image => {
            const id = 'img'+Math.floor((Math.random()*1000));
            image.classList.add('album_img');
            image.id = id;
            document.querySelector('#album1').appendChild(image);
            this.particlesController.addInteractiveParticle(id, url);
        }).catch((err) => {
            console.log(err);
        });
    }

}