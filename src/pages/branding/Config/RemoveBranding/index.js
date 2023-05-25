import { SettingToggle, Text } from '@shopify/polaris';
import { useState, useCallback, useContext } from 'react';
import { ConfigContext } from '../../../../../App';

const RemoveBranding = () => {
  const { config, setConfig } = useContext(ConfigContext);
  const [active1, setActive1] = useState(!config.showBranding);

  const handleToggle1 = useCallback(() => {
    setActive1((active) => !active);
    setConfig((prev) => ({ ...prev, showBranding: active1 }));
  }, [active1, setConfig]);

  const contentStatus1 = active1 ? 'Show Branding' : 'Hide Branding';
  const textStatus1 = active1 ? 'on' : 'off';

  return (
    <>
      <SettingToggle
        action={{
          content: contentStatus1,
          onAction: handleToggle1,
        }}
        enabled={active1}
      >
        <p>"Powered by" widget footer branding</p>
        This setting is "
        <Text variant='bodyMd' fontWeight='bold' as='span'>
          {textStatus1}
        </Text>
        "
      </SettingToggle>
    </>
  );
};

export default RemoveBranding;
