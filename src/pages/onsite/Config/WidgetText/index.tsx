// import { ConfigContext } from '../../../../../App';
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  getWidgetTextSettings,
  floatingWidget,
  FloatingWidgetActions,
  IWidgetTextResponse,
} from "@/redux/reducers/floatingWidget";
import useContextualSave from "@/hooks/useContextualSave";
import { TextField, Tabs } from "@shopify/polaris";
import { useState, useCallback, useContext, useEffect } from "react";
import ObjectUtil from "@/utils/object";

const WidgetText = () => {
  const widgetText = useAppSelector(getWidgetTextSettings);
  const dispatch = useAppDispatch();
  const {
    visitor_header_text_title,
    visitor_header_text_caption,
    visitor_account_creation_text_title,
    visitor_account_creation_button_create_account_text,
    visitor_account_creation_text_signin,
    visitor_points_text_title,
    visitor_points_text_description,
    member_header_text_caption,
  } = widgetText;

  const [initalState, setIntialState] =
    useState<IWidgetTextResponse>(widgetText);

  const handleDiscard = useCallback(async () => {
    await dispatch(floatingWidget.setWidgetText(initalState!));
  }, [dispatch, initalState]);

  const handleSave = async () => {
    const payload = ObjectUtil.getChanges(initalState, widgetText);
    try {
      await dispatch(FloatingWidgetActions.updatewidgetText(payload));
      setIntialState(widgetText);
    } catch (e) {
      console.error(e);
    }
  };

  useContextualSave(initalState, widgetText, {
    handleSave,
    handleDiscard,
  });

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await dispatch(
  //       FloatingWidgetActions.getwidgetText()
  //     ).unwrap();
  //     setIntialState(response);
  //   };

  //   getData();
  // }, [dispatch, setIntialState]);

  const handleChangeTitle = useCallback((value: string) => {
    dispatch(
      floatingWidget.setWidgetText({
        ...widgetText,
        visitor_header_text_title: value,
      })
    );
  }, []);

  const handleChangeCaption = useCallback((value: string) => {
    dispatch(
      floatingWidget.setWidgetText({
        ...widgetText,
        visitor_header_text_caption: value,
      })
    );
  }, []);

  const handleChangeCreationTile = useCallback((value: string) => {
    dispatch(
      floatingWidget.setWidgetText({
        ...widgetText,
        visitor_account_creation_text_title: value,
      })
    );
  }, []);

  const handleChangeCreationSignIn = useCallback((value: string) => {
    dispatch(
      floatingWidget.setWidgetText({
        ...widgetText,
        visitor_account_creation_text_signin: value,
      })
    );
  }, []);

  const handleChangeAcctCreationButton = useCallback((value: string) => {
    dispatch(
      floatingWidget.setWidgetText({
        ...widgetText,
        visitor_account_creation_button_create_account_text: value,
      })
    );
  }, []);

  const handleChangeEarnTitle = useCallback((value: string) => {
    dispatch(
      floatingWidget.setWidgetText({
        ...widgetText,
        visitor_points_text_title: value,
      })
    );
  }, []);

  const handleChangeEarnSubtitle = useCallback((value: string) => {
    dispatch(
      floatingWidget.setWidgetText({
        ...widgetText,
        visitor_points_text_description: value,
      })
    );
  }, []);

  const handleMemberCaptionChange = useCallback((value: string) => {
    dispatch(
      floatingWidget.setWidgetText({
        ...widgetText,
        member_header_text_caption: value,
      })
    );
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
      content: "Account Creation",
      panelID: "join-block-content",
    },
    {
      id: "earn-block",
      content: "Points",
      panelID: "earn-block-content",
    },
  ];

  return (
    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
      {selected === 0 && (
        <>
          <br />
          <TextField
            label="Visitor header title"
            value={visitor_header_text_title}
            onChange={handleChangeTitle}
            autoComplete="off"
          />
          <br />
          <TextField
            label="Visitor header caption"
            value={visitor_header_text_caption}
            onChange={handleChangeCaption}
            autoComplete="off"
          />
          <TextField
            label="Member header caption"
            value={member_header_text_caption}
            onChange={handleMemberCaptionChange}
            autoComplete="off"
            helpText="Shows for logged in members"
          />
        </>
      )}
      {selected === 1 && (
        <>
          <br />
          <TextField
            label="Acct creation title"
            value={visitor_account_creation_text_title}
            onChange={handleChangeCreationTile}
            autoComplete="off"
          />
          <br />
          <TextField
            label="Acct creation sign in"
            value={visitor_account_creation_button_create_account_text}
            onChange={handleChangeCreationSignIn}
            autoComplete="off"
          />
          <br />
          <TextField
            label="Acct creation btn"
            value={visitor_account_creation_text_signin}
            onChange={handleChangeAcctCreationButton}
            autoComplete="off"
          />
        </>
      )}
      {selected === 2 && (
        <>
          <br />
          <TextField
            label="Visitor point header"
            value={visitor_points_text_title}
            onChange={handleChangeEarnTitle}
            autoComplete="off"
          />
          <br />
          <TextField
            label="Visitor point desc"
            value={visitor_points_text_description}
            onChange={handleChangeEarnSubtitle}
            autoComplete="off"
          />
        </>
      )}
    </Tabs>
  );
};

export default WidgetText;
