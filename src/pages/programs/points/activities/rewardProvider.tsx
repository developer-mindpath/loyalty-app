import { PropsWithChildren } from "react";
import RewardDetailProvider from "../../../../contexts/reawardDetail";

export const ReawrdProvider = ({ children }: PropsWithChildren) => (
  <RewardDetailProvider>{children}</RewardDetailProvider>
);

export default ReawrdProvider;
