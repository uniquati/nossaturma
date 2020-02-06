/**
 * Representa uma partícula
 */
export default class Particle {

    /**
     * 
     * @param {number} x coordenada x
     * @param {number} y coordenada y
     * @param {number} r raio
     * @param {string} color cor
     * @param {number} opacity opacidade
     * @param {boolean} interactive é interativa ou decorativa
     * @param {object} data quaisquer informações podem ser associadas à particula
     */
    constructor(x,y, r, color, interactive, data) {
        this.radius = r;
        this.x = x;
        this.y = y;
        this.vx = 1;
        this.vy = 1;
        this.direction = { x: Math.floor((Math.random()*5))/2-1, y: Math.floor((Math.random()*5))/2-1 };//-1, -0.5, 0, 0.5, 1
        this.color = color;
        // this.opacity = opacity;//FIX IT opacidade das particulas não está sendo aplicada
        this.isInteractive = interactive;
        this.data = data;
        this.visited = false,
        this.active = false,
        this.animation = {
            state : 'adding',
            radius: 0,
        };
    }
}