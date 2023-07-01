import useContextualSave from "@/hooks/useContextualSave";
import ObjectUtil from "@/utils/object";
import { useState } from "react";

export type ItranslationFields = {
  ways_to_earn: string | null;
  ways_to_redeem: string | null;
  sign_in: string | null;
  sign_up: string | null;
  signed_up: string | null;
  no_rewards_yet: string | null;
  rewards_show_here: string | null;
  past_rewards: string | null;
  go_back: string | null;
  your_rewards: string | null;
  upcoming_reward: string | null;
  redeem: string | null;
  redeemed_a_reward: string | null;
  loyality_program_rewards: string | null;
  you_have: string | null;
  you_have_points: string | null;
  expiration_date: string | null;
  view_my_rewards_account: string | null;
  rewards: string | null;
  reward: string | null;
  manual_points_adjustment: string | null;
  points_granted_by_points_import: string | null;
  judgeme_review: string | null;
  existing_points_removed: string | null;
  points_reset_to_new_balance: string | null;
  points_refunded: string | null;
  points_canceled: string | null;
  use_this_discount_code: string | null;
  apply_code: string | null;
  add_product_to_cart: string | null;
  you_spend: string | null;
  spent: string | null;
  points: string | null;
  point: string | null;
  discount_amount_off_coupon: string | null;
  points_for_off: string | null;
  no_points_yet: string | null;
  no_activity_yet: string | null;
  you_have_not_earned: string | null;
  place_an_order: string | null;
  placed_an_order: string | null;
  points_for_every: string | null;
  how_do_i_earn_points: string | null;
  points_history: string | null;
  celebrate_birthday: string | null;
  celebrated_birthday: string | null;
  celebrate_with_reward: string | null;
  lets_celebrate_your_birthday: string | null;
  edit_date: string | null;
  month: string | null;
  day: string | null;
  please_enter_valid_date: string | null;
  save_date: string | null;
  show: string | null;
  share_via_email: string | null;
  share_on: string | null;
  please_choose_option: string | null;
  product_page: string | null;
  were_awarded_points: string | null;
  by: string | null;
  follow_on_instagram: string | null;
  follow_on_tiktok: string | null;
  like_page_on_facebook: string | null;
  share_link_on_facebook: string | null;
  follow_on_twitter: string | null;
  share_link_on_twitter: string | null;
  followed_on_instagram: string | null;
  followed_on_tiktok: string | null;
  liked_page_on_facebook: string | null;
  shared_link_on_facebook: string | null;
  followed_on_twitter: string | null;
  shared_link_on_twitter: string | null;
  follow: string | null;
  share: string | null;
  like: string | null;
  complete_referral: string | null;
  completed_referral: string | null;
  points_for_every_referral_completed: string | null;
  post_product_review: string | null;
  posted_product_review: string | null;
  points_for_every_review_posted: string | null;
  referral_program: string | null;
  claim_rewards: string | null;
  claim_coupon: string | null;
  create_account: string | null;
  they_will_get: string | null;
  you_will_get: string | null;
  refer_friends_earn: string | null;
  referrals_completed_so_far: string | null;
  share_link_claim_reward: string | null;
  referral_link_to_share: string | null;
  get_your: string | null;
  heres_your: string | null;
  claim_your_gift: string | null;
  refer_friends_by_email: string | null;
  send_email: string | null;
  to: string | null;
  comma_separated_list_emails: string | null;
  message: string | null;
  customize_your_referral_message: string | null;
  friend_referred_shop_name: string | null;
  claim_free_reward: string | null;
  valid_email_address: string | null;
  enter_your_name: string | null;
  no_referrals_yet: string | null;
  referrals_will_show_here: string | null;
  your_referrals: string | null;
  pending: string | null;
  completed: string | null;
  blocked: string | null;
  vip_tiers: string | null;
  vip_status: string | null;
  vip_reward: string | null;
  gain_access_to_exclusive_rewards: string | null;
  earned_via_tier: string | null;
  no_vip_membership_history_yet: string | null;
  vip_history: string | null;
  added_to_tier_name: string | null;
  unlocked_tier_name: string | null;
  fell_to_tier_name: string | null;
  kept_tier_name: string | null;
  earn_points: string | null;
  place_orders: string | null;
  spent_amount: string | null;
  perks: string | null;
  benefits: string | null;
  to_unlock: string | null;
  achieved_until: string | null;
  you_are_achieved: string | null;
  highest_tier: string | null;
  something_went_wrong: string | null;
  minimum_points_to_redeem: string | null;
  exceeded_maximum_points: string | null;
  maximum_shipping_amount: string | null;
  expires_months: string | null;
  reward_expires: string | null;
  reward_only_applies: string | null;
  applies_to_all_orders: string | null;
  products_in_specific_collections: string | null;
  //   status: string | null;
};

