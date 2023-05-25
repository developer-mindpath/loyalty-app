import { useContext } from 'react';
import { ConfigContext } from '../../../../../App';

import styles from './index.module.css';

const Tier = ({ children, noLink }) => {
  const { config } = useContext(ConfigContext);

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
