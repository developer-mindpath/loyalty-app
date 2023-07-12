import { createAsyncThunk } from "@reduxjs/toolkit";
import type {
  IWidgetButtonResponse,
  IWidgetResponse,
  IWidgetTextResponse,
} from "@/redux/reducers/floatingWidget";
import FloatingWidgetService from "@/service/floatingwidgetSerivce";

class FloatingWidgetActions {
  /**
   * Get floating widget config
   */
  public static getWidget = createAsyncThunk(
    "/onsite/floatingWidget/widget/get",
    async () => {
      return await FloatingWidgetService.getWidget();
    }
  );

  /**
   * Update floating widget config
   */
  public static updateWidget = createAsyncThunk(
    "/onsite/floatingWidget/widget/update",
    async (payload: Partial<IWidgetResponse>) => {
      return await FloatingWidgetService.updateWidget(payload);
    }
  );

  /**
   * Get floating widget button config
   */
  public static getwidgetButton = createAsyncThunk(
    "/onsite/floatingWidget/widgetButton/get",
    async () => {
      return await FloatingWidgetService.getWidgetButton();
    }
  );

  /**
   * Update floating widget button config
   */
  public static updatewidgetButton = createAsyncThunk(
    "/onsite/floatingWidget/widgetButton/update",
    async (payload: Partial<IWidgetButtonResponse>) => {
      return await FloatingWidgetService.updateWidgetButton(payload);
    }
  );

  /**
   * Get floating widget text config
   */
  public static getwidgetText = createAsyncThunk(
    "/onsite/floatingWidget/widgetConfig/get",
    async () => {
      return await FloatingWidgetService.getWidgetText();
    }
  );

  /**
   * Update floating widget text config
   */
  public static updatewidgetText = createAsyncThunk(
    "/onsite/floatingWidget/widgetConfig/update",
    async (payload: Partial<IWidgetTextResponse>) => {
      return await FloatingWidgetService.updateWidgetText(payload);
    }
  );
}
export default FloatingWidgetActions;
