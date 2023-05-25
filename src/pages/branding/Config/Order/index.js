import { useState, useContext } from 'react';
import { List, arrayMove } from 'react-movable';
import { DragHandleMinor } from '@shopify/polaris-icons';
import { ConfigContext } from '../../../../../App';

const Order = () => {
  const { config, setConfig } = useContext(ConfigContext);
  const [items, setItems] = useState(config.panelsOrder);

  return (
    <List
      values={items}
      onChange={({ oldIndex, newIndex }) => {
        setItems(arrayMove(items, oldIndex, newIndex));
        setConfig((prev) => ({
          ...prev,
          panelsOrder: arrayMove(items, oldIndex, newIndex),
        }));
      }}
      renderList={({ children, props }) => (
        <ul {...props} className='drag-list'>
          {children}
        </ul>
      )}
      renderItem={({ value, props }) => (
        <li {...props} className='drag-item'>
          <DragHandleMinor />
          {value}
        </li>
      )}
    />
  );
};

export default Order;
