import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryService } from "./CreateCategoryService";

const repository = CategoriesRepository.getInstance();
const service = new CreateCategoryService(repository);
const controller = new CreateCategoryController(service);

export { controller as CreateCategoryController };
