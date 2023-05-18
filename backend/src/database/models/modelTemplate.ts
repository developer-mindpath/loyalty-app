import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Index,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";

export abstract class ModelTemplate {
  @PrimaryGeneratedColumn("increment")
  @Index({ unique: true })
  public id: number;

  @Column("timestamp", { default: () => "CURRENT_TIMESTAMP" })
  public create_at: Timestamp;

  @Column("timestamp", { default: () => "CURRENT_TIMESTAMP" })
  public update_at: Timestamp;

  @BeforeInsert()
  createTimestamp() {
    this.create_at = new Date().getTime() as unknown as Timestamp;
  }

  @BeforeUpdate()
  updateTimestamp() {
    this.update_at = new Date().getTime() as unknown as Timestamp;
  }
}
