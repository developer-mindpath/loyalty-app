import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { UserModel } from "./user";

@Entity({ name: "onsite_popups" })
export class OnsitePopupModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  popups_title: string | null;

  @Column("int", { nullable: true })
  popups_view: number | null;

  @Column("int", { nullable: true })
  popups_click: number | null;

  @Column("tinyint", { nullable: true })
  popups_button: number | null;

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

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.onsitePopup)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (user) => user.onsitePopup)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;
}
