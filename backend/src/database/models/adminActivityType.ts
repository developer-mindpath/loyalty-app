import { Column, Entity } from "typeorm";
import { ModelTemplate } from "./modelTemplate";

@Entity({ name: "admin_activity_type" })
export class AdminActivityTypeModel extends ModelTemplate {
  @Column("varchar")
  title: string;

  @Column("varchar")
  key: string;

  @Column("varchar")
  description: string;

  @Column("tinyint")
  is_active: number;

  @Column("varchar")
  status: string;

  @Column("int")
  created_by: number;

  @Column("int")
  updated_by: number;
}
