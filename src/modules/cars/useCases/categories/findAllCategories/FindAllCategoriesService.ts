import { Category } from "../../../models/Category";
import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";

class FindAllCategoriesService {
  constructor(private repository: ICategoriesRepository) {}

  execute(): Category[] {
    return this.repository.findAll();
  }
}

export { FindAllCategoriesService };
