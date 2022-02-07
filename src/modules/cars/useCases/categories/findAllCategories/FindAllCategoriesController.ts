import { Request, Response } from "express";

import { FindAllCategoriesService } from "./FindAllCategoriesService";

class FindAllCategoriesController {
  constructor(private service: FindAllCategoriesService) {}

  handle(request: Request, response: Response): Response {
    const allCategories = this.service.execute();

    return response.status(200).json(allCategories);
  }
}

export { FindAllCategoriesController };
