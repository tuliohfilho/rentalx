import { Response, Request } from "express";

import { CreateCategoryService } from "./CreateCategoryService";

class CreateCategoryController {
  constructor(private service: CreateCategoryService) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const category = this.service.execute({ name, description });

    return response.status(201).json({
      category,
      success: "Category Created!",
    });
  }
}

export { CreateCategoryController };
