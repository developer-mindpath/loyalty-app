import { SettingToggle, Text } from "@shopify/polaris";
import { useState, useCallback, useContext } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  IWidgetResponse,
  floatingWidget,
  getWidgetSettings,
} from "@/redux/reducers/floatingWidget";

const RemoveBranding = () => {
  const widget = useAppSelector(getWidgetSettings);
  const dispatch = useAppDispatch();
  const [active1, setActive1] = useState(!widget.widget_brandlift_branding);

  const handleToggle1 = useCallback(() => {
    setActive1((active) => !active);
    dispatch(
      floatingWidget.setWidget({
        ...widget,
        widget_brandlift_branding: !active1,
      })
    );
  }, [active1]);

  const contentStatus1 = active1 ? "Show Branding" : "Hide Branding";
  const textStatus1 = active1 ? "on" : "off";

  return (
    <>
      <SettingToggle
        action={{
          content: contentStatus1,
          onAction: handleToggle1,
        }}
        enabled={active1}
      >
        <p>"Powered by" widget footer branding</p>
        This setting is "
        <Text variant="bodyMd" fontWeight="bold" as="span">
          {textStatus1}
        </Text>
        "
      </SettingToggle>
    </>
  );
};

export default RemoveBranding;
