import ReactDom from "react-dom";
import Backdrop from "../Backdrop/Backdrop";
import { Content } from "./FilterModal.styles";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const FilterModal = ({ modalOpen, children, setModalOpen }) => {
  if (!modalOpen) return null;

  return ReactDom.createPortal(
    <Backdrop setModalOpen={setModalOpen}>
      <Content
        modalOpen={modalOpen}
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </Content>
    </Backdrop>,
    document.getElementById("portal")
  );
};

export default FilterModal;
