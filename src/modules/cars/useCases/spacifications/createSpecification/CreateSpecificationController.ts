import { Response, Request } from "express";

import { CreateSpecificationService } from "./CreateSpecificationService";

class CreateSpecificationController {
  constructor(private service: CreateSpecificationService) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const specification = this.service.execute({ name, description });

    return response.status(201).json({
      specification,
      success: "Specification Created!",
    });
  }
}

export { CreateSpecificationController };
