import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import { InsertPostRequest } from "../types/request/post/insertPostRequest";
import InsertPostRequestDTO from "../dto/post/insertPostRequestDto";
import PostService from "../services/postService";
import { GetPostResponse } from "../types/response/post/getPostResponse";
import { PostId } from "../types/request/params";
import { UpdatePostRequest } from "../types/request/post/updatePostRequest";
import UpdatePostRequestDTO from "../dto/post/updatePostRequestDto";

export default class PostController {
  private _postService: PostService;

  constructor() {
    this._postService = new PostService();
  }
  public async insertPost(
    req: CustomRequest<IEmptyObject, IEmptyObject, InsertPostRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertPostRequestDTO = new InsertPostRequestDTO(
        req.body,
        req.userId!,
        req.adminRef!
      );
      await this._postService.insertPost(insertPostRequestDTO);
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = {};
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async getPosts(
    req: CustomRequest<IEmptyObject, Array<GetPostResponse>, IEmptyObject>,
    res: Response<APIResponse<Array<GetPostResponse>>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<Array<GetPostResponse>>();
      const postResponse = await this._postService.getPosts(req.userId!);
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = postResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async getPost(
    req: CustomRequest<PostId, GetPostResponse, IEmptyObject>,
    res: Response<APIResponse<GetPostResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetPostResponse>();
      const postResponse = await this._postService.getPost(req.params.postId);
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = postResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async updatePost(
    req: CustomRequest<PostId, IEmptyObject, UpdatePostRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updatePostRequestDTO = new UpdatePostRequestDTO(
        req.body,
        req.params.postId,
        req.userId!
      );
      await this._postService.updatePost(updatePostRequestDTO);
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = {};
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
