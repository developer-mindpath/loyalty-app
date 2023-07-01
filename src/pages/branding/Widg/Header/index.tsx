import { Icon } from "@shopify/polaris";
import styles from "./index.module.css";
import { MobileBackArrowMajor } from "@shopify/polaris-icons";

interface IHeaderprops {
  page: string;
  setPage: (value: string) => void;
  loggedIn: boolean;
}

const Header = ({ page, setPage, loggedIn }: IHeaderprops) => {
  const config = {
    widgetRadius: "10",
    headerBg: "h5h5h5",
    headerText: "headerText",
    fontPrimary: "poppins",
    widgetTitle: "widgetTitle",
    widgetSubtitle: "widgetSubtitle",
  };
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
      {page === "default" ? (
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
          <button onClick={() => setPage("default")}>
            <Icon source={MobileBackArrowMajor} color="subdued" />
          </button>
          {loggedIn ? <h3>Your Points</h3> : <h3>{config.widgetTitle}</h3>}
        </>
      )}
    </div>
  );
};
export default Header;
