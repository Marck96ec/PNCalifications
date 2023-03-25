import React, { useContext } from "react";
import { AnioContext } from "../../contexts/anioContext";
import { ModalContext } from "../../contexts/modalContex";

const RowAnio = ({ anio }) => {
  const { setModalTitle, setShowModal } = useContext(ModalContext);
  const { obtenerAnio, eliminarAnio } = useContext(AnioContext);

  const abrirModalModificarAnio = () => {
    obtenerAnio(anio);
    setModalTitle("Modificar año");
    setShowModal(true);
  };

  return (
    <tr>
      <td>
        <button
          className="button is-small is-info mr-1"
          title="Modificar"
          onClick={() => abrirModalModificarAnio()}
        >
          <span className="icon is-small">
            <i className="fas fa-edit"></i>
          </span>
        </button>
        <button
          className="button is-small is-danger"
          title="Eliminar"
          onClick={() => eliminarAnio(anio.idanio)}
        >
          <span className="icon is-small">
            <i className="fas fa-trash-alt"></i>
          </span>
        </button>
      </td>
      <td>{anio.descripcion}</td>
      <td>{anio.notaMinima}</td>
    </tr>
  );
};

export default RowAnio;
