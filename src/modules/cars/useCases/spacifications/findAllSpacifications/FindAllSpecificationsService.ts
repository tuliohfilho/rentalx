import { Specification } from "../../../models/Specification";
import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";

class FindAllSpecificationsService {
  constructor(private repository: ISpecificationsRepository) {}

  execute(): Specification[] {
    return this.repository.findAll();
  }
}

export { FindAllSpecificationsService };
