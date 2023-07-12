import Widget from "../Widg/Widget";
// import { ConfigContext } from '../../../../App';
import { useState, useContext } from "react";
import Launcher from "../Widg/Launcher";
import styles from "./index.module.css";
import { Helmet } from "react-helmet";
import { useAppSelector } from "@/redux/hook";
import {
  getWidgetButtonSetting,
  getWidgetSettings,
} from "@/redux/reducers/floatingWidget";

const PreviewPage = () => {
  const widgetButton = useAppSelector(getWidgetButtonSetting);
  const [showWidget, setShowWidget] = useState(false);

  return (
    <>
      <Helmet>
        <title>Preview</title>
      </Helmet>
      {showWidget && (
        <div
          className={styles.widgetWrapper}
          style={{
            margin: widgetButton.desktop_padding_side_padding,
          }}
        >
          <Widget />
        </div>
      )}
      <div
        className={styles.launcherWrapper}
        onClick={() => setShowWidget(!showWidget)}
      >
        <Launcher preview={false} />
      </div>
    </>
  );
};

export default PreviewPage;
