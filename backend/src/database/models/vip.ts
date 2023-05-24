import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { UserModel } from "./user";

@Entity({ name: "vip" })
export class VipModel extends ModelTemplate {
  @Column("tinyint", { nullable: true })
  is_enabled: number | null;

  @Column("datetime", { nullable: true })
  start_date: Date | null;

  @Column("varchar", { nullable: true })
  entry_method: string | null;

  @Column("int", { nullable: true })
  expiry: number | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  admin_ref: number;

  @Column("int", { nullable: true })
  user_id: number | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @ManyToOne(() => UserModel, (userModel) => userModel.vip)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.vip)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;
}
