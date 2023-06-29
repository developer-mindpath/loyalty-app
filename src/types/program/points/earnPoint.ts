import type { IWithAction } from "@/types/program";
import type { IAudit, ITimestamp } from "@/types/api";

export interface IEarnPointAction extends IAudit, ITimestamp {
  id: number;
  action_key: string;
  action_key_display_text: string;
  action_icon: string;
  status: string;
  user_id: number;
  admin_ref: number;
  action_description: string;
  is_action_enabled: number | null;
  action_visible_order: number;
}

export interface IEarnPoint extends IAudit, ITimestamp {
  id: number;
  point_action_id: number;
  app_id: number;
  points_amounts: number;
  limit_count: number | null;
  limit_count_type: string | null;
  url_to_share: string | null;
  earning_method: string | null;
  status: string;
  limit_count_enabled: number | null;
  admin_ref: number;
}

export interface IEarnPointWithAction
  extends IEarnPoint,
    IWithAction<IEarnPointAction> {}

// <=====================Requests=====================>

// Add Earn Points
export interface IAddEarnPointRequest
  extends Partial<IEarnPoint>,
    Partial<IEarnPointAction> {}

export type IUpdateEarnPointService = Partial<IEarnPoint & IEarnPointAction>;
// Update Earn Points
export interface IUpdateEarnPoint {
  id: string;
  data: Partial<IEarnPointWithAction>;
  dataAction: Partial<IEarnPointWithAction["pointAction"]>;
}

// <=====================Responses=====================>

// Get Response
export type IGetEarnPointResponse = Pick<IEarnPoint, "points_amounts"> &
  IEarnPointAction;

// Add Response
export interface IAddEarnPointResponse {
  id: string;
}

export interface IOrderUpdate {
  oldIndex: number;
  newIndex: number;
}

export interface IStateUpdate {
  id: number;
  state: boolean;
}
