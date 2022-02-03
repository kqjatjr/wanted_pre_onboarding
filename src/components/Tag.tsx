import React, { useState } from "react";
import classnames from "classnames";
import styles from "./Tag.module.scss";

export type TTag = {
  id: string | number;
  name: string;
};

type TProps = {
  tagArray: TTag[];
  delimiters?: string[];
  placeholder?: string;
  onRemoveTag: (tag: TTag) => void;
  onAddTag: (tag: TTag) => void;
  idGenerator?: (name: string) => string | Promise<string>;
  disabled?: boolean;
};

const Tag = ({
  tagArray,
  delimiters = ["Enter"],
  placeholder = "Press enter to add tag",
  onRemoveTag,
  idGenerator = (name: string) => name,
  disabled,
  onAddTag,
}: TProps) => {
  const [inputValue, setInputValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setInputValue(target.value);
  };

  const handleInput = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (delimiters.includes(e.key) && inputValue !== "") {
      const tag = {
        id: await idGenerator(inputValue),
        name: inputValue,
      };
      onAddTag(tag);
      setInputValue("");
    }
  };

  return (
    <div
      className={classnames(styles.inputContainer, isEdit && styles.editing)}
    >
      {tagArray.map((tag) => {
        return (
          <div key={tag.id} className={styles.tagBox}>
            <label>{tag.name}</label>
            <button onClick={() => onRemoveTag(tag)}>x</button>
          </div>
        );
      })}
      <input
        onClick={() => setIsEdit(true)}
        onBlur={() => setIsEdit(false)}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyPress={handleInput}
        value={inputValue}
        disabled={disabled}
      />
    </div>
  );
};

export default Tag;
