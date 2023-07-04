import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { IRootState } from "@/redux/types";

import type {
  ITranslationsState,
  IGetTranslationResponse,
} from "@/types/translations";
import { TranslationActions } from ".";

const initialState: ITranslationsState = {
  loading: true,
  error: false,
  translations: {
    id: 0,
    status: null,
    user_id: 0,
    admin_ref: null,
    ways_to_earn: "",
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
    created_by: 0,
    updated_by: 0,
    created_at: "",
    updated_at: "",
  },
};

const translationSlice = createSlice({
  name: "translations",
  reducers: {},
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(TranslationActions.get.pending, (state) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(
      TranslationActions.get.fulfilled,
      (state, action: PayloadAction<IGetTranslationResponse>) => {
        state.error = false;
        state.loading = false;
        state.translations = action.payload;
      }
    );
    builder.addCase(TranslationActions.get.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.translations = {} as IGetTranslationResponse;
    });
  },
});

export const translations = { ...translationSlice.actions };

export const getTranslations = (state: IRootState) =>
  state.translations.translations;
export const getTranslationsState = (state: IRootState) =>
  state.translations.loading;
export const hasError = (state: IRootState) => state.translations.error;

export default translationSlice.reducer;
