import Joi from "joi";
import { InsertEmailNotificationRequest } from "../types/request/emailNotification/insertEmailNotificationRequest";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import {
  DeleteEmailNotificationProgramParams,
  GetEmailNotificationProgramParams,
  GetEmailNotificationsProgramParams,
  UpdateEmailNotificationProgramParams,
} from "../types/request/params";
import { UpdateEmailNotificationRequest } from "../types/request/emailNotification/updateEmailNotificationRequest";

export = {
  0: joiValidationRequest<IEmptyObject, InsertEmailNotificationRequest>({
    body: {
      email_notification_key: Joi.string().optional(),
      email_notification_enabled: Joi.number().optional(),
      email_notification_subject: Joi.string().optional(),
      email_notfication_title: Joi.string().optional(),
      email_notfication_subtitle: Joi.string().optional(),
      email_notfication_button: Joi.string().optional(),
      email_notfication_subtext: Joi.string().optional(),
      email_notfication_footer_text: Joi.string().optional(),
      email_notfication_footer_address: Joi.string().optional(),
      email_notfication_unsubscribe_text: Joi.string().optional(),
      email_notfication_subscription_source: Joi.string().optional(),
      status: Joi.string().optional(),
      created_by: Joi.number().optional(),
      updated_by: Joi.number().optional(),
      user_id: Joi.number().required(),
      admin_ref: Joi.number().required(),
    },
  }),
  1: joiValidationRequest<GetEmailNotificationProgramParams, IEmptyObject>({
    path: {
      emailProgramId: Joi.number().required(),
    },
  }),
  2: joiValidationRequest<GetEmailNotificationsProgramParams, IEmptyObject>({
    path: {
      userId: Joi.number().required(),
    },
  }),
  3: joiValidationRequest<
    UpdateEmailNotificationProgramParams,
    UpdateEmailNotificationRequest
  >({
    path: {
      emailProgramId: Joi.number().required(),
    },
    body: {
      email_notification_key: Joi.string().optional(),
      email_notification_enabled: Joi.number().optional(),
      email_notification_subject: Joi.string().optional(),
      email_notfication_title: Joi.string().optional(),
      email_notfication_subtitle: Joi.string().optional(),
      email_notfication_button: Joi.string().optional(),
      email_notfication_subtext: Joi.string().optional(),
      email_notfication_footer_text: Joi.string().optional(),
      email_notfication_footer_address: Joi.string().optional(),
      email_notfication_unsubscribe_text: Joi.string().optional(),
      email_notfication_subscription_source: Joi.string().optional(),
      status: Joi.string().optional(),
      updated_by: Joi.number().optional(),
    },
  }),
  4: joiValidationRequest<DeleteEmailNotificationProgramParams, IEmptyObject>({
    path: {
      emailProgramId: Joi.number().required(),
    },
  }),
};
