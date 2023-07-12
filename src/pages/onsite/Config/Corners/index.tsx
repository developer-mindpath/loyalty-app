import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  getWidgetSettings,
  floatingWidget,
} from "@/redux/reducers/floatingWidget";
import { Select, HorizontalStack } from "@shopify/polaris";
import { useState, useCallback } from "react";

const Corners = () => {
  const widget = useAppSelector(getWidgetSettings);
  const dispatch = useAppDispatch();

  const [widgetRadius, setwidgetRadius] = useState(
    widget.widget_corner_shape_screen_launcher_edge
  );
  const [sectionsRadius, setSectionsRadius] = useState(
    widget.widget_corner_shape_screen_sections
  );
  const [buttonsRadius, setButtonsRadius] = useState(
    widget.widget_corner_shape_button
  );
  const [textRadius, setTextRadius] = useState(
    widget.widget_corner_shape_text_fields
  );

  const handlewidgetRadius = useCallback((value: string) => {
    setwidgetRadius(value);
    dispatch(
      floatingWidget.setWidget({
        ...widget,
        widget_corner_shape_screen_launcher_edge: value,
      })
    );
  }, []);
  const handleSectionsRadius = useCallback((value: string) => {
    setSectionsRadius(value);
    dispatch(
      floatingWidget.setWidget({
        ...widget,
        widget_corner_shape_screen_sections: value,
      })
    );
  }, []);
  const handleButtonsRadius = useCallback((value: string) => {
    setButtonsRadius(value);
    dispatch(
      floatingWidget.setWidget({
        ...widget,
        widget_corner_shape_button: value,
      })
    );
  }, []);
  const handleTextRadius = useCallback((value: string) => {
    setTextRadius(value);
    dispatch(
      floatingWidget.setWidget({
        ...widget,
        widget_corner_shape_text_fields: value,
      })
    );
  }, []);

  const options = [
    { label: "Rounded", value: "10" },
    { label: "Square", value: "0" },
    { label: "Circle", value: "50" },
  ];

  return (
    <HorizontalStack gap="6">
      <Select
        label="Launcher Edges"
        options={options}
        onChange={handlewidgetRadius}
        value={widgetRadius}
      />
      <Select
        label="Sections"
        options={options}
        onChange={handleSectionsRadius}
        value={sectionsRadius}
      />
      <Select
        label="Buttons"
        options={options}
        onChange={handleButtonsRadius}
        value={buttonsRadius}
      />
      <Select
        label="Text Fields"
        options={options}
        onChange={handleTextRadius}
        value={textRadius}
      />
    </HorizontalStack>
  );
};

export default Corners;
