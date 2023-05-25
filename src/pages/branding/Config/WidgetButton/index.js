import { Divider, Select, Text, TextField } from '@shopify/polaris';
import { useState, useCallback, useContext } from 'react';
import { ConfigContext } from '../../../../../App';
import Launcher from '../../Widg/Launcher';

const WidgetButton = () => {
  const { config, setConfig } = useContext(ConfigContext);
  const [placement, setPlacement] = useState(config.launcherPlacement);
  const [padding, setPadding] = useState(config.launcherPadding);
  const [type, setType] = useState(config.launcherType);
  const [text, setText] = useState(config.launcherText);
  const [radius, setRadius] = useState(config.launcherRadius);

  const handlePlacement = useCallback(
    (value) => {
      setPlacement(value);
      setConfig((prev) => ({ ...prev, launcherPlacement: value }));
    },
    [setConfig]
  );

  const handlePadding = useCallback(
    (value) => {
      setPadding(value);
      setConfig((prev) => ({ ...prev, launcherPadding: value }));
    },
    [setConfig]
  );

  const handleType = useCallback(
    (value) => {
      setType(value);
      setConfig((prev) => ({ ...prev, launcherType: value }));
    },
    [setConfig]
  );

  const handleText = useCallback(
    (value) => {
      setText(value);
      setConfig((prev) => ({ ...prev, launcherText: value }));
    },
    [setConfig]
  );

  const handleRadius = useCallback(
    (value) => {
      setRadius(value);
      setConfig((prev) => ({ ...prev, launcherRadius: value }));
    },
    [setConfig]
  );

  const placementOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];
  const typeOptions = [
    { label: 'Icon with text', value: 'icontext' },
    { label: 'Icon', value: 'icon' },
    { label: 'Text', value: 'text' },
  ];
  const shapeOptions = [
    { label: 'Circle', value: '50' },
    { label: 'Rounded', value: '10' },
    { label: 'Square', value: '0' },
  ];

  return (
    <>
      <Select
        label='Placement'
        options={placementOptions}
        onChange={handlePlacement}
        value={placement}
      />
      <Text variant='bodyMd' as='p' color='subdued'>
        Set the widget button to the left or right of the screen.
      </Text>
      <br />
      <TextField
        label='Padding'
        type='text'
        value={padding}
        onChange={handlePadding}
        helpText='Adjust the position of the widget button from the edge of the screen.'
      />
      <br />
      <Divider />
      <br />
      <Select
        label='Widget Button Type'
        options={typeOptions}
        onChange={handleType}
        value={type}
      />
      <Text variant='bodyMd' as='p' color='subdued'>
        Customize your widget button type to match your brand.
      </Text>
      <br />
      <TextField label='Text' type='text' value={text} onChange={handleText} />
      <br />
      <Divider />
      <br />
      <Select
        label='Widget Button Shape'
        options={shapeOptions}
        onChange={handleRadius}
        value={radius}
      />
      <Text variant='bodyMd' as='p' color='subdued'>
        Set the widget button container shape.
      </Text>
      <br />
      <Divider />
      <br />
      <Text variant='bodyLg' as='p'>
        Preview:
      </Text>
      <br />
      <Launcher config={config} preview />
    </>
  );
};

export default WidgetButton;
