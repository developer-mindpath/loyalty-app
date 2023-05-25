import { Icon } from '@shopify/polaris';
import styles from './index.module.css';
import { MobileBackArrowMajor } from '@shopify/polaris-icons';

const Header = ({ config, page, setPage, loggedIn }) => {
  return (
    <div
      style={{
        borderRadius: `${parseInt(config.widgetRadius)}px ${parseInt(
          config.widgetRadius
        )}px 0 0`,
        backgroundColor: `#${config.headerBg}`,
        color: `#${config.headerText}`,
        fontFamily: `${config.fontPrimary}, Helvetica, Arial, sans-serif`,
      }}
      className={styles.widgetHeader}
    >
      {page === 'default' ? (
        !loggedIn ? (
          <>
            <h2>{config.widgetTitle}</h2>
            <p className={styles.subHeader}>{config.widgetSubtitle}</p>
          </>
        ) : (
          <>
            <h2>Your Points</h2>
            <p className={styles.subHeader}>500</p>
          </>
        )
      ) : (
        <>
          <button onClick={() => setPage('default')}>
            <Icon source={MobileBackArrowMajor} color='subdued' />
          </button>
          {loggedIn ? <h3>Your Points</h3> : <h3>{config.widgetTitle}</h3>}
        </>
      )}
    </div>
  );
};
export default Header;
