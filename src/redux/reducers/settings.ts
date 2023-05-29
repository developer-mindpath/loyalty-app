import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store";
import {
  IGetEmailSettingsResponse,
  IGetOrderSettingsResponse,
} from "../../types";

interface ISettingsState {
  settingsPage: {
    order: IGetOrderSettingsResponse;
    email: IGetEmailSettingsResponse;
  };
}

const initialState: ISettingsState = {
  settingsPage: {
    order: {
      orders_exclude_subtoken_discount: 0,
      orders_include_partialy_refunded: 0,
      orders_include_shipping: 0,
      orders_include_tax: 0,
      orders_include_voided: 0,
      orders_subtotal: 0,
      points_cancelation_refunde: 0,
      reward_channel: "0",
      who_can_participate: "any",
    } as IGetOrderSettingsResponse,
    email: {
      custom_email_domain: "",
      custom_url_path_for_email: "",
      email_from_email: "",
      email_reply_email: "",
      email_from_name: "",
    } as IGetEmailSettingsResponse,
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
  },
});

export const settingsActions = { ...settingsSlice.actions };

export const getEmailSettings = (state: IRootState) =>
  state.settings.settingsPage.email;

export default settingsSlice.reducer;
