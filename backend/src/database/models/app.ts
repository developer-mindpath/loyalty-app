import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { PointActionDetailsModel } from "./pointActionDetails";
import { UserModel } from "./user";

@Entity({ name: "app" })
export class AppModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  app_title: string | null;

  @Column("varchar", { nullable: true })
  app_description: string | null;

  @Column("varchar", { nullable: true })
  app_url: string | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  user_id: number;

  @Column("int")
  admin_ref: number;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @ManyToOne(() => AdminUserModel, (adminUserModel) => adminUserModel.appModel)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (userModel) => userModel.appModel)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;

  @OneToMany(
    () => PointActionDetailsModel,
    (pointActionDetail) => pointActionDetail.appModel
  )
  pointActionDetail: PointActionDetailsModel;
}
