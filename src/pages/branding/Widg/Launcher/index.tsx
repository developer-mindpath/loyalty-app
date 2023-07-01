import { Icon } from "@shopify/polaris";
import { GiftCardMajor } from "@shopify/polaris-icons";

import styles from "./index.module.css";
interface ILauncherProps {
  config?: any;
  preview: boolean;
}

const Launcher = ({ preview }: ILauncherProps) => {
  const config = {
    launcherPlacement: "right", 
    launcherPadding: "10", 
    launcherRadius: "5", 
    widgetBg: "FF0000", 
    widgetColor: "FFFFFF", 
    launcherType: "icon", 
    launcherText: "Chat", 
  };
  
  return (
    <button
      className={styles.launcher}
      style={{
        position: preview ? "static" : "fixed",
        [config.launcherPlacement]: parseInt(config.launcherPadding),
        bottom: parseInt(config.launcherPadding),
        borderRadius: parseInt(config.launcherRadius),
        backgroundColor: `#${config.widgetBg}`,
        color: `#${config.widgetColor}`,
      }}
    >
      {config.launcherType !== "text" && (
        <GiftCardMajor
          width={28}
          style={{ fill: `#${config.widgetColor}`, width: 28 }}
        />
      )}
      {config.launcherType === "icontext" && <>&nbsp; &nbsp;</>}
      {config.launcherType !== "icon" && <span>{config.launcherText}</span>}
    </button>
  );
};

export default Launcher;
