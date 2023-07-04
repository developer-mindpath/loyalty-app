import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import isEqual from "lodash/isEqual";
import { IAppDispatch, IRootState } from "./types";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => IAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IRootState> = (arg) =>
  useSelector(arg, isEqual);
