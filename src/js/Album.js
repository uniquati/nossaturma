import Particles from './Particles';
import {isWebUri} from 'valid-url'; 

/**
 * Gerencia um album, pré carregamento das imagens, e autoplay...
 */
export default class Album {

    constructor(firebase){
        this.firebase = firebase,
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
        this.interactiveParticles = [];
        this.photos = [];
        this.index = null;//foto atual sendo apresentada
        this.activeParticle = null;

        this.interval;
        this.playing = false;//a apresentação está play ou paused 
        this.sizeLimit = 10;//quantidade máxima de fotos no album
        this.isOffScreen = true;//se o album está fora da região visivel da tela (scroll)

        this.firebaseRefs;//array com referencia a todas as imagens do album no firebase
        this.page = 0;//indica qual 'página' de fotos está sendo exibida no album
    }

    resize() {
        this.particlesCanvasEl.width = window.innerWidth;
        this.particlesCanvasEl.height = window.innerHeight;
    }

    buildAlbum(capaBackground, capaForeground, title, description, metadata) {
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

        const info = document.createElement('div');
        info.classList.add('info');
        capa.appendChild(info);

        if(metadata){
            const h2 = document.createElement('h2');
            h2.innerHTML = metadata;
            info.appendChild(h2);
        }

        const h1 = document.createElement('h1');
        h1.innerHTML = title;
        info.appendChild(h1);

        if(description) {
            const p = document.createElement('p');
            p.innerHTML = description;
            info.appendChild(p);
        }

        const album__background = document.createElement('div');
        album__background.classList.add('album__background');
        this.albumEl.appendChild(album__background);

        this.particlesCanvasEl = document.createElement('canvas');
        this.particlesCanvasEl.classList.add('particles-canvas');
        this.albumEl.appendChild(this.particlesCanvasEl);
        
        const controls = document.createElement('div');
        controls.classList.add('controls');
        this.albumEl.appendChild(controls);

        const btnPlay = document.createElement('button');
        btnPlay.classList.add('btnPlay');
        btnPlay.addEventListener('click', this.pausePresentation.bind(this));
        controls.appendChild(btnPlay);

        const btnNext = document.createElement('button');
        btnNext.classList.add('btnNext');
        btnNext.addEventListener('click', this.nextPage.bind(this));
        controls.appendChild(btnNext);


        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        this.albumEl.appendChild(progressBar);
        
        document.querySelector('main').appendChild(this.albumEl);
    }

    // isOffScreen() {
    //     const elemRect = this.albumEl.getBoundingClientRect();
        
    //     if(elemRect.top <= window.innerHeight && elemRect.bottom >= 0) {
    //         console.log('dentro', this.folder);
    //         this.isOffScreen = false;
    //     } else {
    //         this.isOffScreen = true;
    //     }
    // }

    /**
     * Quando o album sai da área visível da tela, ele para de executar as animações para economizar processamento
     * @param {Event} e
     */
    scroll(e) {
        const elemRect = this.albumEl.getBoundingClientRect();
        
        if(elemRect.top <= window.innerHeight && elemRect.bottom >= 0) {//o album está dentro da tela
            // console.log('dentro', this.folder);
            if(this.isOffScreen === true && this.playing === true){
                this.next();
            }
            this.isOffScreen = false;
        } else {//o album está fora da tela
            this.isOffScreen = true;
            clearInterval(this.interval);//pausa a execução do carrossel de imagens
        }
    }

    init(folder, capaBackground, capaForeground, title, description, metadata, sizeLimit){
        this.folder = folder;
        this.sizeLimit = sizeLimit;
        console.log('[ALBUM] init');
        this.buildAlbum(this.toAbsoluteURL(capaBackground, 'dist/assets/'), this.toAbsoluteURL(capaForeground, 'dist/assets/'), title, description, metadata);
        
        // this.openFullscreen();
        window.addEventListener('resize', this.resize.bind(this));
        window.addEventListener('scroll', this.scroll.bind(this));
        this.resize();
        this.scroll();

        if(this.options.slide.autoplay) {
            this.startPresentation();
        }
    }

