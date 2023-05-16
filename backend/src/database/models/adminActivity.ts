import { Column, Entity } from "typeorm";
import { ModelTemplate } from "./modelTemplate";

@Entity({ name: "admin_activity" })
export class AdminActivityModel extends ModelTemplate {
  @Column("int")
  type_id: number;

  @Column("int")
  admin_user_id: number;

  @Column("varchar")
  activity_status: string;

  @Column("datetime")
  activity_date: Date;

  @Column("varchar")
  status: string;

  @Column("int")
  created_by: number;

  @Column("int")
  updated_by: number;
}
