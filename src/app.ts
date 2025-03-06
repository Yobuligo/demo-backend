import express from "express";
import { PersonController } from "./controllers/PersonController";

const server = express();
server.use(new PersonController().router);
server.listen(5000);
