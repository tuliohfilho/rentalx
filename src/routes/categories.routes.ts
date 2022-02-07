import { Request, Response, Router } from "express";
import multer from "multer";

import {
  CreateCategoryController,
  FindAllCategoryController,
  ImportCategoriesController,
} from "../modules/cars/useCases/categories";

const categoriesRoutes = Router();

categoriesRoutes.get("/", (request: Request, response: Response) => {
  return FindAllCategoryController.handle(request, response);
});

categoriesRoutes.post("/", (request: Request, response: Response) => {
  return CreateCategoryController.handle(request, response);
});

const upload = multer({
  dest: "./tmp",
});
categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return ImportCategoriesController.handle(request, response);
});

export { categoriesRoutes };
