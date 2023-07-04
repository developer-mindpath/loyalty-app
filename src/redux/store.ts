import { configureStore } from "@reduxjs/toolkit";

import settings from "./reducers/settings";
import pointProgram from "./reducers/pointsProgram";
import translations from "./reducers/translations";

const store = configureStore({
  reducer: {
    settings,
    pointProgram,
    translations,
  },
});

export default store;
