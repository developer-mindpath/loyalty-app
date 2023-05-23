export type GetReferralProgramResponse = {
  referral_friend_title: string | null;
  referral_friend_discount: string | null;
  referral_friend_is_minimum_cart_requirement: number | null;
  referral_friend_minimum_cart_value: number | null;
  referral_friend_apply_to: string | null;
  referral_friend_collection_id: number | null;
  referral_friend_purchase_type: string | null;
  referral_friend_expiry: number | null;
  referral_friend_icon: string | null;
  referral_friend_is_enabeled: number | null;
  referral_customer_points_amount: string | null;
  referral_customer_limit_count: number | null;
  referral_customer_limit_count_type: string | null;
  referral_customer_is_enabeled: number | null;
  referral_customer_description: string | null;
  referral_customer_icon: string | null;
  redirect_url: string | null;
  is_allowed_twitter_share: number | null;
  is_allowed_what_share: number | null;
  is_allowed_email_share: number | null;
  is_allowed_facebook_share: number | null;
  referral_user_link: string | null;
  referral_offer_cookie_Day: number | null;
  referral_offer_nco: number | null;
  status: string | null;
  admin_ref: number;
  user_id: number;
  created_by: number | null;
  updated_by: number | null;
  created_at: Date;
  updated_at: Date | null;
};
