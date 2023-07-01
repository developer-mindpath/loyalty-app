import { TextField } from "@shopify/polaris";
import { useState, useCallback, useContext } from "react";
// import { ConfigContext } from '../../../../../App';

const CustomCSS = () => {
  // const { config, setConfig } = useContext(ConfigContext);
  const config = {
    customCSS: "",
  };
  const [value, setValue] = useState(config.customCSS);

  const handleChange = useCallback((newValue: string) => {
    setValue(newValue);
    // setConfig((prev) => ({ ...prev, customCSS: newValue }));
  }, []);

  return (
    <TextField
      label="Custom CSS"
      value={value}
      onChange={handleChange}
      multiline={10}
      autoComplete="off"
    />
  );
};

export default CustomCSS;
