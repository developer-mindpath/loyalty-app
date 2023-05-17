import express, { Request, Response } from "express";
import StoreController from "../controller/storeController";

const storeController = new StoreController();
const router = express.Router();

router.post("/save", (req: Request, res: Response) =>
  storeController.insertStore(req, res)
);

module.exports = { router, basePath: "/api/store" };
