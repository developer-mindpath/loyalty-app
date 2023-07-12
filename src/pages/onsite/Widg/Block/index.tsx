import { ReactNode, useContext } from "react";
// import { ConfigContext } from '../../../../../App';
import styles from "./index.module.css";
import { useAppSelector } from "@/redux/hook";
import { getWidgetSettings } from "@/redux/reducers/floatingWidget";

interface IBlockProps {
  children: ReactNode;
}

const Block = ({ children }: IBlockProps) => {
  const widget = useAppSelector(getWidgetSettings);

  return (
    <div
      className={styles.block}
      style={{
        borderRadius: parseInt(widget.widget_corner_shape_screen_sections),
        color: widget.widget_color_others_icon_color,
        borderColor: widget.widget_color_header_background,
      }}
    >
      {children}
    </div>
  );
};

export default Block;
