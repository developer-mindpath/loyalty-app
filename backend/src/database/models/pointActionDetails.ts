import { Column, Entity } from "typeorm";
import { ModelTemplate } from "./modelTemplate";

@Entity({ name: "point_action_details" })
export class PointActionDetailsModel extends ModelTemplate {
  @Column("int")
  point_action_id: number;

  @Column("int")
  app_id: number;

  @Column("float")
  points_amounts: string;

  @Column("int")
  limit_count: number;

  @Column("varchar")
  limit_count_type: string;

  @Column("varchar")
  url_to_share: string;

  @Column("varchar")
  earning_method: string;

  @Column("varchar")
  status: string;

  @Column("tinyint")
  limit_count_enabled: number;

  @Column("int")
  admin_ref: number;

  @Column("int")
  created_by: number;

  @Column("int")
  updated_by: number;
}
