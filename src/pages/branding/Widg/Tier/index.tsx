import { ReactNode, useContext } from "react";
// import { ConfigContext } from '../../../../../App';

import styles from "./index.module.css";
interface ITierProps {
  children: ReactNode;
  noLink?: boolean;
}
const Tier = ({ children, noLink }: ITierProps) => {
  // const { config } = useContext(ConfigContext);
  const config = {
    textRadius: "10",
  };

  return (
    <button
      style={{ borderRadius: parseInt(config.textRadius) }}
      className={`${styles.tierBtn} ${noLink && styles.noLink}`}
    >
      {children}
    </button>
  );
};

export default Tier;
