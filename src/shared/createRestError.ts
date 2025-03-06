import { IRestError } from "./IRestError";

export const createRestError = (type: string, message: string): IRestError => ({
  type,
  message,
});
