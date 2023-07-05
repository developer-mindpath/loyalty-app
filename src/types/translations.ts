import { IAudit, ITimestamp } from "@/types";

export interface ITranslationFields {
  ways_to_earn: string;
  ways_to_redeem: string;
  sign_in: string;
  sign_up: string;
  signed_up: string;
  no_rewards_yet: string;
  rewards_show_here: string;
  past_rewards: string;
  go_back: string;
  your_rewards: string;
  upcoming_reward: string;
  redeem: string;
  redeemed_a_reward: string;
  loyality_program_rewards: string;
  you_have: string;
  you_have_points: string;
  expiration_date: string;
  view_my_rewards_account: string;
  rewards: string;
  reward: string;
  manual_points_adjustment: string;
  points_granted_by_points_import: string;
  judgeme_review: string;
  existing_points_removed: string;
  points_reset_to_new_balance: string;
  points_refunded: string;
  points_canceled: string;
  use_this_discount_code: string;
  apply_code: string;
  add_product_to_cart: string;
  you_spend: string;
  spent: string;
  points: string;
  point: string;
  discount_amount_off_coupon: string;
  points_for_off: string;
  no_points_yet: string;
  no_activity_yet: string;
  you_have_not_earned: string;
  place_an_order: string;
  placed_an_order: string;
  points_for_every: string;
  how_do_i_earn_points: string;
  points_history: string;
  celebrate_birthday: string;
  celebrated_birthday: string;
  celebrate_with_reward: string;
  lets_celebrate_your_birthday: string;
  edit_date: string;
  month: string;
  day: string;
  please_enter_valid_date: string;
  save_date: string;
  show: string;
  share_via_email: string;
  share_on: string;
  please_choose_option: string;
  product_page: string;
  were_awarded_points: string;
  by: string;
  follow_on_instagram: string;
  follow_on_tiktok: string;
  like_page_on_facebook: string;
  share_link_on_facebook: string;
  follow_on_twitter: string;
  share_link_on_twitter: string;
  followed_on_instagram: string;
  followed_on_tiktok: string;
  liked_page_on_facebook: string;
  shared_link_on_facebook: string;
  followed_on_twitter: string;
  shared_link_on_twitter: string;
  follow: string;
  share: string;
  like: string;
  complete_referral: string;
  completed_referral: string;
  points_for_every_referral_completed: string;
  post_product_review: string;
  posted_product_review: string;
  points_for_every_review_posted: string;
  referral_program: string;
  claim_rewards: string;
  claim_coupon: string;
  create_account: string;
  they_will_get: string;
  you_will_get: string;
  refer_friends_earn: string;
  referrals_completed_so_far: string;
  share_link_claim_reward: string;
  referral_link_to_share: string;
  get_your: string;
  heres_your: string;
  claim_your_gift: string;
  refer_friends_by_email: string;
  send_email: string;
  to: string;
  comma_separated_list_emails: string;
  message: string;
  customize_your_referral_message: string;
  friend_referred_shop_name: string;
  claim_free_reward: string;
  valid_email_address: string;
  enter_your_name: string;
  no_referrals_yet: string;
  referrals_will_show_here: string;
  your_referrals: string;
  pending: string;
  completed: string;
  blocked: string;
  vip_tiers: string;
  vip_status: string;
  vip_reward: string;
  gain_access_to_exclusive_rewards: string;
  earned_via_tier: string;
  no_vip_membership_history_yet: string;
  vip_history: string;
  added_to_tier_name: string;
  unlocked_tier_name: string;
  fell_to_tier_name: string;
  kept_tier_name: string;
  earn_points: string;
  place_orders: string;
  spent_amount: string;
  perks: string;
  benefits: string;
  to_unlock: string;
  achieved_until: string;
  you_are_achieved: string;
  highest_tier: string;
  something_went_wrong: string;
  minimum_points_to_redeem: string;
  exceeded_maximum_points: string;
  maximum_shipping_amount: string;
  expires_months: string;
  reward_expires: string;
  reward_only_applies: string;
  applies_to_all_orders: string;
  products_in_specific_collections: string;
  //   status: string | null;
}

export interface IGetTranslationResponse
  extends ITranslationFields,
    IAudit,
    ITimestamp {
  id: number;
  status: string | null;
  user_id: number;
  admin_ref: number | null;
}

export interface ITranslationsState {
  error: boolean;
  loading: boolean;
  translations: IGetTranslationResponse;
}