import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store";

interface ISettingsState {
  emailSettings: {
    name: string;
    fromEmail: string;
    replyEmail: string;
  };
}

const initialState: ISettingsState = {
  emailSettings: {
    name: "",
    fromEmail: "",
    replyEmail: "",
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.emailSettings.name = action.payload;
    },
  },
});

export const settingsActions = { ...settingsSlice.actions };

export const getEmailSettings = (state: IRootState) =>
  state.settings.emailSettings;

export default settingsSlice.reducer;
