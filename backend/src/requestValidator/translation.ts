import Joi from "joi";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import { InsertTranslationRequest } from "../types/request/translation/insertTranslationRequest";
import { UpdateTranslationRequest } from "../types/request/translation/updateTranslationRequest";

export = {
  0: joiValidationRequest<IEmptyObject, InsertTranslationRequest, IEmptyObject>(
    {
      body: {
        ways_to_earn: Joi.string().optional(),
        ways_to_redeem: Joi.string().optional(),
        sign_in: Joi.string().optional(),
        sign_up: Joi.string().optional(),
        signed_up: Joi.string().optional(),
        no_rewards_yet: Joi.string().optional(),
        rewards_show_here: Joi.string().optional(),
        past_rewards: Joi.string().optional(),
        go_back: Joi.string().optional(),
        your_rewards: Joi.string().optional(),
        upcoming_reward: Joi.string().optional(),
        redeem: Joi.string().optional(),
        redeemed_a_reward: Joi.string().optional(),
        loyality_program_rewards: Joi.string().optional(),
        you_have: Joi.string().optional(),
        you_have_points: Joi.string().optional(),
        expiration_date: Joi.string().optional(),
        view_my_rewards_account: Joi.string().optional(),
        rewards: Joi.string().optional(),
        reward: Joi.string().optional(),
        manual_points_adjustment: Joi.string().optional(),
        points_granted_by_points_import: Joi.string().optional(),
        judgeme_review: Joi.string().optional(),
        existing_points_removed: Joi.string().optional(),
        points_reset_to_new_balance: Joi.string().optional(),
        points_refunded: Joi.string().optional(),
        points_canceled: Joi.string().optional(),
        use_this_discount_code: Joi.string().optional(),
        apply_code: Joi.string().optional(),
        add_product_to_cart: Joi.string().optional(),
        you_spend: Joi.string().optional(),
        spent: Joi.string().optional(),
        points: Joi.string().optional(),
        point: Joi.string().optional(),
        discount_amount_off_coupon: Joi.string().optional(),
        points_for_off: Joi.string().optional(),
        no_points_yet: Joi.string().optional(),
        no_activity_yet: Joi.string().optional(),
        you_have_not_earned: Joi.string().optional(),
        place_an_order: Joi.string().optional(),
        placed_an_order: Joi.string().optional(),
        points_for_every: Joi.string().optional(),
        how_do_i_earn_points: Joi.string().optional(),
        points_history: Joi.string().optional(),
        celebrate_birthday: Joi.string().optional(),
        celebrated_birthday: Joi.string().optional(),
        celebrate_with_reward: Joi.string().optional(),
        lets_celebrate_your_birthday: Joi.string().optional(),
        edit_date: Joi.string().optional(),
        month: Joi.string().optional(),
        day: Joi.string().optional(),
        please_enter_valid_date: Joi.string().optional(),
        save_date: Joi.string().optional(),
        show: Joi.string().optional(),
        share_via_email: Joi.string().optional(),
        share_on: Joi.string().optional(),
        please_choose_option: Joi.string().optional(),
        product_page: Joi.string().optional(),
        were_awarded_points: Joi.string().optional(),
        by: Joi.string().optional(),
        follow_on_instagram: Joi.string().optional(),
        follow_on_tiktok: Joi.string().optional(),
        like_page_on_facebook: Joi.string().optional(),
        share_link_on_facebook: Joi.string().optional(),
        follow_on_twitter: Joi.string().optional(),
        share_link_on_twitter: Joi.string().optional(),
        followed_on_instagram: Joi.string().optional(),
        followed_on_tiktok: Joi.string().optional(),
        liked_page_on_facebook: Joi.string().optional(),
        shared_link_on_facebook: Joi.string().optional(),
        followed_on_twitter: Joi.string().optional(),
        shared_link_on_twitter: Joi.string().optional(),
        follow: Joi.string().optional(),
        share: Joi.string().optional(),
        like: Joi.string().optional(),
        complete_referral: Joi.string().optional(),
        completed_referral: Joi.string().optional(),
        points_for_every_referral_completed: Joi.string().optional(),
        post_product_review: Joi.string().optional(),
        posted_product_review: Joi.string().optional(),
        points_for_every_review_posted: Joi.string().optional(),
        referral_program: Joi.string().optional(),
        claim_rewards: Joi.string().optional(),
        claim_coupon: Joi.string().optional(),
        create_account: Joi.string().optional(),
        they_will_get: Joi.string().optional(),
        you_will_get: Joi.string().optional(),
        refer_friends_earn: Joi.string().optional(),
        referrals_completed_so_far: Joi.string().optional(),
        share_link_claim_reward: Joi.string().optional(),
        referral_link_to_share: Joi.string().optional(),
        get_your: Joi.string().optional(),
        heres_your: Joi.string().optional(),
        claim_your_gift: Joi.string().optional(),
        refer_friends_by_email: Joi.string().optional(),
        send_email: Joi.string().optional(),
        to: Joi.string().optional(),
        comma_separated_list_emails: Joi.string().optional(),
        message: Joi.string().optional(),
        customize_your_referral_message: Joi.string().optional(),
        friend_referred_shop_name: Joi.string().optional(),
        claim_free_reward: Joi.string().optional(),
        valid_email_address: Joi.string().optional(),
        enter_your_name: Joi.string().optional(),
        no_referrals_yet: Joi.string().optional(),
        referrals_will_show_here: Joi.string().optional(),
        your_referrals: Joi.string().optional(),
        pending: Joi.string().optional(),
        completed: Joi.string().optional(),
        blocked: Joi.string().optional(),
        vip_tiers: Joi.string().optional(),
        vip_status: Joi.string().optional(),
        vip_reward: Joi.string().optional(),
        gain_access_to_exclusive_rewards: Joi.string().optional(),
        earned_via_tier: Joi.string().optional(),
        no_vip_membership_history_yet: Joi.string().optional(),
        vip_history: Joi.string().optional(),
        added_to_tier_name: Joi.string().optional(),
        unlocked_tier_name: Joi.string().optional(),
        fell_to_tier_name: Joi.string().optional(),
        kept_tier_name: Joi.string().optional(),
        earn_points: Joi.string().optional(),
        place_orders: Joi.string().optional(),
        spent_amount: Joi.string().optional(),
        perks: Joi.string().optional(),
        benefits: Joi.string().optional(),
        to_unlock: Joi.string().optional(),
        achieved_until: Joi.string().optional(),
        you_are_achieved: Joi.string().optional(),
        highest_tier: Joi.string().optional(),
        something_went_wrong: Joi.string().optional(),
        minimum_points_to_redeem: Joi.string().optional(),
        exceeded_maximum_points: Joi.string().optional(),
        maximum_shipping_amount: Joi.string().optional(),
        expires_months: Joi.string().optional(),
        reward_expires: Joi.string().optional(),
        reward_only_applies: Joi.string().optional(),
        applies_to_all_orders: Joi.string().optional(),
        products_in_specific_collections: Joi.string().optional(),
        status: Joi.string().optional(),
      },
    }
  ),
  1: joiValidationRequest<IEmptyObject, UpdateTranslationRequest, IEmptyObject>(
    {
      body: {
        ways_to_earn: Joi.string().optional(),
        ways_to_redeem: Joi.string().optional(),
        sign_in: Joi.string().optional(),
        sign_up: Joi.string().optional(),
        signed_up: Joi.string().optional(),
        no_rewards_yet: Joi.string().optional(),
        rewards_show_here: Joi.string().optional(),
        past_rewards: Joi.string().optional(),
        go_back: Joi.string().optional(),
        your_rewards: Joi.string().optional(),
        upcoming_reward: Joi.string().optional(),
        redeem: Joi.string().optional(),
        redeemed_a_reward: Joi.string().optional(),
        loyality_program_rewards: Joi.string().optional(),
        you_have: Joi.string().optional(),
        you_have_points: Joi.string().optional(),
        expiration_date: Joi.string().optional(),
        view_my_rewards_account: Joi.string().optional(),
        rewards: Joi.string().optional(),
        reward: Joi.string().optional(),
        manual_points_adjustment: Joi.string().optional(),
        points_granted_by_points_import: Joi.string().optional(),
        judgeme_review: Joi.string().optional(),
        existing_points_removed: Joi.string().optional(),
        points_reset_to_new_balance: Joi.string().optional(),
        points_refunded: Joi.string().optional(),
        points_canceled: Joi.string().optional(),
        use_this_discount_code: Joi.string().optional(),
        apply_code: Joi.string().optional(),
        add_product_to_cart: Joi.string().optional(),
        you_spend: Joi.string().optional(),
        spent: Joi.string().optional(),
        points: Joi.string().optional(),
        point: Joi.string().optional(),
        discount_amount_off_coupon: Joi.string().optional(),
        points_for_off: Joi.string().optional(),
        no_points_yet: Joi.string().optional(),
        no_activity_yet: Joi.string().optional(),
        you_have_not_earned: Joi.string().optional(),
        place_an_order: Joi.string().optional(),
        placed_an_order: Joi.string().optional(),
        points_for_every: Joi.string().optional(),
        how_do_i_earn_points: Joi.string().optional(),
        points_history: Joi.string().optional(),
        celebrate_birthday: Joi.string().optional(),
        celebrated_birthday: Joi.string().optional(),
        celebrate_with_reward: Joi.string().optional(),
        lets_celebrate_your_birthday: Joi.string().optional(),
        edit_date: Joi.string().optional(),
        month: Joi.string().optional(),
        day: Joi.string().optional(),
        please_enter_valid_date: Joi.string().optional(),
        save_date: Joi.string().optional(),
        show: Joi.string().optional(),
        share_via_email: Joi.string().optional(),
        share_on: Joi.string().optional(),
        please_choose_option: Joi.string().optional(),
        product_page: Joi.string().optional(),
        were_awarded_points: Joi.string().optional(),
        by: Joi.string().optional(),
        follow_on_instagram: Joi.string().optional(),
        follow_on_tiktok: Joi.string().optional(),
        like_page_on_facebook: Joi.string().optional(),
        share_link_on_facebook: Joi.string().optional(),
        follow_on_twitter: Joi.string().optional(),
        share_link_on_twitter: Joi.string().optional(),
        followed_on_instagram: Joi.string().optional(),
        followed_on_tiktok: Joi.string().optional(),
        liked_page_on_facebook: Joi.string().optional(),
        shared_link_on_facebook: Joi.string().optional(),
        followed_on_twitter: Joi.string().optional(),
        shared_link_on_twitter: Joi.string().optional(),
        follow: Joi.string().optional(),
        share: Joi.string().optional(),
        like: Joi.string().optional(),
        complete_referral: Joi.string().optional(),
        completed_referral: Joi.string().optional(),
        points_for_every_referral_completed: Joi.string().optional(),
        post_product_review: Joi.string().optional(),
        posted_product_review: Joi.string().optional(),
        points_for_every_review_posted: Joi.string().optional(),
        referral_program: Joi.string().optional(),
        claim_rewards: Joi.string().optional(),
        claim_coupon: Joi.string().optional(),
        create_account: Joi.string().optional(),
        they_will_get: Joi.string().optional(),
        you_will_get: Joi.string().optional(),
        refer_friends_earn: Joi.string().optional(),
        referrals_completed_so_far: Joi.string().optional(),
        share_link_claim_reward: Joi.string().optional(),
        referral_link_to_share: Joi.string().optional(),
        get_your: Joi.string().optional(),
        heres_your: Joi.string().optional(),
        claim_your_gift: Joi.string().optional(),
        refer_friends_by_email: Joi.string().optional(),
        send_email: Joi.string().optional(),
        to: Joi.string().optional(),
        comma_separated_list_emails: Joi.string().optional(),
        message: Joi.string().optional(),
        customize_your_referral_message: Joi.string().optional(),
        friend_referred_shop_name: Joi.string().optional(),
        claim_free_reward: Joi.string().optional(),
        valid_email_address: Joi.string().optional(),
        enter_your_name: Joi.string().optional(),
        no_referrals_yet: Joi.string().optional(),
        referrals_will_show_here: Joi.string().optional(),
        your_referrals: Joi.string().optional(),
        pending: Joi.string().optional(),
        completed: Joi.string().optional(),
        blocked: Joi.string().optional(),
        vip_tiers: Joi.string().optional(),
        vip_status: Joi.string().optional(),
        vip_reward: Joi.string().optional(),
        gain_access_to_exclusive_rewards: Joi.string().optional(),
        earned_via_tier: Joi.string().optional(),
        no_vip_membership_history_yet: Joi.string().optional(),
        vip_history: Joi.string().optional(),
        added_to_tier_name: Joi.string().optional(),
        unlocked_tier_name: Joi.string().optional(),
        fell_to_tier_name: Joi.string().optional(),
        kept_tier_name: Joi.string().optional(),
        earn_points: Joi.string().optional(),
        place_orders: Joi.string().optional(),
        spent_amount: Joi.string().optional(),
        perks: Joi.string().optional(),
        benefits: Joi.string().optional(),
        to_unlock: Joi.string().optional(),
        achieved_until: Joi.string().optional(),
        you_are_achieved: Joi.string().optional(),
        highest_tier: Joi.string().optional(),
        something_went_wrong: Joi.string().optional(),
        minimum_points_to_redeem: Joi.string().optional(),
        exceeded_maximum_points: Joi.string().optional(),
        maximum_shipping_amount: Joi.string().optional(),
        expires_months: Joi.string().optional(),
        reward_expires: Joi.string().optional(),
        reward_only_applies: Joi.string().optional(),
        applies_to_all_orders: Joi.string().optional(),
        products_in_specific_collections: Joi.string().optional(),
        status: Joi.string().optional(),
      },
    }
  ),
};