export type TranslationApiResponse = {
  id: number;
  ways_to_earn: string | null;
  ways_to_redeem: string | null;
  sign_in: string | null;
  sign_up: string | null;
  signed_up: string | null;
  no_rewards_yet: string | null;
  rewards_show_here: string | null;
  past_rewards: string | null;
  go_back: string | null;
  your_rewards: string | null;
  upcoming_reward: string | null;
  redeem: string | null;
  redeemed_a_reward: string | null;
  loyality_program_rewards: string | null;
  you_have: string | null;
  you_have_points: string | null;
  expiration_date: string | null;
  view_my_rewards_account: string | null;
  rewards: string | null;
  reward: string | null;
  manual_points_adjustment: string | null;
  points_granted_by_points_import: string | null;
  judgeme_review: string | null;
  existing_points_removed: string | null;
  points_reset_to_new_balance: string | null;
  points_refunded: string | null;
  points_canceled: string | null;
  use_this_discount_code: string | null;
  apply_code: string | null;
  add_product_to_cart: string | null;
  you_spend: string | null;
  spent: string | null;
  points: string | null;
  point: string | null;
  discount_amount_off_coupon: string | null;
  points_for_off: string | null;
  no_points_yet: string | null;
  no_activity_yet: string | null;
  you_have_not_earned: string | null;
  place_an_order: string | null;
  placed_an_order: string | null;
  points_for_every: string | null;
  how_do_i_earn_points: string | null;
  points_history: string | null;
  celebrate_birthday: string | null;
  celebrated_birthday: string | null;
  celebrate_with_reward: string | null;
  lets_celebrate_your_birthday: string | null;
  edit_date: string | null;
  month: string | null;
  day: string | null;
  please_enter_valid_date: string | null;
  save_date: string | null;
  show: string | null;
  share_via_email: string | null;
  share_on: string | null;
  please_choose_option: string | null;
  product_page: string | null;
  were_awarded_points: string | null;
  by: string | null;
  follow_on_instagram: string | null;
  follow_on_tiktok: string | null;
  like_page_on_facebook: string | null;
  share_link_on_facebook: string | null;
  follow_on_twitter: string | null;
  share_link_on_twitter: string | null;
  followed_on_instagram: string | null;
  followed_on_tiktok: string | null;
  liked_page_on_facebook: string | null;
  shared_link_on_facebook: string | null;
  followed_on_twitter: string | null;
  shared_link_on_twitter: string | null;
  follow: string | null;
  share: string | null;
  like: string | null;
  complete_referral: string | null;
  completed_referral: string | null;
  points_for_every_referral_completed: string | null;
  post_product_review: string | null;
  posted_product_review: string | null;
  points_for_every_review_posted: string | null;
  referral_program: string | null;
  claim_rewards: string | null;
  claim_coupon: string | null;
  create_account: string | null;
  they_will_get: string | null;
  you_will_get: string | null;
  refer_friends_earn: string | null;
  referrals_completed_so_far: string | null;
  share_link_claim_reward: string | null;
  referral_link_to_share: string | null;
  get_your: string | null;
  heres_your: string | null;
  claim_your_gift: string | null;
  refer_friends_by_email: string | null;
  send_email: string | null;
  to: string | null;
  comma_separated_list_emails: string | null;
  message: string | null;
  customize_your_referral_message: string | null;
  friend_referred_shop_name: string | null;
  claim_free_reward: string | null;
  valid_email_address: string | null;
  enter_your_name: string | null;
  no_referrals_yet: string | null;
  referrals_will_show_here: string | null;
  your_referrals: string | null;
  pending: string | null;
  completed: string | null;
  blocked: string | null;
  vip_tiers: string | null;
  vip_status: string | null;
  vip_reward: string | null;
  gain_access_to_exclusive_rewards: string | null;
  earned_via_tier: string | null;
  no_vip_membership_history_yet: string | null;
  vip_history: string | null;
  added_to_tier_name: string | null;
  unlocked_tier_name: string | null;
  fell_to_tier_name: string | null;
  kept_tier_name: string | null;
  earn_points: string | null;
  place_orders: string | null;
  spent_amount: string | null;
  perks: string | null;
  benefits: string | null;
  to_unlock: string | null;
  achieved_until: string | null;
  you_are_achieved: string | null;
  highest_tier: string | null;
  something_went_wrong: string | null;
  minimum_points_to_redeem: string | null;
  exceeded_maximum_points: string | null;
  maximum_shipping_amount: string | null;
  expires_months: string | null;
  reward_expires: string | null;
  reward_only_applies: string | null;
  applies_to_all_orders: string | null;
  products_in_specific_collections: string | null;
  status: string | null;
  user_id: number;
  admin_ref: number | null;
  created_by: number;
  updated_by: number | null;
  created_at: Date;
  updated_at: Date | null;
};

