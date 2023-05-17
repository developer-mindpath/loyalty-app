import { Column, Entity } from "typeorm";
import { ModelTemplate } from "./modelTemplate";

@Entity({ name: "point_action" })
export class PointActionModel extends ModelTemplate {
  @Column("varchar")
  action_key: string;

  @Column("varchar")
  action_key_display_text: string;

  @Column("int")
  action_visible_order: number;

  @Column("varchar")
  action_icon: string;

  @Column("varchar")
  action_description: string;

  @Column("tinyint")
  is_action_enabled: number;

  @Column("varchar")
  status: string;

  @Column("int")
  user_id: number;

  @Column("int")
  admin_ref: number;

  @Column("int")
  created_by: number;

  @Column("int")
  updated_by: number;
}
