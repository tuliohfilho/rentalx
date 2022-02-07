import { Category } from "../../../models/Category";
import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private repository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): Category {
    const categoryExists = this.repository.findByName(name);

    if (categoryExists) throw new Error("Category alredy existis!");

    return this.repository.create({ name, description });
  }
}

export { CreateCategoryService };