    /**
     * Mostra a próxima 'página' de fotos (simula uma paginação com array)
     */
    nextPage() {
        const countPages = Math.ceil(this.firebaseRefs.length/this.sizeLimit);
        const pageItems = this.firebaseRefs.slice(this.page * this.sizeLimit, this.page * this.sizeLimit + this.sizeLimit);
        console.log('page index:', this.page, 'countPages:',countPages, this.page * this.sizeLimit, '-', this.page * this.sizeLimit + this.sizeLimit);
        let i = pageItems.length;

        this.particlesController.allParticlesArray = [];
        this.interactiveParticles = [];
        this.index = null;

        pageItems.forEach(photo => {
            console.log(photo);
            photo.getDownloadURL().then(url => {
                i--;

                // `url` is the download URL
                console.log(url);
                this.photos.push(url);

                const image = new Image();
                image.src = url;
                image.style.display = 'none';
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
                this.interactiveParticles.push(particle);

                if(i==0){
                    console.log('fim do carregamento');
                    this.albumEl.classList.remove('album--loading');
                    this.albumEl.classList.add('album--playing');
                    if(this.interactiveParticles.length){//FIX IT esse if parace um unreachable code
                        this.playing = true;
                        this.next();
                    }
                }

                console.log(i);
                if(i==0){
                    console.log('fim do carregamento');
                }
            }).catch(function(error) {
                // Handle any errors
                console.log('não foi possível fazer o download da imagem');
                i--;
            });
        });

        this.page++;
        if(this.page === countPages) {
            this.page = 0;
        }
        // this.page = (this.page === countPages - 1) ? 0 : this.page++;
    }

    /**
     * Inicia a apresentação automática das fotos se o modo options.slide.autoplay estiver ligado
     */
    async startPresentation(){
        this.particlesController = new Particles(this.particlesCanvasEl, this.options, this);
        this.particlesController.init();

        // https://gist.github.com/guilhermepontes/17ae0cc71fa2b13ea8c20c94c5c35dc4
        // fully random by @BetonMAN
        const shuffleArray = arr => arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);

        this.albumEl.classList.add('album--loading');

        const {items: allItems} = await this.firebase.listAll(this.folder);
        this.firebaseRefs = shuffleArray(allItems);
        console.log('length', this.firebaseRefs.length)
        if(this.firebaseRefs.length > 0){
            this.nextPage(); 
        } else {
            console.log('não há imagens');
            this.albumEl.classList.remove('album--loading');
            this.albumEl.classList.add('album--empty');
        }
    }

    pausePresentation() {
        if(this.playing) {
            this.albumEl.querySelector('.btnPlay').classList.add('paused');
            clearInterval(this.interval);
            this.playing = false;
            console.log(this.playing);
        } else {
            this.albumEl.querySelector('.btnPlay').classList.remove('paused');
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

    toAbsoluteURL(url, caminho) {
        if(!isWebUri(url)){
            var n = window.location.href.lastIndexOf("/");
            return window.location.href.slice(0, n) + '/' + caminho + url;
        }
        return url;
    }

    loadAllImages() {
        this.photos.forEach(photoUrl => {
           this.loadImage(photoUrl);
        });
    }

    /**
     * Baixa uma imagem da url e adiciona ao álbum
     * 
     * Utiliza Promisses para baixar as imagens de forma assíncrona.
     * @param {string} url Endreço da imagem
     */
    loadImage(url) {
        url = this.toAbsoluteURL(url, 'dist/assets/photos/');

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
            this.interactiveParticles.push(particle);
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
        if(this.interactiveParticles.length>0){
            if(this.index === null) {
                this.index = 0;
            } else {
                this.index++;
                if(this.index>=this.interactiveParticles.length){
                    this.index = 0;
                }
            }
            
            const percent = (this.index + 1) / this.interactiveParticles.length * 100;
            this.albumEl.querySelector('.progress-bar').style.width = percent + '%';

            this.show(this.interactiveParticles[this.index]);
        }
    }

}
