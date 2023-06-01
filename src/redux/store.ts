import { configureStore } from "@reduxjs/toolkit";
import _ from "lodash";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import settings from "./reducers/settings";
import programs from "./reducers/programs";

const store = configureStore({
  reducer: {
    settings,
    programs,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => IAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IRootState> = (arg) =>
  useSelector(arg, _.isEqual);

export default store;
