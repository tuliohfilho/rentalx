import { Specification } from "../../../models/Specification";
import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private repository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): Specification {
    const specificationExists = this.repository.findByName(name);

    if (specificationExists) throw new Error("Specification alredy existis!");

    return this.repository.create({ name, description });
  }
}

export { CreateSpecificationService };
