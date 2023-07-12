import { SettingToggle, Text } from "@shopify/polaris";
import { useState, useCallback, useContext } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  IWidgetResponse,
  floatingWidget,
  getWidgetSettings,
} from "@/redux/reducers/floatingWidget";

const Hide = () => {
  const widget = useAppSelector(getWidgetSettings);
  const dispatch = useAppDispatch();
  const [active1, setActive1] = useState(!widget.widget_hide_widget_unless_deep_link_activated);
  const [active2, setActive2] = useState(!widget.widget_hide_widget_launcher_on_mobile);

  const handleToggle1 = useCallback(() => {
    setActive1((active) => !active);
    // setConfig((prev) => ({ ...prev, showWidget: active1 }));
  }, [active1]);
  const handleToggle2 = useCallback(() => {
    setActive2((active) => !active);
    // setConfig((prev) => ({ ...prev, showOnMobile: active2 }));
  }, [active2]);

  const contentStatus1 = active1 ? "Turn Off" : "Turn On";
  const textStatus1 = active1 ? "on" : "off";
  const contentStatus2 = active2 ? "Turn Off" : "Turn On";
  const textStatus2 = active2 ? "on" : "off";

  return (
    <>
      <SettingToggle
        action={{
          content: contentStatus1,
          onAction: handleToggle1,
        }}
        enabled={active1}
      >
        <p>Hide widget unless deep link is activated</p>
        This setting is "
        <Text variant="bodyMd" fontWeight="bold" as="span">
          {textStatus1}
        </Text>
        "
      </SettingToggle>

      <SettingToggle
        action={{
          content: contentStatus2,
          onAction: handleToggle2,
        }}
        enabled={active2}
      >
        <p>Hide widget launcher on mobile</p>
        This setting is "
        <Text variant="bodyMd" fontWeight="bold" as="span">
          {textStatus2}
        </Text>
        "
      </SettingToggle>
    </>
  );
};

export default Hide;
