import { Router } from "express";
import { IEntity } from "../shared/IEntity";
import { createRestError } from "../shared/createRestError";
import { NotFoundError } from "../shared/errors/NotFoundError";
import { uuid } from "../utils/uuid";

export class Controller<TEntity extends IEntity> {
  readonly router: Router = Router();
  private readonly data: TEntity[] = [];

  constructor(protected readonly path: string, data?: TEntity[]) {
    if (data) {
      this.data = data;
    }

    this.findAll();
    this.findById();
    this.insert();
    this.delete();
    this.update();
  }

  protected findAll() {
    this.router.get(`${this.path}`, (_, res) => {
      res.status(200).send(this.data);
    });
  }

  protected findById() {
    this.router.get(`${this.path}/:id`, (req, res) => {
      const entity = this.data.find((entity) => entity.id === req.params.id);
      if (entity) {
        res.status(200).send(entity);
      } else {
        res
          .status(404)
          .send(
            createRestError(
              NotFoundError.name,
              "Error while finding entity by id. Entity not found."
            )
          );
      }
    });
  }

  protected insert() {
    this.router.post(`${this.path}`, (req, res) => {
      const entity: TEntity = req.body;
      entity.id = uuid();
      this.data.push(entity);
      res.status(201).send(entity);
    });
  }

  protected delete() {
    this.router.delete(`${this.path}/:id`, (req, res) => {
      const index = this.data.findIndex(
        (entity) => entity.id === req.params.id
      );

      if (index !== -1) {
        this.data.splice(index, 1);
        res.status(200).send(true);
      } else {
        res
          .status(404)
          .send(
            createRestError(
              NotFoundError.name,
              "Error while deleting entity by id. Entity not found"
            )
          );
      }
    });
  }

  protected update() {
    this.router.put(`${this.path}/:id`, (req, res) => {
      const index = this.data.findIndex(
        (entity) => entity.id === req.params.id
      );

      if (index !== -1) {
        const entity: TEntity = req.body;
        this.data.splice(index, 1, entity);
        res.status(200).send(entity);
      } else {
        res
          .status(404)
          .send(
            createRestError(
              NotFoundError.name,
              "Error while updating entity by id. Entity not found"
            )
          );
      }
    });
  }
}
