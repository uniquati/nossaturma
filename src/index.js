import Particles from './Particles';

document.addEventListener("DOMContentLoaded", function(event) {
    const particles = new Particles(document.querySelector("#canvas"));
    particles.init();
});
