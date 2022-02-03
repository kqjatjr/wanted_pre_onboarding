import styles from "./Tab.module.scss";

type TTab = {
  title: string;
};

type TProps = {
  currTab: string;
  tabList: TTab;
  onSelectTab: (title: string) => void;
};

const Tab = ({ currTab, tabList, onSelectTab }: TProps) => {
  return (
    <div className={styles.TabContainer}>
      {tabList.map((tab) => {
        return (
          <button
            className={currTab === tab.title ? styles.CurrTab : styles.NomalTab}
            onClick={() => onSelectTab(tab.title)}
          >
            {tab.title}
          </button>
        );
      })}
    </div>
  );
};

export default Tab;
