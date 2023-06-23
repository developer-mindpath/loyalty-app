import _ from "lodash";
import { useEffect, useMemo } from "react";
import {
  IFireContextualSaveContext,
  useContextualSaveContext,
} from "@/contexts/contextualSave";
import useFirstRender from "./useFirstRender";

const useContextualSave = <T>(
  inital: T,
  current: T,
  fireOptions: IFireContextualSaveContext,
  isLoading = false
): void => {
  const isFirstRender = useFirstRender();
  const contextualSave = useContextualSaveContext();
  // We only need to save the inital state on initalization
  const initalState = useMemo(() => inital, [inital]);
  const isEqual = useMemo(
    () => _.isEqual(initalState, current),
    [initalState, current]
  );

  useEffect(() => {
    if (isFirstRender || isLoading) return;

    if (!isEqual) {
      // Set Context State to True
      contextualSave.fire(fireOptions);
      return;
    }

    // Set Context State to False
    contextualSave.setVisiblity(false);
  }, [contextualSave, fireOptions, isEqual, isFirstRender, isLoading]);
};

export default useContextualSave;
