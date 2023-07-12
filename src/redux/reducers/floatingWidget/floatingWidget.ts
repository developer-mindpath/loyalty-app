import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { IRootState } from "@/redux/types";

import type {
  IWidgetResponse,
  IFloatingDesignState,
  IWidgetTextResponse,
  IWidgetButtonResponse,
} from "@/types/floatingWidget";
import { FloatingWidgetActions } from ".";

const initialState: IFloatingDesignState = {
  widgetError: true,
  widgetTextError: true,
  widgetButtonError: true,
  widgetLoading: false,
  widgetTextLoading: false,
  widgetButtonLoading: false,
  widget: {} as IWidgetResponse,
  widgetButton: {} as IWidgetButtonResponse,
  widgetText: {} as IWidgetTextResponse,
};

const floatingWidgetSlice = createSlice({
  name: "emailDesign",
  initialState: initialState,
  reducers: {
    setWidget: (
      state: IFloatingDesignState,
      action: PayloadAction<IWidgetResponse>
    ) => {
      state.widget = action.payload;
    },
    setWidgetButton: (
      state: IFloatingDesignState,
      action: PayloadAction<IWidgetButtonResponse>
    ) => {
      state.widgetButton = action.payload;
    },
    setWidgetText: (
      state: IFloatingDesignState,
      action: PayloadAction<IWidgetTextResponse>
    ) => {
      state.widgetText = action.payload;
      console.log("action.payload: ", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FloatingWidgetActions.getWidget.pending, (state) => {
      state.widgetError = false;
      state.widgetLoading = true;
    });
    builder.addCase(
      FloatingWidgetActions.getWidget.fulfilled,
      (state, action: PayloadAction<IWidgetResponse>) => {
        state.widgetError = false;
        state.widgetLoading = false;
        state.widget = action.payload;
      }
    );
    builder.addCase(FloatingWidgetActions.getWidget.rejected, (state) => {
      state.widgetError = true;
      state.widgetLoading = false;
      state.widget = {} as IWidgetResponse;
    });

    builder.addCase(FloatingWidgetActions.getwidgetButton.pending, (state) => {
      state.widgetButtonError = false;
      state.widgetButtonLoading = true;
    });
    builder.addCase(
      FloatingWidgetActions.getwidgetButton.fulfilled,
      (state, action: PayloadAction<IWidgetButtonResponse>) => {
        state.widgetButtonError = false;
        state.widgetButtonLoading = false;
        state.widgetButton = action.payload;
      }
    );
    builder.addCase(FloatingWidgetActions.getwidgetButton.rejected, (state) => {
      state.widgetButtonError = true;
      state.widgetButtonLoading = false;
      state.widgetButton = {} as IWidgetButtonResponse;
    });

    builder.addCase(FloatingWidgetActions.getwidgetText.pending, (state) => {
      state.widgetTextError = false;
      state.widgetButtonLoading = true;
    });
    builder.addCase(
      FloatingWidgetActions.getwidgetText.fulfilled,
      (state, action: PayloadAction<IWidgetTextResponse>) => {
        state.widgetTextError = false;
        state.widgetButtonLoading = false;
        state.widgetText = action.payload;
      }
    );
    builder.addCase(FloatingWidgetActions.getwidgetText.rejected, (state) => {
      state.widgetTextError = true;
      state.widgetButtonLoading = false;
      state.widgetText = {} as IWidgetTextResponse;
    });
  },
});

export const floatingWidget = { ...floatingWidgetSlice.actions };

export const getWidgetSettings = (state: IRootState) =>
  state.floatingWidget.widget;
export const getWidgetLoading = (state: IRootState) =>
  state.floatingWidget.widgetLoading;
export const widgetError = (state: IRootState) =>
  state.floatingWidget.widgetError;

export const getWidgetButtonSetting = (state: IRootState) =>
  state.floatingWidget.widgetButton;
export const getWidgetButtonLoading = (state: IRootState) =>
  state.floatingWidget.widgetButtonLoading;
export const widgetButtonError = (state: IRootState) =>
  state.floatingWidget.widgetButtonError;

export const getWidgetTextSettings = (state: IRootState) =>
  state.floatingWidget.widgetText;
export const getWidgetTextLoading = (state: IRootState) =>
  state.floatingWidget.widgetLoading;
export const widgetTextError = (state: IRootState) =>
  state.floatingWidget.widgetError;

export default floatingWidgetSlice.reducer;
