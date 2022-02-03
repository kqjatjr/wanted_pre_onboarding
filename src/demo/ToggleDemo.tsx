import { useState } from "react";
import Toggle from "../components/Toggle";
import styles from "./ToggleDemo.module.scss";

const ToggleDemo = () => {
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState("Toggle  Switch OFF");

  const clickToggle = () => {
    if (checked === true) {
      setChecked(false);
      setText("Toggle  Switch OFF");
    } else {
      setChecked(true);
      setText("Toggle  Switch ON");
    }
  };

  return (
    <div className={styles.Container}>
      <label className={styles.title}>Toggle</label>
      <div className={styles.toggle}>
        <Toggle checked={checked} clickToggle={clickToggle} id="ToggleLabel" />
      </div>
      <label className={styles.toggleText}>{text}</label>
    </div>
  );
};

export default ToggleDemo;
