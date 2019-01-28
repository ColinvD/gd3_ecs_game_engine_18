import Engine from "./engine";
import MovementSystem from "./systems/movement.system";
import Entity from "./entities/entitiy";
import Transform from "./components/transform.component";
import Velocity from "./components/velocity.component";
import Vec3 from './utils/vec3.utils.js';
import Destination from "./components/destination.component";
import SteeringSystem from "./systems/steering.system";
import RenderSystem from "./systems/render.system";

export default class Main {

    constructor() {

        const engine = new Engine();
        engine.addSystem(new MovementSystem());
        engine.addSystem(new SteeringSystem());
        engine.addSystem(new RenderSystem());

        var context = document.getElementById("canvas").getContext("2d");

        for (var i = 0; i < 10; i++) {
          const player = new Entity();
          player.addComponent(new Transform(new Vec3(0, 100, 0)));
          player.addComponent(new Apple(20, context));
          player.addComponent(new Velocity(new Vec3(Math.random()+1, Math.random()+1, 1), new Vec3(1, 1, 1)));
          player.addComponent(new Destination(new Vec3(500, 1, 1)));

          engine.addEntity(player);
        }

        engine.start();

        // just for fun: na 5 seconden zetten we de framerate naar 1fps
        //setTimeout(() => engine.frameRate = 1, 5000);
    }

}
