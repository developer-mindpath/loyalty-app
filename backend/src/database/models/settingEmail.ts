import { Column, Entity } from "typeorm";
import { ModelTemplate } from "./modelTemplate";

@Entity({ name: "email_config" })
export class SettingEmailModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  email_from_name: string | null;

  @Column("varchar", { nullable: true })
  email_from_email: string | null;

  @Column("varchar", { nullable: true })
  email_reply_email: string | null;

  @Column("varchar", { nullable: true })
  custom_email_domain: string | null;

  @Column("varchar", { nullable: true })
  custom_url_path_for_email: string | null;

  @Column("varchar", { nullable: true })
  design_header_title_color: string | null;

  @Column("varchar", { nullable: true })
  design_header_subtitle_color: string | null;

  @Column("varchar", { nullable: true })
  design_btn_bg_color: string | null;

  @Column("varchar", { nullable: true })
  design_btn_text_color: string | null;

  @Column("varchar", { nullable: true })
  design_btn_sub_text_color: string | null;

  @Column("int", { nullable: true })
  design_btn_radius: number | null;

  @Column("varchar", { nullable: true })
  design_footer_text_color: string | null;

  @Column("varchar", { nullable: true })
  design_footer_link_color: string | null;

  @Column("varchar", { nullable: true })
  design_image: string | null;

  @Column("varchar", { nullable: true })
  design_image_type: string | null;

  @Column("varchar")
  status: string;

  @Column("int")
  user_id: number;

  @Column("int")
  admin_ref: number;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;
}
