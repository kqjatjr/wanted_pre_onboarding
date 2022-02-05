import React, { useState } from "react";
import styles from "./ClickToEditDemo.module.scss";
import ClickToEdit from "../components/ClickToEdit";

const ClickToEditDemo = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const changeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  return (
    <div className={styles.container}>
      <label className={styles.title}>ClickToEdit</label>
      <div className={styles.inputContainer}>
        <div className={styles.nameContainer}>
          <ClickToEdit
            labelName="이름"
            inputValue={name}
            onChange={changeName}
          />
        </div>
        <div>
          <ClickToEdit labelName="나이" inputValue={age} onChange={changeAge} />
        </div>
        <label>
          이름 {name} 나이 {age}
        </label>
      </div>
    </div>
  );
};

export default ClickToEditDemo;
