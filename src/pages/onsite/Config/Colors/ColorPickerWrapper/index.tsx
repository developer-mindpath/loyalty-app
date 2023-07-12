import { useContext, useState } from "react";
import { ColorPicker, ColorPickerChangeEvent } from "primereact/colorpicker";
import "primereact/resources/primereact.min.css";
// import { ConfigContext } from '../../../emailDesign';

import styles from "./index.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { IWidgetResponse, floatingWidget, getWidgetSettings } from "@/redux/reducers/floatingWidget";

interface IColorPickerProps {
  label: string;
  configItem: string;
}

const ColorPickerWrapper = ({ label, configItem }: IColorPickerProps) => {
  const widget = useAppSelector(getWidgetSettings);
  const dispatch = useAppDispatch();
  const item = widget[configItem as keyof IWidgetResponse];
  const [color, setColor] = useState(item);
  const handleChangeColor = (e: ColorPickerChangeEvent) => {
    setColor(e.value as string);
    dispatch(floatingWidget.setWidget({...widget , [configItem]: e.value}))
  };
  return (
    <div className={styles.wrapper}>
      <ColorPicker value={color} onChange={(e) => handleChangeColor(e)} />{" "}
      {label}
    </div>
  );
};

export default ColorPickerWrapper;
