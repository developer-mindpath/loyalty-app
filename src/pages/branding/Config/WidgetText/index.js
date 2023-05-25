import { ConfigContext } from '../../../../../App';
import { TextField, Tabs } from '@shopify/polaris';
import { useState, useCallback, useContext } from 'react';

const WidgetText = () => {
  const { config, setConfig } = useContext(ConfigContext);
  const [title, setTitle] = useState(config.widgetTitle);
  const [subtitle, setSubtitle] = useState(config.widgetSubtitle);

  const [joinBlockTitle, setjoinBlockTitle] = useState(config.joinBlockTitle);
  const [joinBlockButtonText, setjoinBlockButtonText] = useState(
    config.joinBlockButtonText
  );
  const [joinBlockFooterText, setjoinBlockFooterText] = useState(
    config.joinBlockFooterText
  );

  const [earnTitle, setearnTitle] = useState(config.earnTitle);
  const [earnSubtitle, setearnSubtitle] = useState(config.earnSubtitle);
  const [earnButton1, setearnButton1] = useState(config.earnButton1);
  const [earnButton2, setearnButton2] = useState(config.earnButton2);

  const [referralTitle, setReferralTitle] = useState(config.referralTitle);
  const [referralSubtitle, setReferralSubtitle] = useState(
    config.referralSubtitle
  );
  const [referralText1, setReferralText1] = useState(config.referralText1);
  const [referralText2, setReferralText2] = useState(config.referralText2);

  const [tiersTitle, setTiersTitle] = useState(config.tiersTitle);
  const [tiersSubtitle, setTiersSubtitle] = useState(config.tiersSubtitle);

  const handleChangeTitle = useCallback(
    (newValue) => {
      setTitle(newValue);
      setConfig((prev) => ({
        ...prev,
        widgetTitle: newValue,
      }));
    },
    [setConfig]
  );

  const handleChangeSubtitle = useCallback(
    (newValue) => {
      setSubtitle(newValue);
      setConfig((prev) => ({ ...prev, widgetSubtitle: newValue }));
    },
    [setConfig]
  );

  const handleChangejoinBlockTitle = useCallback(
    (newValue) => {
      setjoinBlockTitle(newValue);
      setConfig((prev) => ({ ...prev, joinBlockTitle: newValue }));
    },
    [setConfig]
  );

  const handleChangejoinBlockButtonText = useCallback(
    (newValue) => {
      setjoinBlockButtonText(newValue);
      setConfig((prev) => ({ ...prev, joinBlockButtonText: newValue }));
    },
    [setConfig]
  );

  const handleChangejoinBlockFooterText = useCallback(
    (newValue) => {
      setjoinBlockFooterText(newValue);
      setConfig((prev) => ({ ...prev, joinBlockFooterText: newValue }));
    },
    [setConfig]
  );

  const handleChangeEarnTitle = useCallback(
    (newValue) => {
      setearnTitle(newValue);
      setConfig((prev) => ({ ...prev, earnTitle: newValue }));
    },
    [setConfig]
  );

  const handleChangeEarnSubtitle = useCallback(
    (newValue) => {
      setearnSubtitle(newValue);
      setConfig((prev) => ({ ...prev, earnSubtitle: newValue }));
    },
    [setConfig]
  );

  const handleChangeEarnButton1 = useCallback(
    (newValue) => {
      setearnButton1(newValue);
      setConfig((prev) => ({ ...prev, earnButton1: newValue }));
    },
    [setConfig]
  );

  const handleChangeEarnButton2 = useCallback(
    (newValue) => {
      setearnButton2(newValue);
      setConfig((prev) => ({ ...prev, earnButton2: newValue }));
    },
    [setConfig]
  );

  const handleChangeReferralTitle = useCallback(
    (newValue) => {
      setReferralTitle(newValue);
      setConfig((prev) => ({ ...prev, referralTitle: newValue }));
    },
    [setConfig]
  );

  const handleChangeReferralSubtitle = useCallback(
    (newValue) => {
      setReferralSubtitle(newValue);
      setConfig((prev) => ({ ...prev, referralSubtitle: newValue }));
    },
    [setConfig]
  );

  const handleChangeReferralText1 = useCallback(
    (newValue) => {
      setReferralText1(newValue);
      setConfig((prev) => ({ ...prev, referralText1: newValue }));
    },
    [setConfig]
  );

  const handleChangeReferralText2 = useCallback(
    (newValue) => {
      setReferralText2(newValue);
      setConfig((prev) => ({ ...prev, referralText2: newValue }));
    },
    [setConfig]
  );

  const handleChangeTiersTitle = useCallback(
    (newValue) => {
      setTiersTitle(newValue);
      setConfig((prev) => ({ ...prev, tiersTitle: newValue }));
    },
    [setConfig]
  );

  const handleChangeTiersSubtitle = useCallback(
    (newValue) => {
      setTiersSubtitle(newValue);
      setConfig((prev) => ({ ...prev, tiersSubtitle: newValue }));
    },
    [setConfig]
  );

  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: 'header-block',
      content: 'Header',
      accessibilityLabel: 'Header',
      panelID: 'header-block-content',
    },
    {
      id: 'join-block',
      content: 'Join Block',
      panelID: 'join-block-content',
    },
    {
      id: 'earn-block',
      content: 'Earn Block',
      panelID: 'earn-block-content',
    },
    {
      id: 'referral-block',
      content: 'Referral Block',
      panelID: 'referral-block-content',
    },
    {
      id: 'tiers-block',
      content: 'Tiers Block',
      panelID: 'tiers-block-content',
    },
  ];

  return (
    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
      {selected === 0 && (
        <>
          <br />
          <TextField
            label='Widget Title'
            value={title}
            onChange={handleChangeTitle}
            autoComplete='off'
          />
          <br />
          <TextField
            label='Widget Subtitle'
            value={subtitle}
            onChange={handleChangeSubtitle}
            autoComplete='off'
          />
        </>
      )}
      {selected === 1 && (
        <>
          <br />
          <TextField
            label='Join Block Title'
            value={joinBlockTitle}
            onChange={handleChangejoinBlockTitle}
            autoComplete='off'
          />
          <br />
          <TextField
            label='Join Block Button Text'
            value={joinBlockButtonText}
            onChange={handleChangejoinBlockButtonText}
            autoComplete='off'
          />
          <br />
          <TextField
            label='Join Block Footer Text'
            value={joinBlockFooterText}
            onChange={handleChangejoinBlockFooterText}
            autoComplete='off'
          />
        </>
      )}
      {selected === 2 && (
        <>
          <br />
          <TextField
            label='Earn Block Title'
            value={earnTitle}
            onChange={handleChangeEarnTitle}
            autoComplete='off'
          />
          <br />
          <TextField
            label='Earn Block Subtitle'
            value={earnSubtitle}
            onChange={handleChangeEarnSubtitle}
            autoComplete='off'
          />
          <br />
          <TextField
            label='Earn Block Button 1 Text'
            value={earnButton1}
            onChange={handleChangeEarnButton1}
            autoComplete='off'
          />
          <br />
          <TextField
            label='Earn Block Button 2 Text'
            value={earnButton2}
            onChange={handleChangeEarnButton2}
            autoComplete='off'
          />
        </>
      )}
      {selected === 3 && (
        <>
          <br />
          <TextField
            label='Referral Block Title'
            value={referralTitle}
            onChange={handleChangeReferralTitle}
            autoComplete='off'
          />
          <br />
          <TextField
            label='Referral Block Subtitle'
            value={referralSubtitle}
            onChange={handleChangeReferralSubtitle}
            autoComplete='off'
          />
          <br />
          <TextField
            label='Referral Block Text 1'
            value={referralText1}
            onChange={handleChangeReferralText1}
            autoComplete='off'
          />
          <br />
          <TextField
            label='Referral Block Text 2'
            value={referralText2}
            onChange={handleChangeReferralText2}
            autoComplete='off'
          />
        </>
      )}
      {selected === 4 && (
        <>
          <br />
          <TextField
            label='Tiers Block Title'
            value={tiersTitle}
            onChange={handleChangeTiersTitle}
            autoComplete='off'
          />
          <br />
          <TextField
            label='Tiers Block Subtitle'
            value={tiersSubtitle}
            onChange={handleChangeTiersSubtitle}
            autoComplete='off'
          />
        </>
      )}
    </Tabs>
  );
};

export default WidgetText;
