import { useContext } from 'react';
import { ConfigContext } from '../../../../../App';
import styles from './index.module.css';

const Block = ({ children }) => {
  const { config } = useContext(ConfigContext);

  return (
    <div
      className={styles.block}
      style={{
        borderRadius: parseInt(config.sectionsRadius),
        color: `#${config.iconColor}`,
        borderColor: `#${config.headerBg}`,
      }}
    >
      {children}
    </div>
  );
};

export default Block;
