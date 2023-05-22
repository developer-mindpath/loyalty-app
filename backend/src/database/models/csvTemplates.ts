import { Column, Entity } from "typeorm";
import { ModelTemplate } from "./modelTemplate";

@Entity({ name: "csv_templates" })
export class CsvTemplatesModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  template_name: string | null;

  @Column("varchar", { nullable: true })
  file_url: string | null;

  @Column("datetime", { nullable: true })
  added_date: Date | null;

  @Column("varchar", { nullable: true })
  type: string | null;

  @Column("tinyint", { nullable: true })
  is_for_customer: number | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;
}
