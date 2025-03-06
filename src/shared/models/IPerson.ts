import { IEntity } from "../IEntity";

export interface IPerson extends IEntity {
  age: number;
  firstname: string;
  lastname: string;
}
