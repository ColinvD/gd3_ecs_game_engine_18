import System from "./system";
import Transform from "../components/transform.component";
import Apple from "../components/apple.component";

class RenderSystem extends System {

    getRequiredComponents(){
        return [ Transform, Apple ];
    }

    updateEntity = entity => {
        const { transform, apple } = entity.components;

        apple.ctx.beginPath();
        apple.ctx.arc(transform.position.x, transform.position.y, apple.size, 0, 2 * Math.PI);
        apple.ctx.stroke();

        console.log("dit is mijn geweldige tekening");
    }

}

export default RenderSystem;
