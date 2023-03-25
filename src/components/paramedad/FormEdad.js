import React, { useContext, useEffect, useState } from "react";
import { EdadContext } from "../../contexts/edadContext";
import { ModalContext } from "../../contexts/modalContex";

const FormEdad = () => {
  const { setShowModal } = useContext(ModalContext);

  const { registrarEdad, actualizarEdad, edadActual, obtenerEdad } =
    useContext(EdadContext);

  const edadDefault = {
    edadMin: "",
    edadMax: "",
  };

  const [edad, setEdad] = useState(edadDefault);
  const [mensaje, setMensaje] = useState(null);

  useEffect(() => {
    if (edadActual !== null) {
      setEdad({
        ...edadActual,
        edadMin: edadActual.edadMin ? edadActual.edadMin : "",
        edadMax: edadActual.edadMax ? edadActual.edadMax : "",
      });
    } else {
      setEdad(edadDefault);
    }
    // eslint-disable-next-line
  }, [edadActual]);

  const handleChange = (e) => {
    setEdad({
      ...edad,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    //validar
    if (edad.edadMin.trim() === "" && edad.edadMax.trim() === "") {
      setMensaje("La edad minima y maxima son obligatorias.");
      return;
    }

    //obtener objeto a enviar
    if (edadActual !== null) {
      actualizarEdad(obtenerEdadAEnviar());
    } else {
      registrarEdad(obtenerEdadAEnviar());
    }

    //cerrar y limpiar el modal
    cerrarModal();
  };

  const limpiarForm = () => {
    setMensaje(null);
    setEdad(edadDefault);
  };

  const cerrarModal = () => {
    limpiarForm();
    setShowModal(false);
    obtenerEdad(null);
  };

  const obtenerEdadAEnviar = () => {
    let edadTemp = { ...edad };
    if (edadTemp.edadMin === "") delete edadTemp.edadMin;
    if (edadTemp.edadMax === "") delete edadTemp.edadMax;
    return edadTemp;
  };

  return (
    <form onSubmit={handleOnSubmit}>
      {mensaje ? <div className="notification is-danger">{mensaje}</div> : null}

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Edad Minima</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control is-expanded has-icons-left">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Edad Minima"
                name="edadMin"
                value={edad.edadMin}
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
        <div className="field-label is-normal">
          <label className="label">Edad Maxima</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control is-expanded has-icons-left">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Edad Maxima"
                name="edadMax"
                value={edad.edadMax}
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-phone"></i>
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

export default FormEdad;
