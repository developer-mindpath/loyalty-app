import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { UserModel } from "./user";

@Entity({ name: "onsite_widget_additional_setting_widget_text" })
export class OnsiteWidgetAdditionalSettingTextModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  visitor_header_text_title: string | null;

  @Column("varchar", { nullable: true })
  visitor_header_text_caption: string | null;

  @Column("varchar", { nullable: true })
  visitor_account_creation_text_title: string | null;

  @Column("varchar", { nullable: true })
  visitor_account_creation_text_signin: string | null;

  @Column("varchar", { nullable: true })
  visitor_account_creation_button_create_account_text: string | null;

  @Column("varchar", { nullable: true })
  visitor_points_text_title: string | null;

  @Column("varchar", { nullable: true })
  visitor_points_text_description: string | null;

  @Column("varchar", { nullable: true })
  member_header_text_caption: string | null;

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
    (adminUser) => adminUser.onsiteWidgetAdditionalSettingText
  )
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (user) => user.onsiteWidgetAdditionalSettingText)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;
}
