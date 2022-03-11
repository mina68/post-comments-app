import Container from "typedi"
import entities from "../database/entity"

export default () => {
    entities.forEach(entity => {
        Container.set(entity.name, entity.model);
    });
}