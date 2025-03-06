import express from "express";

const server = express();
server.get("/", (_, res) => {
  res.status(200).send("Hello world");
});
server.listen(5000);
