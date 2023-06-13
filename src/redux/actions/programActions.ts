import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProgramService } from "../../service/programService";
import {
  IAddEarnResponse,
  IAddEarnRequest,
  IPointDetailResponse,
} from "../../types/program";

export class ProgramAction {
  /**
   * Program Points
   */
  public static getPoints = createAsyncThunk("/get/program/points", () => {
    return ProgramService.getPoints();
  });

  /**
   * Program Points Details
   */
  public static getPointDetail = createAsyncThunk(
    "/get/program/points/details",
    (id: string) => {
      return ProgramService.getPointDetail(id);
    }
  );

  /**
   * Add Program Redeem Point
   */
  public static addEarnPoint = createAsyncThunk(
    "/add/program/earn",
    async (payload: Partial<IAddEarnRequest>): Promise<IAddEarnResponse> => {
      return await ProgramService.addEarnPoint(payload);
    }
  );

  /**
   * Program Points Details
   */
  public static updatePointDetail = createAsyncThunk(
    "/update/program/points/details",
    async (payload: Partial<IPointDetailResponse>) => {
      await ProgramService.updatePointDetail(payload);
      return payload;
    }
  );

  /**
   * Get Program Redeem Point
   */
  public static getRedeemPoint = createAsyncThunk(
    "/get/program/redeem",
    async () => {
      return await ProgramService.getRedeemPoint();
    }
  );
}
