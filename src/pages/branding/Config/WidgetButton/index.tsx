import { Divider, Select, Text, TextField } from "@shopify/polaris";
import { useState, useCallback, useContext } from "react";
import Launcher from "../../Widg/Launcher";

const WidgetButton = () => {
  // const { config, setConfig } = useContext(ConfigContext);
  const config = {
    launcherPlacement: "left",
    launcherPadding: "2",
    launcherType: "text",
    launcherText: "hello",
    launcherRadius: "50",
  };
  const [placement, setPlacement] = useState(config.launcherPlacement);
  const [padding, setPadding] = useState(config.launcherPadding);
  const [type, setType] = useState(config.launcherType);
  const [text, setText] = useState(config.launcherText);
  const [radius, setRadius] = useState(config.launcherRadius);

  const handlePlacement = useCallback((value: string) => {
    setPlacement(value);
    // setConfig((prev) => ({ ...prev, launcherPlacement: value }));
  }, []);

  const handlePadding = useCallback((value: string) => {
    setPadding(value);
    // setConfig((prev) => ({ ...prev, launcherPadding: value }));
  }, []);

  const handleType = useCallback((value: string) => {
    setType(value);
    // setConfig((prev) => ({ ...prev, launcherType: value }));
  }, []);

  const handleText = useCallback((value: string) => {
    setText(value);
    // setConfig((prev) => ({ ...prev, launcherText: value }));
  }, []);

  const handleRadius = useCallback((value: string) => {
    setRadius(value);
    // setConfig((prev) => ({ ...prev, launcherRadius: value }));
  }, []);

  const placementOptions = [
    { label: "Left", value: "left" },
    { label: "Right", value: "right" },
  ];
  const typeOptions = [
    { label: "Icon with text", value: "icontext" },
    { label: "Icon", value: "icon" },
    { label: "Text", value: "text" },
  ];
  const shapeOptions = [
    { label: "Circle", value: "50" },
    { label: "Rounded", value: "10" },
    { label: "Square", value: "0" },
  ];

  return (
    <>
      <Select
        label="Placement"
        options={placementOptions}
        onChange={handlePlacement}
        value={placement}
      />
      <Text variant="bodyMd" as="p" color="subdued">
        Set the widget button to the left or right of the screen.
      </Text>
      <br />
      <TextField
        autoComplete="off"
        label="Padding"
        type="text"
        value={padding}
        onChange={handlePadding}
        helpText="Adjust the position of the widget button from the edge of the screen."
      />
      <br />
      <Divider />
      <br />
      <Select
        label="Widget Button Type"
        options={typeOptions}
        onChange={handleType}
        value={type}
      />
      <Text variant="bodyMd" as="p" color="subdued">
        Customize your widget button type to match your brand.
      </Text>
      <br />
      <TextField
        autoComplete="off"
        label="Text"
        type="text"
        value={text}
        onChange={handleText}
      />
      <br />
      <Divider />
      <br />
      <Select
        label="Widget Button Shape"
        options={shapeOptions}
        onChange={handleRadius}
        value={radius}
      />
      <Text variant="bodyMd" as="p" color="subdued">
        Set the widget button container shape.
      </Text>
      <br />
      <Divider />
      <br />
      <Text variant="bodyLg" as="p">
        Preview:
      </Text>
      <br />
      <Launcher preview />
    </>
  );
};

export default WidgetButton;
