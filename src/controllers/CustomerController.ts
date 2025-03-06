import { ICustomer } from "../shared/models/ICustomers";
import { uuid } from "../utils/uuid";
import { Controller } from "./Controller";

export class CustomerController extends Controller<ICustomer> {
  constructor() {
    super("/customers", [
      { id: uuid(), firstname: "Stacey", lastname: "Starfish" },
      { id: uuid(), firstname: "Alex", lastname: "Ant" },
      { id: uuid(), firstname: "Bertha", lastname: "Bear" },
    ]);
  }
}
