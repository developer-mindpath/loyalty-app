import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { UserModel } from "./user";

@Entity({ name: "onsite_dedicated_page_ways_to_earn" })
export class OnsiteDedicatedPageWaysToEarnModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  general_background_color: string | null;

  @Column("varchar", { nullable: true })
  general_title_text: string | null;

  @Column("varchar", { nullable: true })
  general_subtitle_text: string | null;

  @Column("int", { nullable: true })
  general_title_font_size: number | null;

  @Column("varchar", { nullable: true })
  general_title_font_color: string | null;

  @Column("int", { nullable: true })
  general_subtitle_font_size: number | null;

  @Column("varchar", { nullable: true })
  general_subtitle_font_color: string | null;

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
    (adminUser) => adminUser.onsiteDedicatedPageWaysToEarn
  )
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (user) => user.onsiteDedicatedPageWaysToEarn)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;
}
