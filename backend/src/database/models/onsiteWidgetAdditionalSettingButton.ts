import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { UserModel } from "./user";

@Entity({ name: "onsite_widget_additional_setting_widget_button" })
export class OnsiteWidgetAdditionalSettingButtonModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  desktop_placement: string | null;

  @Column("int", { nullable: true })
  desktop_padding_side_padding: number | null;

  @Column("int", { nullable: true })
  desktop_padding_bottom_padding: number | null;

  @Column("varchar", { nullable: true })
  desktop_widget_button_type: string | null;

  @Column("varchar", { nullable: true })
  desktop_widget_button_shape: string | null;

  @Column("varchar", { nullable: true })
  desktop_widget_icon: string | null;

  @Column("varchar", { nullable: true })
  mobile_placement: string | null;

  @Column("int", { nullable: true })
  mobile_padding_side_padding: number | null;

  @Column("int", { nullable: true })
  mobile_padding_bottom_padding: number | null;

  @Column("varchar", { nullable: true })
  mobile_widget_button_type: string | null;

  @Column("varchar", { nullable: true })
  mobile_widget_button_shape: string | null;

  @Column("varchar", { nullable: true })
  mobile_widget_icon: string | null;

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
    (adminUser) => adminUser.onsiteWidgetAdditionalSettingButton
  )
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(
    () => UserModel,
    (user) => user.onsiteWidgetAdditionalSettingButton
  )
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;
}
