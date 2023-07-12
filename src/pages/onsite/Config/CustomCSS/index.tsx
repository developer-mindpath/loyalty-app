import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  getWidgetSettings,
  floatingWidget,
} from "@/redux/reducers/floatingWidget";
import { TextField } from "@shopify/polaris";
import {  useCallback } from "react";

const CustomCSS = () => {
  const dispatch = useAppDispatch();
  const widget = useAppSelector(getWidgetSettings);
  const handleChange = useCallback((newValue: string) => {
    dispatch(
      floatingWidget.setWidget({ ...widget, widget_custom_css: newValue })
    );
  }, []);

  return (
    <TextField
      label="Custom CSS"
      value={widget.widget_custom_css}
      onChange={handleChange}
      multiline={10}
      autoComplete="off"
    />
  );
};

export default CustomCSS;
