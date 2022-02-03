import { useModal } from "../store/ModalContext";

import styles from "./ModalDemo.module.scss";

const ModalDemo = () => {
  const { openModal } = useModal();

  return (
    <div className={styles.container}>
      <label className={styles.title}>Modal</label>
      <button
        className={styles.modalBtn}
        onClick={() => openModal({ content: "HELLO CODESTATES!!" })}
      >
        Open Modal
      </button>
    </div>
  );
};

export default ModalDemo;
