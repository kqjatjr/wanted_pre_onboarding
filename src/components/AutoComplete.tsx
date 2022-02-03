import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import styles from "./AutoComplete.module.scss";
import classnames from "classnames";

export type TWord = {
  id: string;
  name: string;
};

type TProps = {
  value: string;
  onChange: (value: string) => void;
  suggestions: TWord[];
  onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
  onFilter?: (value: string, list: TWord[]) => TWord[];
  onRemoveWord: () => void;
};

const AutoComplete = ({
  value,
  suggestions,
  onKeyPress,
  onChange,
  onFilter = (value: string, list: TWord[]) =>
    list.filter((filter) => value.length !== 0 && filter.name.includes(value)),
  onRemoveWord,
}: TProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isFind, setIsFind] = useState(false);

  const filtered = onFilter(value, suggestions);

  useEffect(() => {
    if (filtered.length !== 0) {
      setIsFind(true);
    } else {
      setIsFind(false);
    }
  }, [filtered]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClickWord = (value: string) => () => {
    onChange(value);
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div
          className={classnames(
            styles.inputContainer,
            isEdit && styles.editing,
            isFind && styles.Find,
          )}
        >
          <input
            value={value}
            onChange={handleChange}
            onFocus={() => setIsEdit(true)}
            onKeyPress={onKeyPress}
            onBlur={() => setIsEdit(false)}
          />
          <button onClick={onRemoveWord}>X</button>
        </div>
        <div className={styles.filterContainer}>
          {filtered.map((word) => {
            return (
              <div
                className={styles.content}
                key={word.id}
                onClick={handleClickWord(word.name)}
              >
                {word.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AutoComplete;
