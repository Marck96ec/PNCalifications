import React, { useContext, useEffect, useState } from "react";
import { DestrezaContext } from "../../contexts/destrezaContext";
import { ModalContext } from "../../contexts/modalContex";

const FormDestreza = () => {
  const { setShowModal } = useContext(ModalContext);

  const {
    registrarDestreza,
    actualizarDestreza,
    destrezaActual,
    obtenerDestreza,
  } = useContext(DestrezaContext);

  const destrezaDefault = {
    descDestreza: "",
  };

  const [destreza, setDestreza] = useState(destrezaDefault);
  const [mensaje, setMensaje] = useState(null);

  useEffect(() => {
    if (destrezaActual !== null) {
      setDestreza({
        ...destrezaActual,
        descDestreza: destrezaActual.descDestreza
          ? destrezaActual.descDestreza
          : "",
      });
    } else {
      setDestreza(destrezaDefault);
    }
    // eslint-disable-next-line
  }, [destrezaActual]);

  const handleChange = (e) => {
    setDestreza({
      ...destreza,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    //validar
    if (destreza.descDestreza.trim() === "") {
      setMensaje("La descricion es obligatoria.");
      return;
    }

    //obtener objeto a enviar
    if (destrezaActual !== null) {
      actualizarDestreza(obtenerDestrezaAEnviar());
    } else {
      registrarDestreza(obtenerDestrezaAEnviar());
    }

    //cerrar y limpiar el modal
    cerrarModal();
  };

  const limpiarForm = () => {
    setMensaje(null);
    setDestreza(destrezaDefault);
  };

  const cerrarModal = () => {
    limpiarForm();
    setShowModal(false);
    obtenerDestreza(null);
  };

  const obtenerDestrezaAEnviar = () => {
    let destrezaTemp = { ...destreza };
    if (destrezaTemp.descDestreza === "") delete destrezaTemp.descDestreza;
    return destrezaTemp;
  };

  return (
    <form onSubmit={handleOnSubmit}>
      {mensaje ? <div className="notification is-danger">{mensaje}</div> : null}

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Destreza</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control is-expanded has-icons-left">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Ingrese su destreza"
                name="descDestreza"
                value={destreza.descDestreza}
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-map-marked-alt"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label"></div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-primary mr-1">
                Guardar
              </button>
              <button
                type="button"
                className="button"
                onClick={() => cerrarModal()}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormDestreza;
