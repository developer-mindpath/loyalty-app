import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { AppModel } from "./app";
import { ModelTemplate } from "./modelTemplate";
import { PointActionModel } from "./pointAction";
import { UserModel } from "./user";

@Entity({ name: "point_action_details" })
export class PointActionDetailsModel extends ModelTemplate {
  @Column("int")
  point_action_id: number;

  @Column("int", { nullable: true })
  app_id: number | null;

  @Column("float", { nullable: true })
  points_amounts: string | null;

  @Column("int", { nullable: true })
  limit_count: number | null;

  @Column("varchar", { nullable: true })
  limit_count_type: string | null;

  @Column("varchar", { nullable: true })
  url_to_share: string | null;

  @Column("varchar", { nullable: true })
  earning_method: string | null;

  @Column("varchar")
  status: string;

  @Column("tinyint", { nullable: true })
  limit_count_enabled: number | null;

  @Column("int")
  admin_ref: number;

  @Column("int")
  user_id: number;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @ManyToOne(
    () => AdminUserModel,
    (adminUserModel) => adminUserModel.pointActionDetail
  )
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (userModel) => userModel.pointActionDetail)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;

  @ManyToOne(
    () => PointActionModel,
    (pointAction) => pointAction.pointActionDetail
  )
  @JoinColumn({ name: "point_action_id", referencedColumnName: "id" })
  pointAction: PointActionModel;

  @ManyToOne(() => AppModel, (appModel) => appModel.pointActionDetail)
  @JoinColumn({ name: "app_id", referencedColumnName: "id" })
  appModel: PointActionModel;
}
