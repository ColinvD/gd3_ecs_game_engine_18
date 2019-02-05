import Vec3 from '../utils/vec3.utils.js';

class CircleCollider {

    constructor(radius = 1) {
        this.radius = radius;
        this.sqrRadius = radius*radius;
        this.collisionAmount = 0;
    }

}

export default CircleCollider;
