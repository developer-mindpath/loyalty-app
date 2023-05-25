import { useContext, useState } from 'react';
import { ColorPicker } from 'primereact/colorpicker';
import 'primereact/resources/primereact.min.css';
import { ConfigContext } from '../../../../../../App';

import styles from './index.module.css';

const ColorPickerWrapper = ({ label, configItem }) => {
  const { config, setConfig } = useContext(ConfigContext);
  const item = config[configItem];
  const [color, setColor] = useState(item);

  const handleChangeColor = (e) => {
    setColor(e.value);
    setConfig((prev) => ({ ...prev, [configItem]: e.value }));
  };
  return (
    <div className={styles.wrapper}>
      <ColorPicker value={color} onChange={(e) => handleChangeColor(e)} />{' '}
      {label}
    </div>
  );
};

export default ColorPickerWrapper;
