/* eslint-disable import/first */
import express, { NextFunction, Request, Response } from "express";
import { config } from "dotenv";
config();

import { readdirSync } from "fs";
import cors from "cors";
import path from "path";
import AppDataSource from "./database";
import { ExpressError } from "./helper/errorHandler";

const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

(async function () {
  try {
    await AppDataSource.initialize();
    console.log("connection created");
  } catch (error) {
    console.log(`unable to create connection ${error}`);
  }
})();

readdirSync(path.resolve(__dirname, "routes")).forEach((file) => {
  if (
    (file.includes(".js") || file.includes(".ts")) &&
    !file.includes(".js.")
  ) {
    const { router, basePath } = require(`${__dirname}/routes/${file}`);
    app.use(basePath, router);
  }
});

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send({ message: "Hello world" });
});

app.use(function (
  err: ExpressError,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  return ExpressError.errorHandler(err.status, err.statusText, err.errors, res);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
