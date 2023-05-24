import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { UserModel } from "./user";

@Entity({ name: "onsite_dedicated_page" })
export class OnsiteDedicatedPageModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  is_dedicated_page_on: string | null;

  @Column("varchar", { nullable: true })
  general_settings_primary_font: string | null;

  @Column("varchar", { nullable: true })
  general_settings_secondry_font: string | null;

  @Column("varchar", { nullable: true })
  general_settings_full_width: string | null;

  @Column("varchar", { nullable: true })
  general_settings_model_offset: string | null;

  @Column("varchar", { nullable: true })
  general_settings_custome_css: string | null;

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

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.onsiteDedicatedPage)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (user) => user.onsiteDedicatedPage)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;
}
