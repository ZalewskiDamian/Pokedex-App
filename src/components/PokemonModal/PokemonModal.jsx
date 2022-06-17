import { useState } from "react";
import ReactDom from "react-dom";
import { Modal, Overlay } from "./PokemonModal.styles";

const PokemonModal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;
  return ReactDom.createPortal(
    <>
      <Overlay />
      <Modal>
        <button type="button" onClick={() => setIsOpen(false)}>
          Close Modal
        </button>
        {children}
      </Modal>
    </>,
    document.getElementById("portal")
  );
};

export default PokemonModal;
