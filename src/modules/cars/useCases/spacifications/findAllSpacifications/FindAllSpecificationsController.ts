import { Response, Request } from "express";

import { FindAllSpecificationsService } from "./FindAllSpecificationsService";

class FindAllSpecificationsController {
  constructor(private service: FindAllSpecificationsService) {}

  handle(request: Request, response: Response) {
    const allSpecifications = this.service.execute();

    return response.status(200).json(allSpecifications);
  }
}

export { FindAllSpecificationsController };
