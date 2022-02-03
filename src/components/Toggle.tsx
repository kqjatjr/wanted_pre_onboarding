import styles from "./Toggle.module.scss";

type TData = {
  checked: boolean;
  id: string;
  clickToggle: () => void;
};

const Toggle = (data: TData) => {
  return (
    <div className={styles.Container}>
      <input
        className={styles.CheckBoxMain}
        type="checkbox"
        id={data.id}
        checked={data.checked}
        onChange={data.clickToggle}
      />
      <label className={styles.ToggleBox} htmlFor={data.id}>
        <div className={styles.Circle} />
      </label>
    </div>
  );
};

export default Toggle;
