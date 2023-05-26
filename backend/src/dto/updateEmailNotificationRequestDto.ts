import { UpdateEmailNotificationRequest } from "../types/request/emailNotification/updateEmailNotificationRequest";

export default class UpdateEmailNotificationRequestDTO {
  email_notification_key: string;
  email_notification_enabled: number;
  email_notification_subject: string;
  email_notfication_title: string;
  email_notfication_subtitle: string;
  email_notfication_button: string;
  email_notfication_subtext: string;
  email_notfication_footer_text: string;
  email_notfication_footer_address: string;
  email_notfication_unsubscribe_text: string;
  email_notfication_subscription_source: string;
  status: string;
  updated_by: number;
  emailProgramId: number;

  constructor(body: UpdateEmailNotificationRequest, emailProgramId: number) {
    this.email_notification_key = body.email_notification_key;
    this.email_notification_enabled = body.email_notification_enabled;
    this.email_notification_subject = body.email_notification_subject;
    this.email_notfication_title = body.email_notfication_title;
    this.email_notfication_subtitle = body.email_notfication_subtitle;
    this.email_notfication_button = body.email_notfication_button;
    this.email_notfication_subtext = body.email_notfication_subtext;
    this.email_notfication_footer_text = body.email_notfication_footer_text;
    this.email_notfication_footer_address =
      body.email_notfication_footer_address;
    this.email_notfication_unsubscribe_text =
      body.email_notfication_unsubscribe_text;
    this.email_notfication_subscription_source =
      body.email_notfication_subscription_source;
    this.status = body.status;
    this.updated_by = body.updated_by;
    this.emailProgramId = emailProgramId;
  }
}
