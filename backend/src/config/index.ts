const env = process.env;

export interface ServerConfig {
  JWT_SECRET_KEY: string;
  DB_HOST: string;
  DB_PORT: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_DATABASE: string;
  PORT: number;
  NODE_ENV: string;
}

export let serverConfig: ServerConfig = {} as ServerConfig;
{
  serverConfig = {
    JWT_SECRET_KEY: env.JWT_SECRET_KEY!,
    DB_HOST: env.DB_HOST!,
    DB_PORT: env.DB_PORT!,
    DB_USER: env.DB_USER!,
    DB_PASSWORD: env.DB_PASSWORD!,
    DB_DATABASE: env.DB_DATABASE!,
    PORT: Number(env.PORT!),
    NODE_ENV: env.NODE_ENV!,
  };
}
