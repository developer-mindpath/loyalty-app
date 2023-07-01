import { ReactNode, useContext } from "react";
// import { ConfigContext } from '../../../../../App';
import styles from "./index.module.css";

interface IBlockProps {
  children: ReactNode;
}

const Block = ({ children }: IBlockProps) => {
  // const { config } = useContext(ConfigContext);

  return (
    <div
      className={styles.block}
      style={{
        borderRadius: parseInt("14"),
        color: `#${"fff"}`,
        borderColor: `#${"h6h6h6"}`,
      }}
    >
      {children}
    </div>
  );
};

export default Block;
