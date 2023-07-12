import { Icon } from "@shopify/polaris";
import { GiftCardMajor } from "@shopify/polaris-icons";

import styles from "./index.module.css";
import {
  getWidgetButtonSetting,
  getWidgetSettings,
} from "@/redux/reducers/floatingWidget";
import { useAppSelector } from "@/redux/hook";
interface ILauncherProps {
  config?: any;
  preview?: boolean;
}

const Launcher = ({ preview = true }: ILauncherProps) => {
  const widgetButton = useAppSelector(getWidgetButtonSetting);
  const widget = useAppSelector(getWidgetSettings);

  console.log(widgetButton.desktop_widget_button_shape);
  return (
    <button
      className={styles.launcher}
      style={{
        position: preview ? "static" : "fixed",
        [widgetButton.desktop_placement]:
          widgetButton.desktop_padding_side_padding,
        bottom: widgetButton.desktop_padding_bottom_padding,
        borderRadius: parseInt(widgetButton.desktop_widget_button_shape),
        backgroundColor: `#${widget.widget_color_widget_button_background}`,
        color: `#${widget.widget_color_widget_button_text}`,
      }}
    >
      {widgetButton.desktop_widget_button_shape !== "text" && (
        <GiftCardMajor
          width={28}
          style={{
            fill: `#${widget.widget_color_widget_button_background}`,
            width: 28,
          }}
        />
      )}
      {widgetButton.desktop_widget_button_shape === "icontext" && (
        <>&nbsp; &nbsp;</>
      )}
      {widgetButton.desktop_widget_button_shape !== "icon" && (
        // TODO - after api field is added relace this id
        <span>{widgetButton.id}</span>
      )}
    </button>
  );
};

export default Launcher;
