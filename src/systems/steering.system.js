import System from "./system";
import Velocity from "../components/velocity.component";
import Transform from "../components/transform.component";
// import Destination from "../components/destination.component";

class SteeringSystem extends System {

    getRequiredComponents() {
        // return [ Velocity, Transform, Destination ];
          return [ Velocity, Transform ];
    }

    updateEntity = entity => {
        // const { transform, velocity, destination } = entity.components;
        const { transform, velocity } = entity.components;
        /*
        const speed = 5;
        const desiredStep = transform.position.clone().sub(destination.position);

        desiredStep.normalize();

        const desiredVelocity = desiredStep.clone();
        desiredVelocity.x *= speed;
        desiredVelocity.y *= speed;
        desiredVelocity.z *= speed;

        const steeringForce = desiredVelocity.sub(velocity);

        //velocity = velocity.add() + steeringForce / mass;
        */

        if((transform.position.x < 50 && velocity.position.x < 0) || (transform.position.x > 250 && velocity.position.x > 0))
        {
            velocity.position.x *= -1
        }
        if((transform.position.y < 50 && velocity.position.y < 0) || (transform.position.y > 250 && velocity.position.y > 0))
        {
            velocity.position.y *= -1
        }
    }

}

export default SteeringSystem;
