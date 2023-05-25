import { TextField } from '@shopify/polaris';
import { useState, useCallback, useContext } from 'react';
import { ConfigContext } from '../../../../../App';

const CustomCSS = () => {
  const { config, setConfig } = useContext(ConfigContext);
  const [value, setValue] = useState(config.customCSS);

  const handleChange = useCallback(
    (newValue) => {
      setValue(newValue);
      setConfig((prev) => ({ ...prev, customCSS: newValue }));
    },
    [setConfig]
  );

  return (
    <TextField
      label='Custom CSS'
      value={value}
      onChange={handleChange}
      multiline={10}
      autoComplete='off'
    />
  );
};

export default CustomCSS;
