import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProgramsService } from "../../service/programsService";
import {
  IAddRedeemingPointRequest,
  IGetPointRedeemingDetailRequest,
  IInsertPointEarningDetailsRequest,
  IInsertPointEarningRequest,
  IInsertRedeemingPointRequest,
  IUpdateRedeemingPointDetailRequest,
} from "../../types";

class ProgramsAction {
  /**
   * Get Redeeming Points Data
   */
  public static getRedeemingPoints = createAsyncThunk(
    "/programs/points/get/redeemingPoints",
    async (id: string) => {
      return await ProgramsService.getRedeemingPointList(id);
    }
  );

  /**
   * Add Redeeming Points Data
   */
  public static addRedeemingPoints = createAsyncThunk(
    "/programs/points/add/redeemingPoints",
    async (payload: IAddRedeemingPointRequest) => {
      return await ProgramsService.addRedeeemingPoints(payload);
    }
  );

  /**
   * get reedeming detail for a point
   */
  public static getPointRedeemingDetail = createAsyncThunk(
    "/programs/points/get/redeemingPointsDetails",
    async (payload: IGetPointRedeemingDetailRequest) => {
      return await ProgramsService.getPointRedeemingDetail(payload);
    }
  );

  /**
   * insert reedeming detail for a point
   */
  public static insertRedeemingPointDetail = createAsyncThunk(
    "/programs/points/insert/redeemingPoint",
    async (payload: IInsertRedeemingPointRequest) => {
      return await ProgramsService.insertRedeemingPointDetail(payload);
    }
  );

  /**
   * update reedeming detail for a point
   */
  public static updatePointRedeemDetail = createAsyncThunk(
    "/programs/points/update/redeemingPoint",
    async (payload: IUpdateRedeemingPointDetailRequest) => {
      return await ProgramsService.updatePointRedeemDetail(payload);
    }
  );

  /**
   * get Point Earnings
   */
  public static getPointEarnings = createAsyncThunk(
    "/programs/points/get/pointEarnings",
    async (id: string) => {
      return await ProgramsService.getPointEarnings(id);
    }
  );

  /**
   * insert Point Earnings
   */
  public static insertPointEarning = createAsyncThunk(
    "/programs/points/insert/pointEarnings",
    async (payload: IInsertPointEarningRequest) => {
      return await ProgramsService.insertPointEarning(payload);
    }
  );

  /**
   * insert Point Earnings detail
   */
  public static insertPointEarningDetail = createAsyncThunk(
    "/programs/points/insert/pointEarningsdetails",
    async (payload: IInsertPointEarningDetailsRequest) => {
      return await ProgramsService.insertPointEarningDetail(payload);
    }
  );
}

export default ProgramsAction;
