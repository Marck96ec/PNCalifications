import React, { useContext } from "react";
import { EdadContext } from "../../contexts/edadContext";
import { ModalContext } from "../../contexts/modalContex";

const RowEdad = ({ edad }) => {
  const { setModalTitle, setShowModal } = useContext(ModalContext);
  const { obtenerEdad, eliminarEdad } = useContext(EdadContext);

  const abrirModalModificarEdad = () => {
    obtenerEdad(edad);
    setModalTitle("Modificar edad");
    setShowModal(true);
  };

  return (
    <tr>
      <td>
        <button
          className="button is-small is-info mr-1"
          title="Modificar"
          onClick={() => abrirModalModificarEdad()}
        >
          <span className="icon is-small">
            <i className="fas fa-edit"></i>
          </span>
        </button>
        <button
          className="button is-small is-danger"
          title="Eliminar"
          onClick={() => eliminarEdad(edad.TABLAID)}
        >
          <span className="icon is-small">
            <i className="fas fa-trash-alt"></i>
          </span>
        </button>
      </td>
      <td>{edad.edadMin}</td>
      <td>{edad.edadMax}</td>
    </tr>
  );
};

export default RowEdad;
