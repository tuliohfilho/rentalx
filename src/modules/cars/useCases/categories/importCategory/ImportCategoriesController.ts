import { Response, Request } from "express";

import { ImportCategoriesService } from "./ImportCategoriesService";

class ImportCategoriesController {
  constructor(private service: ImportCategoriesService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const categories = await this.service.execute(file);

    return response.status(201).json({
      categories,
      message: "Categories criated!",
    });
  }
}

export { ImportCategoriesController };
