import { PropsWithChildren } from "react";
import PointDetailProvider from "@/contexts/pointsDetail";

export const EarnProvider = ({ children }: PropsWithChildren) => (
  <PointDetailProvider>{children}</PointDetailProvider>
);

export default EarnProvider;
