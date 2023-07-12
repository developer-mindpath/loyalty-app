import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import ProductService from "../services/productService";
import { StoreName } from "../types/request/params";
import { ProductResponse } from "../types/response/product/productResponse";
import { CollectionResponse } from "../types/response/product/collectionResponse";

export default class ProductController {
  private _productService: ProductService;

  constructor() {
    this._productService = new ProductService();
  }
  public async getProducts(
    req: CustomRequest<
      IEmptyObject,
      ProductResponse[],
      IEmptyObject,
      StoreName
    >,
    res: Response<APIResponse<Array<ProductResponse>>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<Array<ProductResponse>>();
      const productResponse = await this._productService.getProducts(
        req.query.storeName
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = productResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async getCollections(
    req: CustomRequest<
      IEmptyObject,
      CollectionResponse[],
      IEmptyObject,
      StoreName
    >,
    res: Response<APIResponse<Array<CollectionResponse>>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<Array<CollectionResponse>>();
      const collectionResponse = await this._productService.getCollections(
        req.query.storeName
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = collectionResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }
}
