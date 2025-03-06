import { IPerson } from "../shared/models/IPerson";
import { Controller } from "./Controller";

export class PersonController extends Controller<IPerson> {
  constructor() {
    super("/persons");
  }
}
