import { Request, Response, Router } from "express";

import { FindAllSpecificationsController } from "../modules/cars/useCases/spacifications";
import { CreateSpecificationController } from "../modules/cars/useCases/spacifications/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.get("/", (request: Request, response: Response) => {
  return FindAllSpecificationsController.handle(request, response);
});

specificationsRoutes.post("/", (request: Request, response: Response) => {
  return CreateSpecificationController.handle(request, response);
});

export { specificationsRoutes };
