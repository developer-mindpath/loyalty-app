import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store";
import { ProgramAction } from "../actions/programActions";
import {
  IPointDetailResponse,
  IPointResponse,
  IRedeemPointResponse,
} from "../../types/program";

interface IPointProgramState {
  earn: {
    loading: boolean;
    list: IPointResponse[];
    details: IPointDetailResponse;
  };
  redeem: {
    loading: boolean;
    list: IRedeemPointResponse[];
    details: IRedeemPointResponse;
  };
}

const initialState: IPointProgramState = {
  earn: {
    loading: true,
    list: [],
    details: {} as IPointDetailResponse,
  },
  redeem: {
    loading: true,
    list: [],
    details: {} as IRedeemPointResponse,
  },
};

const pointProgramSlice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    setEarnDetails: (
      state: IPointProgramState,
      action: PayloadAction<IPointDetailResponse>
    ) => {
      state.earn.details = action.payload;
    },
    updateEarnState: (
      state: IPointProgramState,
      action: PayloadAction<{ key: string; value: string | boolean | number }>
    ) => {
      const { key, value } = action.payload;
      state.earn.details = {
        ...state.earn.details,
        [key]: value,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      ProgramAction.getPoints.pending,
      (state: IPointProgramState) => {
        state.earn.loading = true;
      }
    );
    builder.addCase(
      ProgramAction.getPoints.fulfilled,
      (state: IPointProgramState, action: PayloadAction<IPointResponse[]>) => {
        state.earn.loading = false;
        state.earn.list = action.payload;
      }
    );
    builder.addCase(
      ProgramAction.getPointDetail.pending,
      (state: IPointProgramState) => {
        state.earn.loading = true;
      }
    );
    builder.addCase(
      ProgramAction.getPointDetail.fulfilled,
      (
        state: IPointProgramState,
        action: PayloadAction<IPointDetailResponse>
      ) => {
        state.earn.loading = false;
        state.earn.details = action.payload;
      }
    );
    builder.addCase(
      ProgramAction.updatePointDetail.pending,
      (state: IPointProgramState) => {
        state.earn.loading = true;
      }
    );
    builder.addCase(
      ProgramAction.updatePointDetail.fulfilled,
      (
        state: IPointProgramState,
        action: PayloadAction<Partial<IPointDetailResponse>>
      ) => {
        state.earn.loading = false;
        state.earn.details = { ...state.earn.details, ...action.payload };
      }
    );
    builder.addCase(
      ProgramAction.getRedeemPoint.pending,
      (state: IPointProgramState) => {
        state.redeem.loading = true;
      }
    );
    builder.addCase(
      ProgramAction.getRedeemPoint.fulfilled,
      (
        state: IPointProgramState,
        action: PayloadAction<IRedeemPointResponse[]>
      ) => {
        state.redeem.loading = false;
        state.redeem.list = action.payload;
      }
    );
  },
});

export const programPointActions = { ...pointProgramSlice.actions };

export const getEarnLoading = (state: IRootState) =>
  state.pointProgram.earn.loading;
export const getEarnList = (state: IRootState) => state.pointProgram.earn.list;
export const getEarnDetails = (state: IRootState) =>
  state.pointProgram.earn.details;

export const getRedeemLoading = (state: IRootState) =>
  state.pointProgram.redeem.loading;
export const getRedeemList = (state: IRootState) =>
  state.pointProgram.redeem.list;
export const getRedeemDetails = (state: IRootState) =>
  state.pointProgram.redeem.details;

export default pointProgramSlice.reducer;
