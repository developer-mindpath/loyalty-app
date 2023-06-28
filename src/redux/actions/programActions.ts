import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProgramService } from "@/service/programService";
import {
  IAddEarnPointRequest,
  IAddEarnPointResponse,
  IUpdateEarnPoint,
  IOrderUpdate,
  IStateUpdate,
} from "@/types/program/points/earnPoint";
import {
  IAddRedeemRewardResponse,
  IAddRewardRequest,
  IUpdateRewardRequest,
} from "@/types/program/points/redeemRewards";
import store from "../store";

export class ProgramActions {
  /**
   * Get Program Details
   */
  public static getStatus = createAsyncThunk("/program/get", () => {
    return ProgramService.getProgramStatus();
  });
}

export class EarnPoint {
  /**
   * Program Points
   */
  public static getList = createAsyncThunk("/program/points/earn/get", () => {
    return ProgramService.getEarnPointList();
  });

  /**
   * Program Points Details
   */
  public static getDetails = createAsyncThunk(
    "/program/points/earn/get/details",
    (id: string) => {
      return ProgramService.getEarnPointDetail(id);
    }
  );

  /**
   * Add Program Redeem Point
   */
  public static add = createAsyncThunk(
    "/program/points/earn/add",
    async (
      payload: Partial<IAddEarnPointRequest>
    ): Promise<IAddEarnPointResponse> => {
      return await ProgramService.addEarnPoint(payload);
    }
  );

  /**
   * Program Points Details
   */
  public static update = createAsyncThunk(
    "/program/points/earn/update",
    async (payload: IUpdateEarnPoint) => {
      const { id, data, dataAction } = payload;
      const { pointAction, ...rest } = data;
      await ProgramService.updateEarnPointDetail({
        ...rest,
        ...dataAction,
        point_action_id: parseInt(id),
      });

      return payload.data;
    }
  );

  /**
   * Update Order
   */
  public static changeOrder = createAsyncThunk(
    "/program/points/earn/update/order",
    async (payload: IOrderUpdate) => {
      const { newIndex, oldIndex } = payload;
      const list = store.getState().pointProgram.earn.list;
      const { id } = list[oldIndex];
      await ProgramService.updateEarnPointDetail({
        point_action_id: id,
        action_visible_order: newIndex,
      });
      return payload;
    }
  );

  /**
   * Update Order
   */
  public static changeState = createAsyncThunk(
    "/program/points/earn/update/state",
    async (payload: IStateUpdate) => {
      const { id, state } = payload;
      await ProgramService.updateEarnPointDetail({
        point_action_id: id,
        is_action_enabled: state ? 1 : 0,
      });
      return payload;
    }
  );
}

export class RedeemRewards {
  /**
   * Get Program Redeem Point
   */
  public static getList = createAsyncThunk(
    "/program/points/redeem/get",
    async () => {
      return await ProgramService.getRewardRedeemList();
    }
  );

  /**
   * Program Points Details
   */
  public static getDetail = createAsyncThunk(
    "/program/points/redeem/get/details",
    (id: string) => {
      return ProgramService.getRewardRedeemDetails(id);
    }
  );

  /**
   * Add Program Redeem Point
   */
  public static add = createAsyncThunk(
    "/program/points/redeem/add",
    async (payload: IAddRewardRequest): Promise<IAddRedeemRewardResponse> => {
      return await ProgramService.addReward(payload);
    }
  );

  /**
   * Program Points Details
   */
  public static update = createAsyncThunk(
    "/program/points/redeem/update",
    async (payload: IUpdateRewardRequest) => {
      const { id, data, dataAction } = payload;
      await ProgramService.updateRewardRedeemDetail({
        ...data,
        ...dataAction,
        point_redeem_id: parseInt(id),
      });
      return payload.data;
    }
  );

  /**
   * Update State
   */
  public static changeState = createAsyncThunk(
    "/program/points/redeem/update/state",
    async (payload: IStateUpdate) => {
      const { id, state } = payload;
      await ProgramService.updateRewardRedeemDetail({
        point_redeem_id: id,
        is_reward_enabled: state ? 1 : 0,
      });
      return payload;
    }
  );
}
