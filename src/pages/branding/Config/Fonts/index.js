import { Select, Text } from '@shopify/polaris';
import { useState, useCallback, useContext } from 'react';
import { ConfigContext } from '../../../../../App';

const Fonts = () => {
  const { config, setConfig } = useContext(ConfigContext);
  const [selectedPrimary, setSelectedPrimary] = useState(config.fontPrimary);
  const [selectedSecondary, setSelectedSecondary] = useState(
    config.fontSecondary
  );

  const handleSelectChangePrimary = useCallback(
    (value) => {
      setSelectedPrimary(value);
      setConfig((prev) => ({ ...prev, fontPrimary: value }));
    },
    [setConfig]
  );

  const handleSelectChangeSecondary = useCallback(
    (value) => {
      setSelectedSecondary(value);
      setConfig((prev) => ({ ...prev, fontSecondary: value }));
    },
    [setConfig]
  );

  const options = [
    { label: 'Poppins', value: 'Poppins' },
    { label: 'Roboto', value: 'Roboto' },
    { label: 'Lato', value: 'Lato' },
  ];

  return (
    <>
      <Select
        label='Primary font'
        options={options}
        onChange={handleSelectChangePrimary}
        value={selectedPrimary}
      />
      <Text variant='bodyMd' as='p' color='subdued'>
        Primary fonts includes title & header texts.
      </Text>
      <br />
      <Select
        label='Secondary font'
        options={options}
        onChange={handleSelectChangeSecondary}
        value={selectedSecondary}
      />
      <Text variant='bodyMd' as='p' color='subdued'>
        Secondary fonts includes button, link, descriptions & paragraph texts.
      </Text>
    </>
  );
};

export default Fonts;
