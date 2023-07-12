import { Icon } from "@shopify/polaris";
import styles from "./index.module.css";
import { MobileBackArrowMajor } from "@shopify/polaris-icons";
import { useAppSelector } from "@/redux/hook";
import {
  getWidgetSettings,
  getWidgetButtonSetting,
  getWidgetTextSettings,
} from "@/redux/reducers/floatingWidget";

interface IHeaderprops {
  page: string;
  setPage: (value: string) => void;
  loggedIn: boolean;
}

const Header = ({ page, setPage, loggedIn }: IHeaderprops) => {
  const widget = useAppSelector(getWidgetSettings);
  const widgetButton = useAppSelector(getWidgetButtonSetting);
  const widgetText = useAppSelector(getWidgetTextSettings);
  const config = {
    widgetRadius:widget.widget_corner_shape_screen_launcher_edge,
    headerBg: widget.widget_color_header_background,
    headerTextColor: widget.widget_color_header_text,
    fontPrimary: widget.widget_font_primary_font,
    widgetTitle: widgetText.visitor_header_text_title,
    widgetSubtitle: widgetText.visitor_header_text_caption,
  };
  console.log('config: ', config.headerBg);
  return (
    <div
      style={{
        borderRadius: `${parseInt(config.widgetRadius)}px ${parseInt(
          config.widgetRadius
        )}px 0 0`,
        backgroundColor: `#${config.headerBg}`,
        color: `#${config.headerTextColor}`,
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
