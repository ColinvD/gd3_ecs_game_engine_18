import Engine from "./engine";
import MovementSystem from "./systems/movement.system";
import Entity from "./entities/entitiy";
import Transform from "./components/transform.component";
import Velocity from "./components/velocity.component";
import Vec3 from './utils/vec3.utils.js';
import Destination from "./components/destination.component";
import SteeringSystem from "./systems/steering.system";
import RenderSystem from "./systems/render.system";
import CollisionSystem from "./systems/collision.system";
import Apple from "./components/apple.component";
import CircleCollider from "./components/circleCollider.component";

export default class Main {

    constructor() {

        const engine = new Engine();
        engine.addSystem(new MovementSystem());
        engine.addSystem(new SteeringSystem());
        engine.addSystem(new CollisionSystem());
        engine.addSystem(new RenderSystem());

        var context = document.getElementById("canvas").getContext("2d");

        for (var i = 0; i < 5; i++) {
          CreateBall(engine, context);
          // const player = new Entity();
          // player.addComponent(new Transform(new Vec3(0, 100, 0)));
          // player.addComponent(new Apple(40, context));
          // player.addComponent(new Velocity(new Vec3(Math.random()+1, Math.random()+1, 1), new Vec3(1, 1, 1)));
          // player.addComponent(new Destination(new Vec3(500, 1, 1)));
          // player.addComponent(new CircleCollider(40));
          //
          // engine.addEntity(player);
        }

        window.addEventListener("click", function(){ CreateBall(engine, context);});
        window.addEventListener("keydown", event => {
        if (event.isComposing || event.keyCode === 90) {
          engine.frameRate = 1;
        }
        if (event.isComposing || event.keyCode === 88) {
          engine.frameRate = 60;
        }
        // do something
        });

        engine.start();

        // just for fun: na 5 seconden zetten we de framerate naar 1fps
        //setTimeout(() => engine.frameRate = 1, 5000);
    }

}

function CreateBall(engine, context) {
  console.log("hey");
  var ball = new Entity();
  ball.addComponent(new Transform(new Vec3(0, 100, 0)));
  ball.addComponent(new Apple(40, context));
  ball.addComponent(new Velocity(new Vec3(Math.random()+1, Math.random()+1, 1), new Vec3(1, 1, 1)));
  ball.addComponent(new CircleCollider(40));

  engine.addEntity(ball);
}
