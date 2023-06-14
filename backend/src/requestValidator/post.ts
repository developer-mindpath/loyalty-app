import Joi from "joi";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import { InsertPostRequest } from "../types/request/post/insertPostRequest";
import { PostId } from "../types/request/params";
import { UpdatePostRequest } from "../types/request/post/updatePostRequest";

export = {
  0: joiValidationRequest<PostId, IEmptyObject>({
    path: {
      postId: Joi.number().required(),
    },
  }),
  1: joiValidationRequest<IEmptyObject, InsertPostRequest, IEmptyObject>({
    body: {
      post_tagline: Joi.string().optional(),
      post_description: Joi.string().optional(),
      post_image: Joi.string().optional(),
      post_status: Joi.string().optional(),
      post_date: Joi.string().optional(),
      status: Joi.string().optional(),
    },
  }),
  2: joiValidationRequest<IEmptyObject, UpdatePostRequest, IEmptyObject>({
    body: {
      post_tagline: Joi.string().optional(),
      post_description: Joi.string().optional(),
      post_image: Joi.string().optional(),
      post_status: Joi.string().optional(),
      post_date: Joi.string().optional(),
      status: Joi.string().optional(),
    },
  }),
};
