import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { UserModel } from "./user";

@Entity({ name: "onsite_widget" })
export class OnsiteWidgetModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  widget_color_header_background: string | null;

  @Column("varchar", { nullable: true })
  widget_color_header_text: string | null;

  @Column("varchar", { nullable: true })
  widget_color_text_title: string | null;

  @Column("varchar", { nullable: true })
  widget_color_text_description: string | null;

  @Column("varchar", { nullable: true })
  widget_color_button_background: string | null;

  @Column("varchar", { nullable: true })
  widget_color_button_text: string | null;

  @Column("varchar", { nullable: true })
  widget_color_widget_button_background: string | null;

  @Column("varchar", { nullable: true })
  widget_color_widget_button_text: string | null;

  @Column("varchar", { nullable: true })
  widget_color_others_link_color: string | null;

  @Column("varchar", { nullable: true })
  widget_color_others_icon_color: string | null;

  @Column("varchar", { nullable: true })
  widget_corner_shape_screen_launcher_edge: string | null;

  @Column("varchar", { nullable: true })
  widget_corner_shape_screen_sections: string | null;

  @Column("varchar", { nullable: true })
  widget_corner_shape_button: string | null;

  @Column("varchar", { nullable: true })
  widget_corner_shape_text_fields: string | null;

  @Column("varchar", { nullable: true })
  widget_banner_image: string | null;

  @Column("varchar", { nullable: true })
  widget_brand_icon: string | null;

  @Column("varchar", { nullable: true })
  widget_custom_css: string | null;

  @Column("varchar", { nullable: true })
  widget_custom_icon_rewards: string | null;

  @Column("varchar", { nullable: true })
  widget_custom_icon_ways_to_earn: string | null;

  @Column("varchar", { nullable: true })
  widget_custom_icon_ways_to_redeem: string | null;

  @Column("tinyint", { nullable: true })
  widget_hide_widget_unless_deep_link_activated: number | null;

  @Column("tinyint", { nullable: true })
  widget_hide_widget_launcher_on_mobile: number | null;

  @Column("tinyint", { nullable: true })
  widget_brandlift_branding: number | null;

  @Column("varchar", { nullable: true })
  widget_font_primary_font: string | null;

  @Column("varchar", { nullable: true })
  widget_font_secondary_font: string | null;

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

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.onsiteWidget)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (user) => user.onsiteWidget)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;
}
