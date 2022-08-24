import { Mask } from "./Backdrop.styles";

const Backdrop = ({ children, setModalOpen }) => {
  return (
    <Mask
      onClick={() => setModalOpen(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </Mask>
  );
};

export default Backdrop;
