import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProgramService } from "../../service/programService";
import {
  IEarnPoint,
  IAddEarnPointRequest,
  IAddEarnPointResponse,
} from "../../types/program/points/earnPoint";
import {
  IAddRedeemRewardResponse,
  IAddRewardRequest,
  IUpdateRewardRequest,
} from "../../types/program/points/redeemRewards";

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
    async (payload: Partial<IEarnPoint>) => {
      await ProgramService.updateEarnPointDetail(payload);
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
      await ProgramService.updateRewardRedeemDetail(payload);
      return payload;
    }
  );
}
