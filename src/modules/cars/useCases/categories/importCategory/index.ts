import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRepository";
import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesService } from "./ImportCategoriesService";

const repository = CategoriesRepository.getInstance();
const service = new ImportCategoriesService(repository);
const controller = new ImportCategoriesController(service);

export { controller as ImportCategoriesController };
