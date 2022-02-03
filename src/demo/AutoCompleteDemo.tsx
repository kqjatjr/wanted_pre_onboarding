import { KeyboardEvent, useState } from "react";
import AutoComplete, { TWord } from "../components/AutoComplete";
import styles from "./AutoCompleteDemo.module.scss";

const AutoCompleteDemo = () => {
  const [suggestions, setSuggetions] = useState<TWord[]>([]);
  const [keyword, setKeyword] = useState("");

  const handleChange = (value: string) => {
    setKeyword(value);
  };

  const handleSearch = () => {
    setSuggetions((prev) => {
      const filtered = prev.filter((prev) => prev.name !== keyword);

      if (filtered.length !== prev.length) {
        return [{ id: keyword, name: keyword }, ...filtered];
      }
      return [...prev, { id: keyword, name: keyword }];
    });
    setKeyword("");
  };

  const handlePressEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleRemoveWord = () => {
    setKeyword("");
  };

  return (
    <div className={styles.container}>
      <label className={styles.title}>AutoComplete</label>
      <label>
        검색 히스토리라고 생각하고 구현했습니다. 엔터를 누르면 검색기록이
        저장됩니다.
      </label>
      <AutoComplete
        value={keyword}
        suggestions={suggestions}
        onChange={handleChange}
        onKeyPress={handlePressEnter}
        onRemoveWord={handleRemoveWord}
      />
    </div>
  );
};

export default AutoCompleteDemo;
