import { Select, Text } from "@shopify/polaris";
import { useState, useCallback, useContext } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  IWidgetResponse,
  floatingWidget,
  getWidgetSettings,
} from "@/redux/reducers/floatingWidget";

const Fonts = () => {
  const widget = useAppSelector(getWidgetSettings);
  const dispatch = useAppDispatch();
  const [selectedPrimary, setSelectedPrimary] = useState(
    widget.widget_font_primary_font
  );
  const [selectedSecondary, setSelectedSecondary] = useState(
    widget.widget_font_secondary_font
  );

  const handleSelectChangePrimary = useCallback((value: string) => {
    setSelectedPrimary(value);
    dispatch(
      floatingWidget.setWidget({ ...widget, widget_font_primary_font: value })
    );
  }, []);

  const handleSelectChangeSecondary = useCallback((value: string) => {
    setSelectedSecondary(value);
    dispatch(
      floatingWidget.setWidget({
        ...widget,
        widget_font_secondary_font: value,
      })
    );
  }, []);

  const options = [
    { label: "Poppins", value: "Poppins" },
    { label: "Roboto", value: "Roboto" },
    { label: "Lato", value: "Lato" },
  ];

  return (
    <>
      <Select
        label="Primary font"
        options={options}
        onChange={handleSelectChangePrimary}
        value={selectedPrimary}
      />
      <Text variant="bodyMd" as="p" color="subdued">
        Primary fonts includes title & header texts.
      </Text>
      <br />
      <Select
        label="Secondary font"
        options={options}
        onChange={handleSelectChangeSecondary}
        value={selectedSecondary}
      />
      <Text variant="bodyMd" as="p" color="subdued">
        Secondary fonts includes button, link, descriptions & paragraph texts.
      </Text>
    </>
  );
};

export default Fonts;
