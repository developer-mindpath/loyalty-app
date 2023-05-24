import {
  CreateDateColumn,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export abstract class ModelTemplate {
  @PrimaryGeneratedColumn("increment")
  @Index({ unique: true })
  public id: number;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  public updated_at: Date;
  // @Column("timestamp", { default: () => "CURRENT_TIMESTAMP" })
  // public create_at: Timestamp;

  // @Column("timestamp", { default: () => "CURRENT_TIMESTAMP" })
  // public update_at: Timestamp;

  // @BeforeInsert()
  // createTimestamp() {
  //   this.create_at = new Date().getTime() as unknown as Timestamp;
  // }

  // @BeforeUpdate()
  // updateTimestamp() {
  //   this.update_at = new Date().getTime() as unknown as Timestamp;
  // }
}
