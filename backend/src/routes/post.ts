import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { doValidation } from "../helper/joi";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { checkToken } from "../middleware/checkToken";
import { InsertPostRequest } from "../types/request/post/insertPostRequest";
import postValidations from "../requestValidator/post";
import PostController from "../controller/postController";
import { GetPostResponse } from "../types/response/post/getPostResponse";
import { PostId } from "../types/request/params";
import { UpdatePostRequest } from "../types/request/post/updatePostRequest";

const postController = new PostController();
const router = express.Router();

router.get<
  PathParams,
  ResponseBody<Array<GetPostResponse>>,
  RequestBody,
  QueryParams
>("/all", checkToken, (...arg) => postController.getPosts(...arg));

router.get<
  PathParams<PostId>,
  ResponseBody<GetPostResponse>,
  RequestBody,
  QueryParams
>("/:postId", checkToken, doValidation(postValidations[0]), (...arg) =>
  postController.getPost(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertPostRequest>,
  QueryParams
>("/", checkToken, doValidation(postValidations[1]), (...arg) =>
  postController.insertPost(...arg)
);

router.patch<
  PathParams<PostId>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdatePostRequest>,
  QueryParams
>("/", checkToken, doValidation(postValidations[2]), (...arg) =>
  postController.updatePost(...arg)
);

module.exports = { router, basePath: "/api/post" };
