import { parse } from "csv-parse";
import fs from "fs";

import { Category } from "../../../models/Category";
import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoriesService {
  constructor(private repository: ICategoriesRepository) {}

  private loadCategories(
    file: Express.Multer.File
  ): Promise<IImportCategory[]> {
    const categories: IImportCategory[] = [];
    const stream = fs.createReadStream(file.path).pipe(parse());

    const promise: Promise<IImportCategory[]> = new Promise(
      (resolve, reject) => {
        stream
          .on("data", async (line) => {
            const [name, description] = line;

            categories.push({
              name,
              description,
            });
          })
          .on("end", () => {
            fs.promises.unlink(file.path);
            resolve(categories);
          })
          .on("error", (err) => {
            reject(err);
          });
      }
    );

    return promise;
  }

  async execute(file: Express.Multer.File): Promise<Category[]> {
    const importCategories = await this.loadCategories(file);

    const categories = importCategories.map((item) => {
      const { name, description } = item;

      const existCategory = this.repository.findByName(name);

      if (existCategory) {
        return existCategory;
      }

      return this.repository.create({ name, description });
    });

    return categories;
  }
}

export { ImportCategoriesService };
