import { Column, Entity } from "typeorm";
import { ModelTemplate } from "./modelTemplate";

@Entity({ name: "admin_setting" })
export class AdminSettingModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  panel_logo: string | null;

  @Column("varchar", { nullable: true })
  panel_title: string | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;
}
