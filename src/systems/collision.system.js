import System from "./system";
import Transform from "../components/transform.component";
import CircleCollider from "../components/circleCollider.component";

class CollisionSystem extends System {

    getRequiredComponents(){
        return [ Transform, CircleCollider ];
    }

    updateEntity = (entity, entityPosition) => {
        const { transform, circleCollider } = entity.components;
        var deltaX;
        var deltaY;
        circleCollider.collisionAmount = 0;
        for (var i = 0; i < this.targetEntities.length; i++) {
          const otherEntity = this.targetEntities[i];
          if(otherEntity === entity || otherEntity < entityPosition)
            continue;

          var otherTrans = otherEntity.getComponent("transform");
          deltaX = transform.position.x - otherTrans.position.x;
          deltaY = transform.position.y - otherTrans.position.y;
          if(deltaX*deltaX+deltaY*deltaY <= circleCollider.sqrRadius){
            circleCollider.collisionAmount++;
          }
        }
    }

}

export default CollisionSystem;
