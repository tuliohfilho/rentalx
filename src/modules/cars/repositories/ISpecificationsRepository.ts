import { Specification } from "../models/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findAll(): Specification[];
  findByName(name: string): Specification;
  create({ name, description }: ICreateSpecificationDTO): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
