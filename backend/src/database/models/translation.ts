import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { UserModel } from "./user";

@Entity({ name: "translation" })
export class TranslationModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  ways_to_earn: string | null;

  @Column("varchar", { nullable: true })
  ways_to_redeem: string | null;

  @Column("varchar", { nullable: true })
  sign_in: string | null;

  @Column("varchar", { nullable: true })
  sign_up: string | null;

  @Column("varchar", { nullable: true })
  signed_up: string | null;

  @Column("varchar", { nullable: true })
  no_rewards_yet: string | null;

  @Column("varchar", { nullable: true })
  rewards_show_here: string | null;

  @Column("varchar", { nullable: true })
  past_rewards: string | null;

  @Column("varchar", { nullable: true })
  go_back: string | null;

  @Column("varchar", { nullable: true })
  your_rewards: string | null;

  @Column("varchar", { nullable: true })
  upcoming_reward: string | null;

  @Column("varchar", { nullable: true })
  redeem: string | null;

  @Column("varchar", { nullable: true })
  redeemed_a_reward: string | null;

  @Column("varchar", { nullable: true })
  loyality_program_rewards: string | null;

  @Column("varchar", { nullable: true })
  you_have: string | null;

  @Column("varchar", { nullable: true })
  you_have_points: string | null;

  @Column("varchar", { nullable: true })
  expiration_date: string | null;

  @Column("varchar", { nullable: true })
  view_my_rewards_account: string | null;

  @Column("varchar", { nullable: true })
  rewards: string | null;

  @Column("varchar", { nullable: true })
  reward: string | null;

  @Column("varchar", { nullable: true })
  manual_points_adjustment: string | null;

  @Column("varchar", { nullable: true })
  points_granted_by_points_import: string | null;

  @Column("varchar", { nullable: true })
  judgeme_review: string | null;

  @Column("varchar", { nullable: true })
  existing_points_removed: string | null;

  @Column("varchar", { nullable: true })
  points_reset_to_new_balance: string | null;

  @Column("varchar", { nullable: true })
  points_refunded: string | null;

  @Column("varchar", { nullable: true })
  points_canceled: string | null;

  @Column("varchar", { nullable: true })
  use_this_discount_code: string | null;

  @Column("varchar", { nullable: true })
  apply_code: string | null;

  @Column("varchar", { nullable: true })
  add_product_to_cart: string | null;

  @Column("varchar", { nullable: true })
  you_spend: string | null;

  @Column("varchar", { nullable: true })
  spent: string | null;

  @Column("varchar", { nullable: true })
  points: string | null;

  @Column("varchar", { nullable: true })
  point: string | null;

  @Column("varchar", { nullable: true })
  discount_amount_off_coupon: string | null;

  @Column("varchar", { nullable: true })
  points_for_off: string | null;

  @Column("varchar", { nullable: true })
  no_points_yet: string | null;

  @Column("varchar", { nullable: true })
  no_activity_yet: string | null;

  @Column("varchar", { nullable: true })
  you_have_not_earned: string | null;

  @Column("varchar", { nullable: true })
  place_an_order: string | null;

  @Column("varchar", { nullable: true })
  placed_an_order: string | null;

  @Column("varchar", { nullable: true })
  points_for_every: string | null;

  @Column("varchar", { nullable: true })
  how_do_i_earn_points: string | null;

  @Column("varchar", { nullable: true })
  points_history: string | null;

  @Column("varchar", { nullable: true })
  celebrate_birthday: string | null;

  @Column("varchar", { nullable: true })
  celebrated_birthday: string | null;

  @Column("varchar", { nullable: true })
  celebrate_with_reward: string | null;

  @Column("varchar", { nullable: true })
  lets_celebrate_your_birthday: string | null;

  @Column("varchar", { nullable: true })
  edit_date: string | null;

  @Column("varchar", { nullable: true })
  month: string | null;

  @Column("varchar", { nullable: true })
  day: string | null;

  @Column("varchar", { nullable: true })
  please_enter_valid_date: string | null;

  @Column("varchar", { nullable: true })
  save_date: string | null;

  @Column("varchar", { nullable: true })
  show: string | null;

  @Column("varchar", { nullable: true })
  share_via_email: string | null;

  @Column("varchar", { nullable: true })
  share_on: string | null;

  @Column("varchar", { nullable: true })
  please_choose_option: string | null;

  @Column("varchar", { nullable: true })
  product_page: string | null;

  @Column("varchar", { nullable: true })
  were_awarded_points: string | null;

  @Column("varchar", { nullable: true })
  by: string | null;

  @Column("varchar", { nullable: true })
  follow_on_instagram: string | null;

  @Column("varchar", { nullable: true })
  follow_on_tiktok: string | null;

  @Column("varchar", { nullable: true })
  like_page_on_facebook: string | null;

  @Column("varchar", { nullable: true })
  share_link_on_facebook: string | null;

  @Column("varchar", { nullable: true })
  follow_on_twitter: string | null;

  @Column("varchar", { nullable: true })
  share_link_on_twitter: string | null;

  @Column("varchar", { nullable: true })
  followed_on_instagram: string | null;

  @Column("varchar", { nullable: true })
  followed_on_tiktok: string | null;

  @Column("varchar", { nullable: true })
  liked_page_on_facebook: string | null;

  @Column("varchar", { nullable: true })
  shared_link_on_facebook: string | null;

  @Column("varchar", { nullable: true })
  followed_on_twitter: string | null;

  @Column("varchar", { nullable: true })
  shared_link_on_twitter: string | null;

  @Column("varchar", { nullable: true })
  follow: string | null;

  @Column("varchar", { nullable: true })
  share: string | null;

  @Column("varchar", { nullable: true })
  like: string | null;

  @Column("varchar", { nullable: true })
  complete_referral: string | null;

  @Column("varchar", { nullable: true })
  completed_referral: string | null;

  @Column("varchar", { nullable: true })
  points_for_every_referral_completed: string | null;

  @Column("varchar", { nullable: true })
  post_product_review: string | null;

  @Column("varchar", { nullable: true })
  posted_product_review: string | null;

  @Column("varchar", { nullable: true })
  points_for_every_review_posted: string | null;

  @Column("varchar", { nullable: true })
  referral_program: string | null;

  @Column("varchar", { nullable: true })
  claim_rewards: string | null;

  @Column("varchar", { nullable: true })
  claim_coupon: string | null;

  @Column("varchar", { nullable: true })
  create_account: string | null;

  @Column("varchar", { nullable: true })
  they_will_get: string | null;

  @Column("varchar", { nullable: true })
  you_will_get: string | null;

  @Column("varchar", { nullable: true })
  refer_friends_earn: string | null;

  @Column("varchar", { nullable: true })
  referrals_completed_so_far: string | null;

  @Column("varchar", { nullable: true })
  share_link_claim_reward: string | null;

  @Column("varchar", { nullable: true })
  referral_link_to_share: string | null;

  @Column("varchar", { nullable: true })
  get_your: string | null;

  @Column("varchar", { nullable: true })
  heres_your: string | null;

  @Column("varchar", { nullable: true })
  claim_your_gift: string | null;

  @Column("varchar", { nullable: true })
  refer_friends_by_email: string | null;

  @Column("varchar", { nullable: true })
  send_email: string | null;

  @Column("varchar", { nullable: true })
  to: string | null;

  @Column("varchar", { nullable: true })
  comma_separated_list_emails: string | null;

  @Column("varchar", { nullable: true })
  message: string | null;

  @Column("varchar", { nullable: true })
  customize_your_referral_message: string | null;

  @Column("varchar", { nullable: true })
  friend_referred_shop_name: string | null;

  @Column("varchar", { nullable: true })
  claim_free_reward: string | null;

  @Column("varchar", { nullable: true })
  valid_email_address: string | null;

  @Column("varchar", { nullable: true })
  enter_your_name: string | null;

  @Column("varchar", { nullable: true })
  no_referrals_yet: string | null;

  @Column("varchar", { nullable: true })
  referrals_will_show_here: string | null;

  @Column("varchar", { nullable: true })
  your_referrals: string | null;

  @Column("varchar", { nullable: true })
  pending: string | null;

  @Column("varchar", { nullable: true })
  completed: string | null;

  @Column("varchar", { nullable: true })
  blocked: string | null;

  @Column("varchar", { nullable: true })
  vip_tiers: string | null;

  @Column("varchar", { nullable: true })
  vip_status: string | null;

  @Column("varchar", { nullable: true })
  vip_reward: string | null;

  @Column("varchar", { nullable: true })
  gain_access_to_exclusive_rewards: string | null;

  @Column("varchar", { nullable: true })
  earned_via_tier: string | null;

  @Column("varchar", { nullable: true })
  no_vip_membership_history_yet: string | null;

  @Column("varchar", { nullable: true })
  vip_history: string | null;

  @Column("varchar", { nullable: true })
  added_to_tier_name: string | null;

  @Column("varchar", { nullable: true })
  unlocked_tier_name: string | null;

  @Column("varchar", { nullable: true })
  fell_to_tier_name: string | null;

  @Column("varchar", { nullable: true })
  kept_tier_name: string | null;

  @Column("varchar", { nullable: true })
  earn_points: string | null;

  @Column("varchar", { nullable: true })
  place_orders: string | null;

  @Column("varchar", { nullable: true })
  spent_amount: string | null;

  @Column("varchar", { nullable: true })
  perks: string | null;

  @Column("varchar", { nullable: true })
  benefits: string | null;

  @Column("varchar", { nullable: true })
  to_unlock: string | null;

  @Column("varchar", { nullable: true })
  achieved_until: string | null;

  @Column("varchar", { nullable: true })
  you_are_achieved: string | null;

  @Column("varchar", { nullable: true })
  highest_tier: string | null;

  @Column("varchar", { nullable: true })
  something_went_wrong: string | null;

  @Column("varchar", { nullable: true })
  minimum_points_to_redeem: string | null;

  @Column("varchar", { nullable: true })
  exceeded_maximum_points: string | null;

  @Column("varchar", { nullable: true })
  maximum_shipping_amount: string | null;

  @Column("varchar", { nullable: true })
  expires_months: string | null;

  @Column("varchar", { nullable: true })
  reward_expires: string | null;

  @Column("varchar", { nullable: true })
  reward_only_applies: string | null;

  @Column("varchar", { nullable: true })
  applies_to_all_orders: string | null;

  @Column("varchar", { nullable: true })
  products_in_specific_collections: string | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  admin_ref: number | null;

  @Column("int")
  user_id: number;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @OneToOne(() => UserModel, (userModel) => userModel.translation)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.vipTier)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;
}
