/* eslint-disable import/first */
import express, { NextFunction, Request, Response } from "express";
import { config } from "dotenv";
config();

import { readdirSync } from "fs";
import cors from "cors";
import path from "path";
import AppDataSource from "./database";
import { ExpressError } from "./helper/errorHandler";
import { webhookRoute } from "./routes/webhook";

const port = process.env.PORT || 3001;
const app = express();
app.use("/webhook", express.raw({ type: "*/*" }), webhookRoute);
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
    !file.includes(".js.") &&
    !file.includes("webhook")
  ) {
    const { router, basePath } = require(`${__dirname}/routes/${file}`);
    app.use(basePath, router);
  }
});

app.get("/health", (_req: Request, res: Response) => {
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

// To Server all the Static Files
app.use(express.static(path.join(__dirname, "../build")));

// Then if dosent match any file redirect to website
app.get("/*", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
