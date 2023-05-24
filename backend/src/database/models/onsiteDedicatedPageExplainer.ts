import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { UserModel } from "./user";

@Entity({ name: "onsite_dedicated_page_explainer" })
export class OnsiteDedicatedPageExplainerModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  general_background_color: string | null;

  @Column("int", { nullable: true })
  general_header_title_font_size: number | null;

  @Column("varchar", { nullable: true })
  general_header_title_font_color: string | null;

  @Column("int", { nullable: true })
  general_header_subtitle_font_size: number | null;

  @Column("varchar", { nullable: true })
  general_header_subtitle_font_color: string | null;

  @Column("varchar", { nullable: true })
  guest_header_text: string | null;

  @Column("int", { nullable: true })
  guest_step_number_font_size: number | null;

  @Column("varchar", { nullable: true })
  guest_step_number_font_color: string | null;

  @Column("int", { nullable: true })
  guest_step_title_font_size: number | null;

  @Column("varchar", { nullable: true })
  guest_step_title_font_color: string | null;

  @Column("int", { nullable: true })
  guest_step_subtitle_font_size: number | null;

  @Column("varchar", { nullable: true })
  guest_step_subtitle_font_color: string | null;

  @Column("varchar", { nullable: true })
  guest_step_1_title_text: string | null;

  @Column("varchar", { nullable: true })
  guest_step_1_subtitle_text: string | null;

  @Column("varchar", { nullable: true })
  guest_step_2_title_text: string | null;

  @Column("varchar", { nullable: true })
  guest_step_2_subtitle_text: string | null;

  @Column("varchar", { nullable: true })
  guest_step_3_title_text: string | null;

  @Column("varchar", { nullable: true })
  guest_step_3_subtitle_text: string | null;

  @Column("varchar", { nullable: true })
  member_header_text: string | null;

  @Column("varchar", { nullable: true })
  member_subtitle_text: string | null;

  @Column("varchar", { nullable: true })
  member_activity_action_text: string | null;

  @Column("varchar", { nullable: true })
  member_points_text: string | null;

  @Column("varchar", { nullable: true })
  member_data_text: string | null;

  @Column("varchar", { nullable: true })
  member_your_reward_title_text: string | null;

  @Column("int", { nullable: true })
  member_reward_title_font_size: number | null;

  @Column("varchar", { nullable: true })
  member_reward_title_font_color: string | null;

  @Column("varchar", { nullable: true })
  member_no_reward_subtitle_text: string | null;

  @Column("varchar", { nullable: true })
  member_has_reward_subtitle_text: string | null;

  @Column("varchar", { nullable: true })
  member_reward_subtitle_font_size: string | null;

  @Column("varchar", { nullable: true })
  member_reward_subtitle_font_color: string | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @Column("int", { nullable: true })
  user_id: number;

  @Column("int", { nullable: true })
  admin_ref: number;

  @ManyToOne(
    () => AdminUserModel,
    (adminUser) => adminUser.onsiteDedicatedPageExplainer
  )
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (user) => user.onsiteDedicatedPageExplainer)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;
}
