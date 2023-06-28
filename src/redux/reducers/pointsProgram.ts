import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRootState } from "@/redux/store";
import {
  EarnPoint,
  ProgramActions,
  RedeemRewards,
} from "@/redux/actions/programActions";
import {
  IEarnPoint,
  IEarnPointWithAction,
  IGetEarnPointResponse,
  IStateUpdate,
} from "@/types/program/points/earnPoint";
import {
  IGetRedeemRewardResponse,
  IRewardRedeem,
  IRewardRedeemWithAction,
} from "@/types/program/points/redeemRewards";
import { IProgramStatus } from "@/types/program";

interface IPointProgramState {
  status: IProgramStatus;
  earn: {
    loading: boolean;
    list: IGetEarnPointResponse[];
    details: IEarnPointWithAction;
  };
  redeem: {
    loading: boolean;
    list: IGetRedeemRewardResponse[];
    details: IRewardRedeemWithAction;
  };
}

const initialState: IPointProgramState = {
  status: {} as IProgramStatus,
  earn: {
    loading: true,
    list: [],
    details: {} as IEarnPointWithAction,
  },
  redeem: {
    loading: true,
    list: [],
    details: {} as IRewardRedeemWithAction,
  },
};

const pointProgramSlice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    setEarnDetails: (
      state: IPointProgramState,
      action: PayloadAction<IEarnPointWithAction>
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
    setRedeemDetails: (
      state: IPointProgramState,
      action: PayloadAction<IRewardRedeemWithAction>
    ) => {
      state.redeem.details = action.payload;
    },
    updateRedeemState: (
      state: IPointProgramState,
      action: PayloadAction<{ key: string; value: string | boolean | number }>
    ) => {
      const { key, value } = action.payload;
      state.redeem.details = {
        ...state.redeem.details,
        [key]: value,
      };
    },
    updateProgramState: (
      state: IPointProgramState,
      action: PayloadAction<{ key: string; value: string | boolean | number }>
    ) => {
      const { key, value } = action.payload;
      state.status = {
        ...state.status,
        [key]: value,
      };
    },
  },
  extraReducers: (builder) => {
    // Earn Rewards
    builder.addCase(EarnPoint.getList.pending, (state: IPointProgramState) => {
      state.earn.loading = true;
    });
    builder.addCase(
      EarnPoint.getList.fulfilled,
      (
        state: IPointProgramState,
        action: PayloadAction<IGetEarnPointResponse[]>
      ) => {
        state.earn.loading = false;
        state.earn.list = action.payload;
      }
    );
    builder.addCase(
      EarnPoint.getDetails.pending,
      (state: IPointProgramState) => {
        state.earn.loading = true;
      }
    );
    builder.addCase(
      EarnPoint.getDetails.fulfilled,
      (
        state: IPointProgramState,
        action: PayloadAction<IEarnPointWithAction>
      ) => {
        state.earn.loading = false;
        state.earn.details = action.payload;
      }
    );
    builder.addCase(EarnPoint.update.pending, (state: IPointProgramState) => {
      state.earn.loading = true;
    });
    builder.addCase(
      EarnPoint.update.fulfilled,
      (
        state: IPointProgramState,
        action: PayloadAction<Partial<IEarnPoint>>
      ) => {
        state.earn.loading = false;
        state.earn.details = { ...state.earn.details, ...action.payload };
      }
    );
    // Redeem Rewards
    builder.addCase(
      RedeemRewards.getList.pending,
      (state: IPointProgramState) => {
        state.redeem.loading = true;
      }
    );
    builder.addCase(
      RedeemRewards.getList.fulfilled,
      (
        state: IPointProgramState,
        action: PayloadAction<IGetRedeemRewardResponse[]>
      ) => {
        state.redeem.loading = false;
        state.redeem.list = action.payload;
      }
    );
    builder.addCase(
      RedeemRewards.getDetail.pending,
      (state: IPointProgramState) => {
        state.redeem.loading = true;
      }
    );
    builder.addCase(
      RedeemRewards.getDetail.fulfilled,
      (
        state: IPointProgramState,
        action: PayloadAction<IRewardRedeemWithAction>
      ) => {
        state.redeem.loading = false;
        state.redeem.details = action.payload;
      }
    );
    builder.addCase(
      RedeemRewards.update.pending,
      (state: IPointProgramState) => {
        state.redeem.loading = true;
      }
    );
    builder.addCase(
      RedeemRewards.update.fulfilled,
      (
        state: IPointProgramState,
        action: PayloadAction<Partial<IRewardRedeem>>
      ) => {
        state.redeem.loading = false;
        state.redeem.details = { ...state.redeem.details, ...action.payload };
      }
    );
    builder.addCase(
      RedeemRewards.changeState.fulfilled,
      (state: IPointProgramState, action: PayloadAction<IStateUpdate>) => {
        const { id, state: checked } = action.payload;
        const array = state.redeem.list;
        const foundIndex = array.findIndex((value) => value.id === id);
        array[foundIndex].is_reward_enabled = checked ? 1 : 0;
        state.redeem.list = array;
      }
    );
    builder.addCase(
      EarnPoint.changeState.fulfilled,
      (state: IPointProgramState, action: PayloadAction<IStateUpdate>) => {
        const { id, state: checked } = action.payload;
        const array = state.earn.list;
        const foundIndex = array.findIndex((value) => value.id === id);
        array[foundIndex].is_action_enabled = checked ? 1 : 0;
        state.earn.list = array;
      }
    );
    builder.addCase(ProgramActions.getStatus.fulfilled, (state, action) => {
      state.status = action.payload;
    });
    builder.addCase(ProgramActions.getStatus.rejected, (state) => {
      state.status = {
        is_point_program_enabled: 0,
        is_referal_program_enabled: 0,
        is_vip_program_enabled: 0,
      } as IProgramStatus;
    });
  },
});

export const programPointActions = { ...pointProgramSlice.actions };

export const getProgramState = (state: IRootState) => state.pointProgram.status;

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
