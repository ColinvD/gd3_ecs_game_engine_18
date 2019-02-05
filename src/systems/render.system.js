import System from "./system";
import Transform from "../components/transform.component";
import Apple from "../components/apple.component";
import CircleCollider from "../components/circleCollider.component";

var colors = ["AliceBlue",
              "AntiqueWhite",
              "Aqua",
              "Aquamarine",
              "Azure",
              "Beige",
              "Black",
              "BlanchedAlmond",
              "Blue",
              "BlueViolet",
              "Brown",
              "BurlyWood",
              "CadetBlue",
              "Chartreuse",
              "Chocolate",
              "Coral",
              "CornflowerBlue",
              "Cornsilk",
              "Crimson",
              "Cyan",
              "DarkBlue",
              "DarkCyan",
              "DarkGoldenRod",
              "DarkGray",
              "DarkGrey",
              "DarkGreen",
              "DarkKhaki",
              "DarkMagenta",
              "DarkOliveGreen",
              "DarkOrange",
              "DarkOrchid",
              "DarkRed",
              "DarkSalmon",
              "DarkSeaGreen",
              "DarkSlateBlue",
              "DarkSlateGray",
              "DarkSlateGrey",
              "DarkTurquoise",
              "DarkViolet",
              "DeepPink",
              "DeepSkyBlue",
              "DimGray",
              "DimGrey",
              "DodgerBlue",
              "FireBrick",
              "FloralWhite",
              "ForestGreen"
              ]

class RenderSystem extends System {

    getRequiredComponents(){
        return [ Transform, Apple, CircleCollider ];
    }

    updateEntity = entity => {
        const { transform, apple, circleCollider } = entity.components;

        apple.ctx.beginPath();
        apple.ctx.arc(transform.position.x, transform.position.y, apple.size/2, 0, 2 * Math.PI);
        apple.ctx.fillStyle = colors[circleCollider.collisionAmount%colors.length];
        apple.ctx.fill();
        apple.ctx.font = "30px Arial";
        apple.ctx.fillStyle = "black";
        apple.ctx.fillText(circleCollider.collisionAmount, transform.position.x-10, transform.position.y+10);
        apple.ctx.stroke();

        //console.log("dit is mijn geweldige tekening");
    }

}

export default RenderSystem;
