import { Specification } from "../../models/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private spacifications: Specification[];
  private static INSTANCE: SpecificationsRepository;

  private constructor() {
    this.spacifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE)
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();

    return SpecificationsRepository.INSTANCE;
  }

  findAll(): Specification[] {
    return this.spacifications;
  }

  findByName(name: string): Specification {
    return this.spacifications.find(
      (spacification) => spacification.name === name
    );
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
    });

    this.spacifications.push(specification);

    return specification;
  }
}

export { SpecificationsRepository };
