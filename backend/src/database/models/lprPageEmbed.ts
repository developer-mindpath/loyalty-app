import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { UserModel } from "./user";

@Entity({ name: "lpr_page_embed" })
export class LprPageEmbedModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  is_show_lpr_page: string | null;

  @Column("varchar", { nullable: true })
  lpr_page_title: string | null;

  @Column("varchar", { nullable: true })
  available_points: string | null;

  @Column("varchar", { nullable: true })
  view_my_reward_page: string | null;

  @Column("varchar", { nullable: true })
  redirect_path: string | null;

  @Column("varchar", { nullable: true })
  freeform_text: string | null;

  @Column("varchar", { nullable: true })
  custome_css: string | null;

  @Column("varchar", { nullable: true })
  widget_selecter: string | null;

  @Column("varchar", { nullable: true })
  widget_position: string | null;

  @Column("varchar", { nullable: true })
  widget_page_appear: string | null;

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

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.lprPageEmbed)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (user) => user.lprPageEmbed)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;
}
