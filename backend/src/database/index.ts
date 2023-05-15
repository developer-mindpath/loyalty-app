import { DataSource } from "typeorm";
import { ModelTemplate } from "./models/modelTemplate";
import { ReferralModel } from "./models/referral";
import { StoreModel } from "./models/store";
import { UserModel } from "./models/user";
import { config } from "dotenv";
config();

const MODELS = [ModelTemplate, ReferralModel, StoreModel, UserModel];
const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: MODELS,
  migrations: ["dist/database/migrations/*.js"],
  synchronize: false,
  migrationsRun: true,
  logging: true,
  extra: {
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  },
});

export default AppDataSource;
