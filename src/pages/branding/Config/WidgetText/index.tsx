// import { ConfigContext } from '../../../../../App';
import { TextField, Tabs } from "@shopify/polaris";
import { useState, useCallback, useContext } from "react";

const WidgetText = () => {
  // const { config, setConfig } = useContext(ConfigContext);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const [joinBlockTitle, setjoinBlockTitle] = useState('');
  const [joinBlockButtonText, setjoinBlockButtonText] = useState(
    ''
  );
  const [joinBlockFooterText, setjoinBlockFooterText] = useState(
    ''
  );

  const [earnTitle, setearnTitle] = useState('');
  const [earnSubtitle, setearnSubtitle] = useState('');
  const [earnButton1, setearnButton1] = useState('');
  const [earnButton2, setearnButton2] = useState('');

  const [referralTitle, setReferralTitle] = useState('');
  const [referralSubtitle, setReferralSubtitle] = useState(
    ''
  );
  const [referralText1, setReferralText1] = useState('');
  const [referralText2, setReferralText2] = useState('');

  const [tiersTitle, setTiersTitle] = useState('');
  const [tiersSubtitle, setTiersSubtitle] = useState('');

  const handleChangeTitle = useCallback((newValue: string) => {
    setTitle(newValue);
    // setConfig((prev) => ({
    //   ...prev,
    //   widgetTitle: newValue,
    // }));
  }, []);

  const handleChangeSubtitle = useCallback((newValue: string) => {
    setSubtitle(newValue);
    // setConfig((prev) => ({ ...prev, widgetSubtitle: newValue }));
  }, []);

  const handleChangejoinBlockTitle = useCallback((newValue: string) => {
    setjoinBlockTitle(newValue);
    // setConfig((prev) => ({ ...prev, joinBlockTitle: newValue }));
  }, []);

  const handleChangejoinBlockButtonText = useCallback((newValue: string) => {
    setjoinBlockButtonText(newValue);
    // setConfig((prev) => ({ ...prev, joinBlockButtonText: newValue }));
  }, []);

  const handleChangejoinBlockFooterText = useCallback((newValue: string) => {
    setjoinBlockFooterText(newValue);
    // setConfig((prev) => ({ ...prev, joinBlockFooterText: newValue }));
  }, []);

  const handleChangeEarnTitle = useCallback((newValue: string) => {
    setearnTitle(newValue);
    // setConfig((prev) => ({ ...prev, earnTitle: newValue }));
  }, []);

  const handleChangeEarnSubtitle = useCallback((newValue: string) => {
    setearnSubtitle(newValue);
    // setConfig((prev) => ({ ...prev, earnSubtitle: newValue }));
  }, []);

  const handleChangeEarnButton1 = useCallback((newValue: string) => {
    setearnButton1(newValue);
    // setConfig((prev) => ({ ...prev, earnButton1: newValue }));
  }, []);

  const handleChangeEarnButton2 = useCallback((newValue: string) => {
    setearnButton2(newValue);
    // setConfig((prev) => ({ ...prev, earnButton2: newValue }));
  }, []);

  const handleChangeReferralTitle = useCallback((newValue: string) => {
    setReferralTitle(newValue);
    // setConfig((prev) => ({ ...prev, referralTitle: newValue }));
  }, []);

  const handleChangeReferralSubtitle = useCallback((newValue: string) => {
    setReferralSubtitle(newValue);
    // setConfig((prev) => ({ ...prev, referralSubtitle: newValue }));
  }, []);

  const handleChangeReferralText1 = useCallback((newValue: string) => {
    setReferralText1(newValue);
    // setConfig((prev) => ({ ...prev, referralText1: newValue }));
  }, []);

  const handleChangeReferralText2 = useCallback((newValue: string) => {
    setReferralText2(newValue);
    // setConfig((prev) => ({ ...prev, referralText2: newValue }));
  }, []);

  const handleChangeTiersTitle = useCallback((newValue: string) => {
    setTiersTitle(newValue);
    // setConfig((prev) => ({ ...prev, tiersTitle: newValue }));
  }, []);

  const handleChangeTiersSubtitle = useCallback((newValue: string) => {
    setTiersSubtitle(newValue);
    // setConfig((prev) => ({ ...prev, tiersSubtitle: newValue }));
  }, []);

  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: "header-block",
      content: "Header",
      accessibilityLabel: "Header",
      panelID: "header-block-content",
    },
    {
      id: "join-block",
      content: "Join Block",
      panelID: "join-block-content",
    },
    {
      id: "earn-block",
      content: "Earn Block",
      panelID: "earn-block-content",
    },
    {
      id: "referral-block",
      content: "Referral Block",
      panelID: "referral-block-content",
    },
    {
      id: "tiers-block",
      content: "Tiers Block",
      panelID: "tiers-block-content",
    },
  ];

  return (
    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
      {selected === 0 && (
        <>
          <br />
          <TextField
            label="Widget Title"
            value={title}
            onChange={handleChangeTitle}
            autoComplete="off"
          />
          <br />
          <TextField
            label="Widget Subtitle"
            value={subtitle}
            onChange={handleChangeSubtitle}
            autoComplete="off"
          />
        </>
      )}
      {selected === 1 && (
        <>
          <br />
          <TextField
            label="Join Block Title"
            value={joinBlockTitle}
            onChange={handleChangejoinBlockTitle}
            autoComplete="off"
          />
          <br />
          <TextField
            label="Join Block Button Text"
            value={joinBlockButtonText}
            onChange={handleChangejoinBlockButtonText}
            autoComplete="off"
          />
          <br />
          <TextField
            label="Join Block Footer Text"
            value={joinBlockFooterText}
            onChange={handleChangejoinBlockFooterText}
            autoComplete="off"
          />
        </>
      )}
      {selected === 2 && (
        <>
          <br />
          <TextField
            label="Earn Block Title"
            value={earnTitle}
            onChange={handleChangeEarnTitle}
            autoComplete="off"
          />
          <br />
          <TextField
            label="Earn Block Subtitle"
            value={earnSubtitle}
            onChange={handleChangeEarnSubtitle}
            autoComplete="off"
          />
          <br />
          <TextField
            label="Earn Block Button 1 Text"
            value={earnButton1}
            onChange={handleChangeEarnButton1}
            autoComplete="off"
          />
          <br />
          <TextField
            label="Earn Block Button 2 Text"
            value={earnButton2}
            onChange={handleChangeEarnButton2}
            autoComplete="off"
          />
        </>
      )}
      {selected === 3 && (
        <>
          <br />
          <TextField
            label="Referral Block Title"
            value={referralTitle}
            onChange={handleChangeReferralTitle}
            autoComplete="off"
          />
          <br />
          <TextField
            label="Referral Block Subtitle"
            value={referralSubtitle}
            onChange={handleChangeReferralSubtitle}
            autoComplete="off"
          />
          <br />
          <TextField
            label="Referral Block Text 1"
            value={referralText1}
            onChange={handleChangeReferralText1}
            autoComplete="off"
          />
          <br />
          <TextField
            label="Referral Block Text 2"
            value={referralText2}
            onChange={handleChangeReferralText2}
            autoComplete="off"
          />
        </>
      )}
      {selected === 4 && (
        <>
          <br />
          <TextField
            label="Tiers Block Title"
            value={tiersTitle}
            onChange={handleChangeTiersTitle}
            autoComplete="off"
          />
          <br />
          <TextField
            label="Tiers Block Subtitle"
            value={tiersSubtitle}
            onChange={handleChangeTiersSubtitle}
            autoComplete="off"
          />
        </>
      )}
    </Tabs>
  );
};

export default WidgetText;
