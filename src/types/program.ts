export type IValidValue = string | number | boolean;

export interface IAppListItem {
  id: number;
  app_title: string;
}

export interface IWithAction<T> {
  pointAction: T;
}

export interface IWithRedeem<T> {
  pointRedeem: T;
}
