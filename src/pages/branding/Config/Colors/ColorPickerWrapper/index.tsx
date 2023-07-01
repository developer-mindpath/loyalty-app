import { useContext, useState } from "react";
import { ColorPicker, ColorPickerChangeEvent } from "primereact/colorpicker";
import "primereact/resources/primereact.min.css";
// import { ConfigContext } from '../../../emailDesign';

import styles from "./index.module.css";

interface IColorPickerProps {
  label: string;
  configItem: string;
}

const ColorPickerWrapper = ({ label, configItem }: IColorPickerProps) => {
  // const { config, setConfig } = useContext(ConfigContext);
  const config: {
    [key: string]: string;
  } = {
    headerBg: "#fff",
    headerText: "#fff",
    textsTitle: "#fff",
    textsDescription: "#fff",
    buttonBg: "#fff",
    buttonColor: "#fff",
    widgetBg: "#fff",
    widgetColor: "#fff",
    linkColor: "#fff",
    iconColor: "#fff",
  };
  const item = config[configItem];
  const [color, setColor] = useState(item);

  const handleChangeColor = (e: ColorPickerChangeEvent) => {
    setColor(e.value as string);
    // setConfig((prev) => ({ ...prev, [configItem]: e.value }));
  };
  return (
    <div className={styles.wrapper}>
      <ColorPicker value={color} onChange={(e) => handleChangeColor(e)} />{" "}
      {label}
    </div>
  );
};

export default ColorPickerWrapper;
