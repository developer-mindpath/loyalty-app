import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { UserModel } from "./user";

@Entity({ name: "program_email" })
export class ProgramEmailModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  email_notification_key: string | null;

  @Column("tinyint", { nullable: true })
  email_notification_enabled: number | null;

  @Column("varchar", { nullable: true })
  email_notification_subject: string | null;

  @Column("varchar", { nullable: true })
  email_notfication_title: string | null;

  @Column("varchar", { nullable: true })
  email_notfication_subtitle: string | null;

  @Column("varchar", { nullable: true })
  email_notfication_button: string | null;

  @Column("varchar", { nullable: true })
  email_notfication_subtext: string | null;

  @Column("varchar", { nullable: true })
  email_notfication_footer_text: string | null;

  @Column("varchar", { nullable: true })
  email_notfication_footer_address: string | null;

  @Column("varchar", { nullable: true })
  email_notfication_unsubscribe_text: string | null;

  @Column("varchar", { nullable: true })
  email_notfication_subscription_source: string | null;

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

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.programEmail)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (user) => user.programEmail)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;
}
