import Vec3 from '../utils/vec3.utils.js';

class Apple {

    constructor(size = new Vec3(0, 0, 0), context) {
        this.ctx = context;
        this.size = size;
    }

}

export default Apple;
