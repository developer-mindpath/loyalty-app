import { UpdateReferralProgramRequest } from "../../types/request/referral/updateReferralProgramRequest";

export default class UpdateReferralProgramRequestDTO {
  referral_friend_title: string;
  referral_friend_discount: string;
  referral_friend_is_minimum_cart_requirement: number;
  referral_friend_minimum_cart_value: number;
  referral_friend_apply_to: string;
  referral_friend_collection_id: number;
  referral_friend_purchase_type: string;
  referral_friend_expiry: number;
  referral_friend_icon: string;
  referral_friend_is_enabeled: number;
  referral_customer_points_amount: string;
  referral_customer_limit_count: number;
  referral_customer_limit_count_type: string;
  referral_customer_is_enabeled: number;
  referral_customer_description: string;
  referral_customer_icon: string;
  redirect_url: string;
  is_allowed_twitter_share: number;
  is_allowed_what_share: number;
  is_allowed_email_share: number;
  is_allowed_facebook_share: number;
  referral_user_link: string;
  referral_offer_cookie_Day: number;
  referral_offer_nco: number;
  status: string;
  updated_by: number;
  user_id: number;

  constructor(body: UpdateReferralProgramRequest, userId: number) {
    this.referral_friend_title = body.referral_friend_title;
    this.referral_friend_discount = body.referral_friend_discount;
    this.referral_friend_is_minimum_cart_requirement =
      body.referral_friend_is_minimum_cart_requirement;
    this.referral_friend_minimum_cart_value =
      body.referral_friend_minimum_cart_value;
    this.referral_friend_apply_to = body.referral_friend_apply_to;
    this.referral_friend_collection_id = body.referral_friend_collection_id;
    this.referral_friend_purchase_type = body.referral_friend_purchase_type;
    this.referral_friend_expiry = body.referral_friend_expiry;
    this.referral_friend_icon = body.referral_friend_icon;
    this.referral_friend_is_enabeled = body.referral_friend_is_enabeled;
    this.referral_customer_points_amount = body.referral_customer_points_amount;
    this.referral_customer_limit_count = body.referral_customer_limit_count;
    this.referral_customer_limit_count_type =
      body.referral_customer_limit_count_type;
    this.referral_customer_is_enabeled = body.referral_customer_is_enabeled;
    this.referral_customer_description = body.referral_customer_description;
    this.referral_customer_icon = body.referral_customer_icon;
    this.redirect_url = body.redirect_url;
    this.is_allowed_twitter_share = body.is_allowed_twitter_share;
    this.is_allowed_what_share = body.is_allowed_what_share;
    this.is_allowed_email_share = body.is_allowed_email_share;
    this.is_allowed_facebook_share = body.is_allowed_facebook_share;
    this.referral_user_link = body.referral_user_link;
    this.referral_offer_cookie_Day = body.referral_offer_cookie_Day;
    this.referral_offer_nco = body.referral_offer_nco;
    this.status = body.status;
    this.updated_by = userId;
    this.user_id = userId;
  }
}
