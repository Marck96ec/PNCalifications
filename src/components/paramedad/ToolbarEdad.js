import React, { useContext } from "react";
import { EdadContext } from "../../contexts/edadContext";
import { ModalContext } from "../../contexts/modalContex";

const ToolbarEdad = () => {
  const { setModalTitle, setShowModal } = useContext(ModalContext);

  const { obtenerEdad } = useContext(EdadContext);

  const abrirModalCrear = () => {
    setModalTitle("Registrar edades");
    setShowModal(true);
    obtenerEdad(null);
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

export default ToolbarEdad;