export function translationsController() {
 

  const apiresponse: TranslationApiResponse = {
    id: 23,
    ways_to_earn: "vfvf",
    ways_to_redeem: "",
    sign_in: "",
    sign_up: "",
    signed_up: "",
    no_rewards_yet: "",
    rewards_show_here: "",
    past_rewards: "",
    go_back: "",
    your_rewards: "",
    upcoming_reward: "",
    redeem: "",
    redeemed_a_reward: "",
    loyality_program_rewards: "",
    you_have: "",
    you_have_points: "",
    expiration_date: "",
    view_my_rewards_account: "",
    rewards: "",
    reward: "",
    manual_points_adjustment: "",
    points_granted_by_points_import: "",
    judgeme_review: "",
    existing_points_removed: "",
    points_reset_to_new_balance: "",
    points_refunded: "",
    points_canceled: "",
    use_this_discount_code: "",
    apply_code: "",
    add_product_to_cart: "",
    you_spend: "",
    spent: "",
    points: "",
    point: "",
    discount_amount_off_coupon: "",
    points_for_off: "",
    no_points_yet: "",
    no_activity_yet: "",
    you_have_not_earned: "",
    place_an_order: "",
    placed_an_order: "",
    points_for_every: "",
    how_do_i_earn_points: "",
    points_history: "",
    celebrate_birthday: "",
    celebrated_birthday: "",
    celebrate_with_reward: "",
    lets_celebrate_your_birthday: "",
    edit_date: "",
    month: "",
    day: "",
    please_enter_valid_date: "",
    save_date: "",
    show: "",
    share_via_email: "",
    share_on: "",
    please_choose_option: "",
    product_page: "",
    were_awarded_points: "",
    by: "",
    follow_on_instagram: "",
    follow_on_tiktok: "",
    like_page_on_facebook: "",
    share_link_on_facebook: "",
    follow_on_twitter: "",
    share_link_on_twitter: "",
    followed_on_instagram: "",
    followed_on_tiktok: "",
    liked_page_on_facebook: "",
    shared_link_on_facebook: "",
    followed_on_twitter: "",
    shared_link_on_twitter: "",
    follow: "",
    share: "",
    like: "",
    complete_referral: "",
    completed_referral: "",
    points_for_every_referral_completed: "",
    post_product_review: "",
    posted_product_review: "",
    points_for_every_review_posted: "",
    referral_program: "",
    claim_rewards: "",
    claim_coupon: "",
    create_account: "",
    they_will_get: "",
    you_will_get: "",
    refer_friends_earn: "",
    referrals_completed_so_far: "",
    share_link_claim_reward: "",
    referral_link_to_share: "",
    get_your: "",
    heres_your: "",
    claim_your_gift: "",
    refer_friends_by_email: "",
    send_email: "",
    to: "",
    comma_separated_list_emails: "",
    message: "",
    customize_your_referral_message: "",
    friend_referred_shop_name: "",
    claim_free_reward: "",
    valid_email_address: "",
    enter_your_name: "",
    no_referrals_yet: "",
    referrals_will_show_here: "",
    your_referrals: "",
    pending: "",
    completed: "",
    blocked: "",
    vip_tiers: "",
    vip_status: "",
    vip_reward: "",
    gain_access_to_exclusive_rewards: "",
    earned_via_tier: "",
    no_vip_membership_history_yet: "",
    vip_history: "",
    added_to_tier_name: "",
    unlocked_tier_name: "",
    fell_to_tier_name: "",
    kept_tier_name: "",
    earn_points: "",
    place_orders: "",
    spent_amount: "",
    perks: "",
    benefits: "",
    to_unlock: "",
    achieved_until: "",
    you_are_achieved: "",
    highest_tier: "",
    something_went_wrong: "",
    minimum_points_to_redeem: "",
    exceeded_maximum_points: "",
    maximum_shipping_amount: "",
    expires_months: "",
    reward_expires: "",
    reward_only_applies: "",
    applies_to_all_orders: "",
    products_in_specific_collections: "",
    status: "",
    user_id: 23,
    admin_ref: null,
    created_by: 2,
    updated_by: null,
    created_at: 2 as unknown as Date,
    updated_at: null,
  };

  //TODO -this state to be made in redux later
  const [translationData, setTranslationdata] = useState(apiresponse);
  const [initalState, setInital] = useState(apiresponse);

  /**
   * Handle Data discard
   */
  const handleDiscard = () => {
    // dispatch here 
    setTranslationdata(initalState);
    setInital(initalState);
  };

  const handleSave = async () => {
    const payload = ObjectUtil.getChanges(initalState, translationData);
    try {
     // dispatch here
      setInital(translationData);
    } catch (e) {
      console.error(e);
    }
  };

  useContextualSave(initalState, translationData, {
    handleSave,
    handleDiscard,
  });

  function handleChange(key: string) {
    return (value: string) => {
      //dispatch here
      setTranslationdata({ ...translationData, [key]: value });
    };
  }

  return {
    getters: {
      apiResponse: apiresponse,
      translationData: translationData,
    },
    handlers: {
      handleChange,
    },
  };
}
