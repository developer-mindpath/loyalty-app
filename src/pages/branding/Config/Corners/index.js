import { Select, AlphaStack } from '@shopify/polaris';
import { useState, useCallback } from 'react';

const Corners = ({ config, setConfig }) => {
  const [widgetRadius, setwidgetRadius] = useState(config.widgetRadius);
  const [sectionsRadius, setSectionsRadius] = useState(config.sectionsRadius);
  const [buttonsRadius, setButtonsRadius] = useState(config.buttonsRadius);
  const [textRadius, setTextRadius] = useState(config.textRadius);

  const handlewidgetRadius = useCallback(
    (value) => {
      setwidgetRadius(value);
      setConfig((prev) => ({ ...prev, widgetRadius: value }));
    },
    [setConfig]
  );
  const handleSectionsRadius = useCallback(
    (value) => {
      setSectionsRadius(value);
      setConfig((prev) => ({ ...prev, sectionsRadius: value }));
    },
    [setConfig]
  );
  const handleButtonsRadius = useCallback(
    (value) => {
      setButtonsRadius(value);
      setConfig((prev) => ({ ...prev, buttonsRadius: value }));
    },
    [setConfig]
  );
  const handleTextRadius = useCallback(
    (value) => {
      setTextRadius(value);
      setConfig((prev) => ({ ...prev, textRadius: value }));
    },
    [setConfig]
  );

  const options = [
    { label: 'Rounded', value: '10' },
    { label: 'Square', value: '0' },
    { label: 'Circle', value: '50' },
  ];

  return (
    <AlphaStack gap='6' fullWidth>
      <Select
        label='Launcher Edges'
        options={options}
        onChange={handlewidgetRadius}
        value={widgetRadius}
      />
      <Select
        label='Sections'
        options={options}
        onChange={handleSectionsRadius}
        value={sectionsRadius}
      />
      <Select
        label='Buttons'
        options={options}
        onChange={handleButtonsRadius}
        value={buttonsRadius}
      />
      <Select
        label='Text Fields'
        options={options}
        onChange={handleTextRadius}
        value={textRadius}
      />
    </AlphaStack>
  );
};

export default Corners;
