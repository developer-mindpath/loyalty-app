import { Select, HorizontalStack } from "@shopify/polaris";
import { useState, useCallback } from "react";

const Corners = () => {
  const config = {
    widgetRadius: "10",
    sectionsRadius: "10",
    buttonsRadius: "12",
    textRadius: "12",
  };
  const [widgetRadius, setwidgetRadius] = useState(config.widgetRadius);
  const [sectionsRadius, setSectionsRadius] = useState(config.sectionsRadius);
  const [buttonsRadius, setButtonsRadius] = useState(config.buttonsRadius);
  const [textRadius, setTextRadius] = useState(config.textRadius);

  const handlewidgetRadius = useCallback((value: string) => {
    setwidgetRadius(value);
    // setConfig((prev) => ({ ...prev, widgetRadius: value }));
  }, []);
  const handleSectionsRadius = useCallback((value: string) => {
    setSectionsRadius(value);
    // setConfig((prev) => ({ ...prev, sectionsRadius: value }));
  }, []);
  const handleButtonsRadius = useCallback((value: string) => {
    setButtonsRadius(value);
    // setConfig((prev) => ({ ...prev, buttonsRadius: value }));
  }, []);
  const handleTextRadius = useCallback((value: string) => {
    setTextRadius(value);
    // setConfig((prev) => ({ ...prev, textRadius: value }));
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
