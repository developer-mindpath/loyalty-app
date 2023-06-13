import { createAsyncThunk } from "@reduxjs/toolkit";
import { SettingService } from "../../service/settingsService";
import {
  IUpdateEmailSettingRequest,
  IUpdateOrderSettingsRequest,
} from "../../types";

class SettingsAction {
  /**
   * Get Email Settings
   */
  public static getEmail = createAsyncThunk("/settings/get/email", async () => {
    return await SettingService.getEmail();
  });

  /**
   * Update Email Settings
   */
  public static updateEmail = createAsyncThunk(
    "/settings/update/email",
    async (payload: IUpdateEmailSettingRequest) => {
      return await SettingService.updateEmail(payload);
    }
  );

  /**
   * Get Order Settings
   */
  public static getOrders = createAsyncThunk("/settings/get/orders", () => {
    return SettingService.getOrder();
  });

  /**
   * Update Order Settings
   */
  public static updateOrder = createAsyncThunk(
    "/settings/update/orders",
    (payload: IUpdateOrderSettingsRequest) => {
      return SettingService.updateOrder(payload);
    }
  );
}

export default SettingsAction;
