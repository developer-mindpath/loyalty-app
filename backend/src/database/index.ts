import { DataSource } from "typeorm";
import { ReferralModel } from "./referral";
import { ModelTemplate } from "./modelTemplate";

const MODELS = [ModelTemplate, ReferralModel];

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: MODELS,
  migrations: ["dist/database/migrations/*.js"],
  synchronize: true,
  logging: true,
  extra: {
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  },
});

export default AppDataSource;
