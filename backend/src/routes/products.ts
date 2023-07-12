import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { checkToken } from "../middleware/checkToken";
import ProductController from "../controller/productController";
import { StoreName } from "../types/request/params";
import { ProductResponse } from "../types/response/product/productResponse";
import { CollectionResponse } from "../types/response/product/collectionResponse";

const productController = new ProductController();
const router = express.Router();

router.get<
  PathParams,
  ResponseBody<Array<ProductResponse>>,
  RequestBody,
  QueryParams<StoreName>
>("/", checkToken, (...arg) => productController.getProducts(...arg));

router.get<
  PathParams,
  ResponseBody<Array<CollectionResponse>>,
  RequestBody,
  QueryParams<StoreName>
>("/collections", checkToken, (...arg) =>
  productController.getCollections(...arg)
);

module.exports = { router, basePath: "/api/products" };
