import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { LoyalityProgramActivityModel } from "./loyalityProgramActivity";
import { ModelTemplate } from "./modelTemplate";
import { PointActionDetailsModel } from "./pointActionDetails";
import { UserModel } from "./user";

@Entity({ name: "point_action" })
export class PointActionModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  action_key: string | null;

  @Column("varchar", { nullable: true })
  action_key_display_text: string | null;

  @Column("int", { nullable: true })
  action_visible_order: number | null;

  @Column("varchar", { nullable: true })
  action_icon: string | null;

  @Column("varchar", { nullable: true })
  action_description: string | null;

  @Column("tinyint", { nullable: true })
  is_action_enabled: number | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  user_id: number;

  @Column("int", { nullable: true })
  admin_ref: number | null;

  @Column("int", { nullable: true })
  created_by: number | null;

  @Column("int", { nullable: true })
  updated_by: number | null;

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
