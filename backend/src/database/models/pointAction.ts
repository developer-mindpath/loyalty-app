import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { LoyalityProgramActivityModel } from "./loyalityProgramActivity";
import { ModelTemplate } from "./modelTemplate";
import { PointActionDetailsModel } from "./pointActionDetails";
import { UserModel } from "./user";

@Entity({ name: "point_action" })
export class PointActionModel extends ModelTemplate {
  @Column("varchar")
  action_key: string;

  @Column("varchar")
  action_key_display_text: string;

  @Column("int")
  action_visible_order: number;

  @Column("varchar")
  action_icon: string;

  @Column("varchar")
  action_description: string;

  @Column("tinyint")
  is_action_enabled: number;

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

  @ManyToOne(
    () => AdminUserModel,
    (adminUserModel) => adminUserModel.pointAction
  )
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (userModel) => userModel.pointAction)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;

  @OneToMany(
    () => PointActionDetailsModel,
    (pointActionDetail) => pointActionDetail.pointAction
  )
  pointActionDetail: PointActionDetailsModel[];

  @OneToMany(
    () => LoyalityProgramActivityModel,
    (loyalityProgramActivity) => loyalityProgramActivity.pointAction
  )
  loyalityProgramActivity: LoyalityProgramActivityModel[];
}
