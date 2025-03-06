import express from "express";
import { CustomerController } from "./controllers/CustomerController";
import { PersonController } from "./controllers/PersonController";

const server = express();
server.use(new PersonController().router);
server.use(new CustomerController().router);
server.listen(5000);
