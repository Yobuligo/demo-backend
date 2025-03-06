import { IEntity } from "../IEntity";

export interface ICustomer extends IEntity {
  firstname: string;
  lastname: string;
}
