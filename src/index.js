import Particles from './Particles';

document.addEventListener("DOMContentLoaded", function(event) {
    const options = {
        particles: {
            totalNumber: 30,
            numberInteractiveParticles: 20,
            minRadius: 7,
            maxRadius: 15,
        },
        links: {
            maxDistance: 250,
            opacity: .7, /* máxima opacidade */
            width: 1,
        },
    };

    const particles = new Particles(document.querySelector("#canvas"), options);
    particles.init();
});
