import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { UserModel } from "./user";

@Entity({ name: "onsite_dedicated_page_section_config" })
export class OnsiteDedicatedPageSectionConfigModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  page_section_key: string | null;

  @Column("varchar", { nullable: true })
  page_section_text: string | null;

  @Column("tinyint", { nullable: true })
  page_section_visibility: number | null;

  @Column("varchar", { nullable: true })
  page_section_order: string | null;

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

  @ManyToOne(
    () => AdminUserModel,
    (adminUser) => adminUser.onsiteDedicatedPageSectionConfig
  )
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (user) => user.onsiteDedicatedPageSectionConfig)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;
}
