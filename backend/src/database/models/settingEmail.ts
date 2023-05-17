import { Column, Entity } from "typeorm";
import { ModelTemplate } from "./modelTemplate";

@Entity({ name: "email_config" })
export class SettingEmailModel extends ModelTemplate {
  @Column("varchar")
  email_from_name: string;

  @Column("varchar")
  email_from_email: string;

  @Column("varchar")
  email_reply_email: string;

  @Column("varchar")
  custom_email_domain: string;

  @Column("varchar")
  custom_url_path_for_email: string;

  @Column("varchar")
  design_header_title_color: string;

  @Column("varchar")
  design_header_subtitle_color: string;

  @Column("varchar")
  design_btn_bg_color: string;

  @Column("varchar")
  design_btn_text_color: string;

  @Column("varchar")
  design_btn_sub_text_color: string;

  @Column("int")
  design_btn_radius: number;

  @Column("varchar")
  design_footer_text_color: string;

  @Column("varchar")
  design_footer_link_color: string;

  @Column("varchar")
  design_image: string;

  @Column("varchar")
  design_image_type: string;

  @Column("varchar")
  status: string;

  @Column("int")
  user_id: number;

  @Column("int")
  admin_ref: number;

  @Column("int")
  created_by: number;

  @Column("int")
  updated_by: number;
}
