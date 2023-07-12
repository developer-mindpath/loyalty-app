import { Divider, Select, Text, TextField, Tabs } from "@shopify/polaris";
import { useState, useCallback, useContext, useEffect } from "react";
import Launcher from "../../Widg/Launcher";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  FloatingWidgetActions,
  IWidgetResponse,
  floatingWidget,
  getWidgetButtonSetting,
} from "@/redux/reducers/floatingWidget";
import DesktopWidgetButton from "./desktop";
import MobileWidgetButton from "./mobile";
import ObjectUtil from "@/utils/object";
import useContextualSave from "@/hooks/useContextualSave";

const WidgetButton = () => {
  const widgetButton = useAppSelector(getWidgetButtonSetting);
  const [selected, setSelected] = useState(0);
  const dispatch = useAppDispatch();
  const handleTabChange = useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),
    [setSelected]
  );
  const [initalState, setInital] = useState(widgetButton);

  const handleDiscard = async () => {
    await dispatch(floatingWidget.setWidgetButton(initalState!));
  };

  const handleSave = async () => {
    const payload = ObjectUtil.getChanges(initalState, widgetButton);
    try {
      await dispatch(FloatingWidgetActions.updatewidgetButton(payload));
      setInital(widgetButton);
    } catch (e) {
      console.error(e);
    }
  };

  useContextualSave(initalState, widgetButton, {
    handleSave,
    handleDiscard,
  });

  // const getData = useCallback(async () => {
  //   try {
  //     const response = await dispatch(
  //       FloatingWidgetActions.getwidgetButton()
  //     ).unwrap();
  //     setInital(response);
  //   } catch (e) {
  //     setInital({});
  //   }
  // }, []);

  // useEffect(() => {
  //   getData();
  // }, []);

  const tabs = [
    {
      id: "widget-button-desktop",
      content: "Desktop",
      accessibilityLabel: "Desktop",
      panelID: "widget-button-desktop",
    },
    {
      id: "widget-button-mobile",
      content: "Mobile",
      panelID: "widget-button-desktop",
    },
  ];

  return (
    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
      {selected === 0 && <DesktopWidgetButton />}
      {selected === 1 && <MobileWidgetButton />}
    </Tabs>
  );
};

export default WidgetButton;
