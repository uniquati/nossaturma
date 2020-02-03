import Particles from './Particles';

document.addEventListener("DOMContentLoaded", function(event) {
    const options = {
        particles: {
            number: 20,
            minRadius: 10,
            maxRadius: 15,
        },
        links: {
            maxDistance: 250,
            opacity: 1, /* máxima opacidade */
            width: 4,
        },
    };

    const particles = new Particles(document.querySelector("#canvas"), options);
    particles.init();
});