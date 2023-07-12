import { useState, useContext } from "react";
import { List, arrayMove } from "react-movable";
import { DragHandleMinor } from "@shopify/polaris-icons";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  IWidgetResponse,
  floatingWidget,
  getWidgetSettings,
} from "@/redux/reducers/floatingWidget";

const Order = () => {
  const widget = useAppSelector(getWidgetSettings);
  const dispatch = useAppDispatch();
  const config = {
    panelsOrder: [1, 2, 3, 4],
  };
  const [items, setItems] = useState(config.panelsOrder);

  return (
    <List
      values={items}
      onChange={({ oldIndex, newIndex }) => {
        setItems(arrayMove(items, oldIndex, newIndex));
        // setConfig((prev) => ({
        //   ...prev,
        //   panelsOrder: arrayMove(items, oldIndex, newIndex),
        // }));
      }}
      renderList={({ children, props }) => (
        <ul {...props} className="drag-list">
          {children}
        </ul>
      )}
      renderItem={({ value, props }) => (
        <li {...props} className="drag-item">
          <DragHandleMinor />
          {value}
        </li>
      )}
    />
  );
};

export default Order;
