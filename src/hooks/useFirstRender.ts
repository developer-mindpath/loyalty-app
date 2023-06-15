import { useEffect, useRef } from "react";

const useFirstRender = (): boolean => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return isFirstRender.current;
};

export default useFirstRender;
