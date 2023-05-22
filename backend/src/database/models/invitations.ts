import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";

@Entity({ name: "invitations" })
export class InvitationsModel extends ModelTemplate {
  @Column("int", { nullable: true })
  admin_user_id: number | null;

  @Column("varchar", { nullable: true })
  invite_status: string | null;

  @Column("datetime", { nullable: true })
  sent_at: Date | null;

  @Column("int", { nullable: true })
  sent_by: number | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.invitation)
  @JoinColumn({ name: "admin_user_id", referencedColumnName: "id" })
  adminUser: AdminUserModel;
}
