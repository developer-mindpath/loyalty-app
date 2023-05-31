import {
  ActionReducerMapBuilder,
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";
import { IRootState } from "../store";
import {
  IGetEmailSettingsResponse,
  IGetOrderSettingsResponse,
  IResponseWithBody,
} from "../../types";
import SettingsAction from "../actions/settingsAction";

interface ISettingsState {
  settingsPage: {
    order: IGetOrderSettingsResponse;
    email: IGetEmailSettingsResponse;
    Loading: {
      emailLoading: boolean;
      orderLoading: boolean;
    };
  };
}

const initialState: ISettingsState = {
  settingsPage: {
    order: {
      orders_subtotal: 0,
      orders_exclude_subtoken_discount: 0,
      orders_include_tax: 0,
      orders_include_shipping: 0,
      points_cancelation_refunde: 0,
      orders_include_partialy_refunded: 0,
      orders_include_voided: 0,
      reward_channel: "online",
      who_can_participate: "any",
    } as IGetOrderSettingsResponse,
    email: {
      custom_email_domain: "",
      custom_url_path_for_email: "",
      email_from_email: "",
      email_reply_email: "",
      email_from_name: "",
    } as IGetEmailSettingsResponse,
    Loading: {
      emailLoading: false,
      orderLoading : false,
    },
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    setEmailState: (
      state: ISettingsState,
      action: PayloadAction<IGetEmailSettingsResponse>
    ) => {
      state.settingsPage.email = action.payload;
    },
    updateEmailState: (
      state: ISettingsState,
      action: PayloadAction<{ key: string; value: string }>
    ) => {
      const { key, value } = action.payload;
      state.settingsPage.email = {
        ...state.settingsPage.email,
        [key]: value,
      };
    },
    setOrderState: (
      state: ISettingsState,
      action: PayloadAction<IGetOrderSettingsResponse>
    ) => {
      state.settingsPage.order = action.payload;
    },
    updateOrderState: (
      state: ISettingsState,
      action: PayloadAction<{ key: string; value: string | number }>
    ) => {
      const { key, value } = action.payload;
      state.settingsPage.order = {
        ...state.settingsPage.order,
        [key]: value,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      SettingsAction.getEmail.pending,
      (state: ISettingsState) => {
        state.settingsPage.Loading.emailLoading = true;
      }
    );
    builder.addCase(
      SettingsAction.getEmail.fulfilled,
      (
        state: ISettingsState,
        action: PayloadAction<IResponseWithBody<IGetEmailSettingsResponse>>
      ) => {
        state.settingsPage.email = action.payload.body;
        state.settingsPage.Loading.emailLoading = false;
      }
    );
    builder.addCase(
      SettingsAction.updateEmail.pending,
      (state: ISettingsState) => {
        state.settingsPage.Loading.emailLoading = true;
      }
    );
    builder.addCase(
      SettingsAction.updateEmail.fulfilled,
      (state: ISettingsState) => {
        state.settingsPage.Loading.emailLoading = false;
      }
    );
    builder.addCase(
      SettingsAction.getOrders.pending,
      (state: ISettingsState) => {
        state.settingsPage.Loading.orderLoading = true;
      }
    );
    builder.addCase(
      SettingsAction.getOrders.fulfilled,
      (
        state: ISettingsState,
        action: PayloadAction<IResponseWithBody<IGetOrderSettingsResponse>>
      ) => {
        state.settingsPage.order = action.payload.body;
        state.settingsPage.Loading.orderLoading = false;
      }
    );
    builder.addCase(
      SettingsAction.updateOrder.pending,
      (state: ISettingsState) => {
        state.settingsPage.Loading.orderLoading = true;
      }
    );
    builder.addCase(
      SettingsAction.updateOrder.fulfilled,
      (state: ISettingsState) => {
        state.settingsPage.Loading.orderLoading = false;
      }
    );
  },
});

export const settingsActions = { ...settingsSlice.actions };

export const getEmailSettings = (state: IRootState) =>
  state.settings.settingsPage.email;
export const getEmailLoading = (state: IRootState) =>
  state.settings.settingsPage.Loading.emailLoading;
export const getOrderSettings = (state: IRootState) =>
  state.settings.settingsPage.order;
export const getOrderlLoading = (state: IRootState) =>
  state.settings.settingsPage.Loading.orderLoading;

export default settingsSlice.reducer;
