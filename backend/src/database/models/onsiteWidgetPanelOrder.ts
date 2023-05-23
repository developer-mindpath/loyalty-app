import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { UserModel } from "./user";

@Entity({ name: "onsite_widget_panel_order" })
export class OnsiteWidgetPanelOrderModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  widget_section_key: string | null;

  @Column("varchar", { nullable: true })
  widget_section_key_display_text: string | null;

  @Column("varchar", { nullable: true })
  widget_section_order: string | null;

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
    (adminUser) => adminUser.onsiteWidgetPanelOrder
  )
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (user) => user.onsiteWidgetPanelOrder)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;
}
