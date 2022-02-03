import { useState } from "react";
import Tab from "../components/Tab";
import styles from "./TabDemo.module.scss";

const TabDemo = () => {
  const [selectTab, setSelectTab] = useState("Tab1");

  const tabContent = {
    Tab1: "Tab menu ONE",
    Tab2: "Tab menu TWO",
    Tab3: "Tab menu THREE",
  };

  const tabList = [
    {
      title: "Tab1",
    },
    {
      title: "Tab2",
    },
    {
      title: "Tab3",
    },
  ];

  const handleSelectTab = (title: string) => {
    setSelectTab(title);
  };

  return (
    <div className={styles.container}>
      <label className={styles.title}>Tab</label>
      <Tab
        currTab={selectTab}
        tabList={tabList}
        onSelectTab={handleSelectTab}
      />
      <label className={styles.content}>
        {tabContent[selectTab as keyof typeof tabContent]}
      </label>
    </div>
  );
};

export default TabDemo;
