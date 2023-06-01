import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store";
import {
  IGetRedeemingPointsResponse,
  IGetPointRedeemingDetailResponse,
  IResponseWithBody,
  IGetPointEarningResponse,
} from "../../types";
import ProgramsAction from "../actions/programAction";

interface IProgramsState {
  programsPage: {
    points: {
      redeemingPoints: IGetRedeemingPointsResponse[];
      redeemingPointDetail: IGetPointRedeemingDetailResponse[];
      earningPoints: IGetPointEarningResponse[];
    };
  };
}

const initialState: IProgramsState = {
  programsPage: {
    points: {
      redeemingPoints: [] as IGetRedeemingPointsResponse[],
      redeemingPointDetail: [] as IGetPointRedeemingDetailResponse[],
      earningPoints: [] as IGetPointEarningResponse[],
    },
  },
};

const programsSlice = createSlice({
  name: "programs",
  initialState: initialState,
  reducers: {
    setRedeemingPoints: (
      state: IProgramsState,
      action: PayloadAction<IGetRedeemingPointsResponse[]>
    ) => {
      state.programsPage.points.redeemingPoints = action.payload;
    },
    setRedeemingPointsDetail: (
      state: IProgramsState,
      action: PayloadAction<IGetPointRedeemingDetailResponse[]>
    ) => {
      state.programsPage.points.redeemingPointDetail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      ProgramsAction.getRedeemingPoints.fulfilled,
      (
        state: IProgramsState,
        action: PayloadAction<IResponseWithBody<IGetRedeemingPointsResponse[]>>
      ) => {
        state.programsPage.points.redeemingPoints = action.payload.body;
      }
    );
    builder.addCase(
      ProgramsAction.getPointRedeemingDetail.fulfilled,
      (
        state: IProgramsState,
        action: PayloadAction<
          IResponseWithBody<IGetPointRedeemingDetailResponse[]>
        >
      ) => {
        state.programsPage.points.redeemingPointDetail = action.payload.body;
      }
    );
    builder.addCase(
      ProgramsAction.getPointEarnings.fulfilled,
      (
        state: IProgramsState,
        action: PayloadAction<IResponseWithBody<IGetPointEarningResponse[]>>
      ) => {
        state.programsPage.points.earningPoints = action.payload.body;
      }
    );
  },
});

export const programsActions = { ...programsSlice.actions };

export const getRedeemingPoints = (state: IRootState) =>
  state.programs.programsPage.points.redeemingPoints;
export const getRedeemingPointDetail = (state: IRootState) =>
  state.programs.programsPage.points.redeemingPointDetail;

export default programsSlice.reducer;
