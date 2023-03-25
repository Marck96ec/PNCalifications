import React, { useContext } from "react";
import { DestrezaContext } from "../../contexts/destrezaContext";
import { ModalContext } from "../../contexts/modalContex";

const RowDestreza = ({ destreza }) => {
  const { setModalTitle, setShowModal } = useContext(ModalContext);
  const { obtenerDestreza, eliminarDestreza } = useContext(DestrezaContext);

  const abrirModalModificarDestreza = () => {
    obtenerDestreza(destreza);
    setModalTitle("Modificar destreza");
    setShowModal(true);
  };

  return (
    <tr>
      <td>
        <button
          className="button is-small is-info mr-1"
          title="Modificar"
          onClick={() => abrirModalModificarDestreza()}
        >
          <span className="icon is-small">
            <i className="fas fa-edit"></i>
          </span>
        </button>
        <button
          className="button is-small is-danger"
          title="Eliminar"
          onClick={() => eliminarDestreza(destreza.idDestreza)}
        >
          <span className="icon is-small">
            <i className="fas fa-trash-alt"></i>
          </span>
        </button>
      </td>
      <td>{destreza.descDestreza}</td>
    </tr>
  );
};

export default RowDestreza;
