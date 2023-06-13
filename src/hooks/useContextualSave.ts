import _ from "lodash";
import { useEffect, useMemo } from "react";
import {
  IFireContextualSaveContext,
  useContextualSaveContext,
} from "../contexts/contextualSave";

const useContextualSave = <T>(
  inital: T,
  current: T,
  fireOptions: IFireContextualSaveContext
): void => {
  const contextualSave = useContextualSaveContext();
  // We only need to save the inital state on initalization
  const initalState = useMemo(() => inital, [inital]);
  const isEqual = useMemo(
    () => _.isEqual(initalState, current),
    [initalState, current]
  );

  useEffect(() => {
    if (!isEqual) {
      // Set Context State to True
      contextualSave.fire(fireOptions);
      return;
    }

    // Set Context State to False
    contextualSave.setVisiblity(false);
  }, [contextualSave, fireOptions, isEqual]);
};

export default useContextualSave;
