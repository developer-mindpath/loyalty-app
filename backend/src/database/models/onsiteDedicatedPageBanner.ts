import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { UserModel } from "./user";

@Entity({ name: "onsite_dedicated_page_banner" })
export class OnsiteDedicatedPageBannerModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  general_banner_image: string | null;

  @Column("int", { nullable: true })
  general_banner_fontsize: number | null;

  @Column("varchar", { nullable: true })
  general_banner_font_color: string | null;

  @Column("int", { nullable: true })
  general_banner_description_fontsize: number | null;

  @Column("varchar", { nullable: true })
  general_banner_description_font_color: string | null;

  @Column("varchar", { nullable: true })
  guest_logout_title_text: string | null;

  @Column("varchar", { nullable: true })
  guest_logout_description_text: string | null;

  @Column("varchar", { nullable: true })
  guest_register_button_text: string | null;

  @Column("int", { nullable: true })
  guest_register_button_font_size: number | null;

  @Column("varchar", { nullable: true })
  guest_register_button_font_color: string | null;

  @Column("varchar", { nullable: true })
  guest_register_button_background_color: string | null;

  @Column("varchar", { nullable: true })
  guest_login_button_text: string | null;

  @Column("int", { nullable: true })
  guest_login_button_font_size: number | null;

  @Column("varchar", { nullable: true })
  guest_login_button_font_color: string | null;

  @Column("varchar", { nullable: true })
  guest_login_button_background_color: string | null;

  @Column("varchar", { nullable: true })
  member_loggedIn_title_text: string | null;

  @Column("varchar", { nullable: true })
  member_loggedIn_description_text: string | null;

  @Column("varchar", { nullable: true })
  member_earn_button_text: string | null;

  @Column("int", { nullable: true })
  member_earn_button_font_size: number | null;

  @Column("varchar", { nullable: true })
  member_earn_button_font_color: string | null;

  @Column("varchar", { nullable: true })
  member_earn_button_background_color: string | null;

  @Column("varchar", { nullable: true })
  member_redeem_button_text: string | null;

  @Column("int", { nullable: true })
  member_redeem_button_font_size: number | null;

  @Column("varchar", { nullable: true })
  member_redeem_button_font_color: string | null;

  @Column("varchar", { nullable: true })
  member_redeem_button_background_color: string | null;

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
    (adminUser) => adminUser.onsiteDedicatedPageBanner
  )
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (user) => user.onsiteDedicatedPageBanner)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;
}
