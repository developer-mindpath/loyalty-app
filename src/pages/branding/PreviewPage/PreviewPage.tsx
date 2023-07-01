import Widget from "../Widg/Widget";
// import { ConfigContext } from '../../../../App';
import { useState, useContext } from "react";
import Launcher from "../Widg/Launcher";
import styles from "./index.module.css";
import { Helmet } from "react-helmet";

const PreviewPage = () => {
  // const { config, setConfig } = useContext(ConfigContext);
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
            margin: parseInt("2"),
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
