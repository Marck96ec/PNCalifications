import React, { useContext, useEffect, useState } from "react";
import { AnioContext } from "../../contexts/anioContext";
import { ModalContext } from "../../contexts/modalContex";

const FormAnio = () => {
  const { setShowModal } = useContext(ModalContext);

  const { registrarAnio, actualizarAnio, anioActual, obtenerAnio } =
    useContext(AnioContext);

  const anioDefault = {
    descripcion: "",
    notaMinima: "",
  };

  const [anio, setAnio] = useState(anioDefault);
  const [mensaje, setMensaje] = useState(null);

  useEffect(() => {
    if (anioActual !== null) {
      setAnio({
        ...anioActual,
        descripcion: anioActual.descripcion ? anioActual.descripcion : "",
        notaMinima: anioActual.notaMinima ? anioActual.notaMinima : "",
      });
    } else {
      setAnio(anioDefault);
    }
    // eslint-disable-next-line
  }, [anioActual]);

  const handleChange = (e) => {
    setAnio({
      ...anio,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    //validar
    if (anio.descripcion.trim() === "" && anio.notaMinima.trim() === "") {
      setMensaje("La descripcion y nota minima son obligatorios.");
      return;
    }

    //obtener objeto a enviar
    if (anioActual !== null) {
      actualizarAnio(obtenerAnioAEnviar());
    } else {
      registrarAnio(obtenerAnioAEnviar());
    }

    //cerrar y limpiar el modal
    cerrarModal();
  };

  const limpiarForm = () => {
    setMensaje(null);
    setAnio(anioDefault);
  };

  const cerrarModal = () => {
    limpiarForm();
    setShowModal(false);
    obtenerAnio(null);
  };

  const obtenerAnioAEnviar = () => {
    let anioTemp = { ...anio };
    if (anioTemp.descripcion === "") delete anioTemp.descripcion;
    if (anioTemp.notaMinima === "") delete anioTemp.notaMinima;
    return anioTemp;
  };

  return (
    <form onSubmit={handleOnSubmit}>
      {mensaje ? <div className="notification is-danger">{mensaje}</div> : null}

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Año</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control is-expanded has-icons-left">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Descripcion"
                name="descripcion"
                value={anio.descripcion}
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
          <label className="label">Nota Minima</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control is-expanded has-icons-left">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Nota Minima"
                name="notaMinima"
                value={anio.notaMinima}
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

export default FormAnio;
