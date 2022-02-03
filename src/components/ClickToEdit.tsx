import React, { useEffect, useState } from "react";
import styles from "./ClickToEdit.module.scss";

type TProps = {
  labelName: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ClickToEdit = (props: TProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e);
    setIsEdit(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const doubleClick = () => {
    setIsEdit(true);
  };

  return (
    <div className={styles.container}>
      <label>{props.labelName}</label>
      {isEdit ? (
        <input onChange={handleChange} onBlur={handleBlur} value={value} />
      ) : (
        <div className={styles.ChangeDiv} onDoubleClick={doubleClick}>
          {props.value}
        </div>
      )}
    </div>
  );
};

export default ClickToEdit;
