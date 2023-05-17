import { DataSource } from "typeorm";
import { config } from "dotenv";
import { ModelTemplate } from "./models/modelTemplate";
import { ReferralModel } from "./models/referral";
import { StoreModel } from "./models/store";
import { UserModel } from "./models/user";
import { AdminActivityModel } from "./models/adminActivity";
import { AdminActivityTypeModel } from "./models/adminActivityType";
import { PointActionModel } from "./models/pointAction";
import { PointActionDetailsModel } from "./models/pointActionDetails";
import { SettingEmailModel } from "./models/settingEmail";
import { SettingOrderModel } from "./models/settingOrder";
config();

const MODELS = [
  ModelTemplate,
  ReferralModel,
  StoreModel,
  UserModel,
  AdminActivityModel,
  AdminActivityTypeModel,
  PointActionModel,
  PointActionDetailsModel,
  SettingEmailModel,
  SettingOrderModel,
];
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
