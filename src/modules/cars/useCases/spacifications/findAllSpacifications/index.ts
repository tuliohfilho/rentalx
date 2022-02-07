import { SpecificationsRepository } from "../../../repositories/implementations/SpecificationsRepository";
import { FindAllSpecificationsController } from "./FindAllSpecificationsController";
import { FindAllSpecificationsService } from "./FindAllSpecificationsService";

const repository = SpecificationsRepository.getInstance();
const service = new FindAllSpecificationsService(repository);
const controller = new FindAllSpecificationsController(service);

export { controller as FindAllSpecificationsController };
