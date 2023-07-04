import { PropsWithChildren, memo, useMemo } from "react";

export interface IHiddenProps extends PropsWithChildren {
  isHidden: boolean;
  flexItem?: boolean;
}

function Hidden(props: IHiddenProps) {
  const { flexItem, isHidden, children } = props;

  const display = useMemo(() => {
    if (isHidden) {
      return "none";
    }

    if (flexItem) return "flex";

    return "block";
  }, [isHidden, flexItem]);

  return <div style={{ display }}>{children}</div>;
}

export default memo(Hidden);
