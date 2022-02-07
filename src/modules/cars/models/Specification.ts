import { v4 as uuidV4 } from "uuid";

class Specification {
  id?: string;
  name: string;
  description: string;
  create_at: Date;

  constructor(name?: string, description?: string) {
    this.name = name;
    this.description = description;

    if (!this.id) this.id = uuidV4();
    if (!this.create_at) this.create_at = new Date();
  }
}

export { Specification };
