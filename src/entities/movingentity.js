import Entity from './entitiy';

export default class MovingEntity extends Entity {

    constructor(x = 0, y = 0, z = 0, rotation = 0, className = "", velocity = {x: 0, y: 0, z: 0}){
        super(x, y, z, rotation, className);

        this.velocity = velocity;

        setInterval(() => this.update(), 1000/60);

    }

    /**
     * Get the velocity of this Entity
     * @returns {Object} the velocity of this Entity
     */
    get velocity() {
        return this._velocity;
    }

    /**
     * Set the velocity of this Entity
     * @param {Object} value - the velocity of this Entity
     */
    set velocity(value) {
        this._velocity = value;
    }

    update(){
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.z += this.velocity.z;
    }

}