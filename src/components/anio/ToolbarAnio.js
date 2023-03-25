import React, { useContext } from "react";
import { AnioContext } from "../../contexts/anioContext";
import { ModalContext } from "../../contexts/modalContex";

const ToolbarAnio = () => {
  const { setModalTitle, setShowModal } = useContext(ModalContext);

  const { obtenerAnio } = useContext(AnioContext);

  const abrirModalCrear = () => {
    setModalTitle("Registrar nuevo año");
    setShowModal(true);
    obtenerAnio(null);
  };

  return (
    <div className="container">
      <button
        className="button is-small is-primary"
        onClick={() => abrirModalCrear()}
      >
        <span className="icon is-small">
          <i className="fas fa-plus"></i>
        </span>
        <span>Registrar nuevo</span>
      </button>
    </div>
  );
};

export default ToolbarAnio;
