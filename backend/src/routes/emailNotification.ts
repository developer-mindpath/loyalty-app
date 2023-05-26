import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import {
  DeleteEmailNotificationProgramParams,
  GetEmailNotificationProgramParams,
  GetEmailNotificationsProgramParams,
  UpdateEmailNotificationProgramParams,
} from "../types/request/params";
import { InsertEmailNotificationRequest } from "../types/request/emailNotification/insertEmailNotificationRequest";
import EmailNotificationController from "../controller/emailNotificationController";
import { GetEmailNotificationResponse } from "../types/response/emailNotification/getEmailNotificationResponse";
import { GetEmailNotificationsResponse } from "../types/response/emailNotification/getEmailNotificationsResponse";
import { UpdateEmailNotificationRequest } from "../types/request/emailNotification/updateEmailNotificationRequest";
import { doValidation } from "../helper/joi";
import emailNotificationValidations from "../requestValidator/emailNotification";

const emailNotificationController = new EmailNotificationController();
const router = express.Router();

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertEmailNotificationRequest>,
  QueryParams
>("/email", doValidation(emailNotificationValidations[0]), (...arg) =>
  emailNotificationController.insertEmailNotification(...arg)
);

router.get<
  PathParams<GetEmailNotificationProgramParams>,
  ResponseBody<GetEmailNotificationResponse>,
  RequestBody,
  QueryParams
>(
  "/email/:emailProgramId",
  doValidation(emailNotificationValidations[1]),
  (...arg) => emailNotificationController.getEmailNotification(...arg)
);

router.get<
  PathParams<GetEmailNotificationsProgramParams>,
  ResponseBody<Array<GetEmailNotificationsResponse>>,
  RequestBody,
  QueryParams
>(
  "/email/all/:userId",
  doValidation(emailNotificationValidations[2]),
  (...arg) => emailNotificationController.getEmailNotifications(...arg)
);

router.patch<
  PathParams<UpdateEmailNotificationProgramParams>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateEmailNotificationRequest>,
  QueryParams
>(
  "/email/:emailProgramId",
  doValidation(emailNotificationValidations[3]),
  (...arg) => emailNotificationController.updateEmailNotification(...arg)
);

router.delete<
  PathParams<DeleteEmailNotificationProgramParams>,
  ResponseBody<IEmptyObject>,
  RequestBody<IEmptyObject>,
  QueryParams
>(
  "/email/:emailProgramId",
  doValidation(emailNotificationValidations[4]),
  (...arg) => emailNotificationController.deleteEmailNotification(...arg)
);

module.exports = { router, basePath: "/api/program" };
