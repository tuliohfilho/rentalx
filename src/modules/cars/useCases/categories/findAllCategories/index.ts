import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRepository";
import { FindAllCategoriesController } from "./FindAllCategoriesController";
import { FindAllCategoriesService } from "./FindAllCategoriesService";

const repository = CategoriesRepository.getInstance();
const service = new FindAllCategoriesService(repository);
const controller = new FindAllCategoriesController(service);

export { controller as FindAllCategoryController };
