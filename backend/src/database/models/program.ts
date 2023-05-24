import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { UserModel } from "./user";

@Entity({ name: "program" })
export class ProgramModel extends ModelTemplate {
  @Column("int", { nullable: true })
  user_id: number;

  @Column("tinyint", { nullable: true })
  is_point_program_enabled: number | null;

  @Column("tinyint", { nullable: true })
  is_referal_program_enabled: number | null;

  @Column("tinyint", { nullable: true })
  is_vip_program_enabled: number | null;

  @Column("tinyint", { nullable: true })
  reset_points_to_zero: number | null;

  @Column("int", { nullable: true })
  time_period_to_reset_points_to_zero: number | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @Column("int", { nullable: true })
  admin_ref: number;

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.program)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (user) => user.program)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;
}
