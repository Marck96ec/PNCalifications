import React, { useContext } from "react";
import { DestrezaContext } from "../../contexts//destrezaContext";
import { ModalContext } from "../../contexts/modalContex";

const ToolbarDestreza = () => {
  const { setModalTitle, setShowModal } = useContext(ModalContext);

  const { obtenerDestreza } = useContext(DestrezaContext);

  const abrirModalCrear = () => {
    setModalTitle("Registrar una nueva  destreza");
    setShowModal(true);
    obtenerDestreza(null);
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

export default ToolbarDestreza;
