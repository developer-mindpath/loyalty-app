export type UpdateEmailNotificationRequest = {
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
};
