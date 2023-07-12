import { configureStore } from "@reduxjs/toolkit";

import settings from "./reducers/settings";
import pointProgram from "./reducers/pointsProgram";
import translations from "./reducers/translations";
import floatingWidget from "./reducers/floatingWidget";

const store = configureStore({
  reducer: {
    settings,
    pointProgram,
    translations,
    floatingWidget,
  },
});

export default store;
