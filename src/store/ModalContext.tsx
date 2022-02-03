import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useState,
} from "react";
import Modal from "../components/Modal";

export type TModalContent = {
  content: ReactNode;
};

export type TModalContext = {
  modalState: boolean;
  closeModal: () => void;
  openModal: (option: TModalContent) => void;
};

const modalContext = createContext<TModalContext>({
  modalState: false,
  closeModal: () => null,
  openModal: () => null,
});

export const useModal = () => useContext(modalContext);

const ModalContext = (props: PropsWithChildren<{}>) => {
  const [modalState, setModalState] = useState(false);
  const [modalContent, setModatContent] = useState<ReactNode | undefined>(
    undefined,
  );

  const closeModal = () => {
    setModalState(false);
  };

  const openModal = ({ content }: TModalContent) => {
    setModalState(true);
    setModatContent(content);
  };

  return (
    <modalContext.Provider value={{ modalState, closeModal, openModal }}>
      {props.children}
      {modalState && <Modal closeModal={closeModal} content={modalContent} />}
    </modalContext.Provider>
  );
};

export default ModalContext;
