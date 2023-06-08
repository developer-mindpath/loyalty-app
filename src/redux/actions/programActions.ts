import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProgramService } from "../../service/programService";
import { IPointDetailResponse } from "../../types/program";

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
   * Program Points Details
   */
  public static updatePointDetail = createAsyncThunk(
    "/update/program/points/details",
    async (payload: Partial<IPointDetailResponse>) => {
      await ProgramService.updatePointDetail(payload);
      return payload;
    }
  );
}
