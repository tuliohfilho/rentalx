import { SpecificationsRepository } from "../../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationService } from "./CreateSpecificationService";

const repository = SpecificationsRepository.getInstance();
const service = new CreateSpecificationService(repository);
const controller = new CreateSpecificationController(service);

export { controller as CreateSpecificationController };
