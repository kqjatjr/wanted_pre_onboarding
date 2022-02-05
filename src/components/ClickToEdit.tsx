import React, { useEffect, useState } from "react";
import styles from "./ClickToEdit.module.scss";

type TProps = {
  labelName: string;
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

const ClickToEdit = ({ labelName, inputValue, onChange, disabled }: TProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(inputValue);

  useEffect(() => {
    setValue(inputValue);
  }, [inputValue]);

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
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
      <label>{labelName}</label>
      {isEdit ? (
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          disabled={disabled}
        />
      ) : (
        <div className={styles.ChangeDiv} onDoubleClick={doubleClick}>
          {inputValue}
        </div>
      )}
    </div>
  );
};

export default ClickToEdit;
