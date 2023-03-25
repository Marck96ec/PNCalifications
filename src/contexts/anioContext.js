import React, { createContext, useReducer } from "react";
import AnioRedurcer from "../reducer/anioReducer";

import Axios from "axios";
import Swal from "sweetalert2";

import {
  ELIMINAR_ANIO,
  MODIFICAR_ANIO,
  OBTENER_ANIO,
  OBTENER_ANIOS,
  REGISTRAR_ANIO,
} from "../const/actionTypes";

export const AnioContext = createContext();

export const AnioContextProvider = (props) => {
  const initialState = {
    aniosList: [],
    anioActual: null,
  };

  const [state, dispatch] = useReducer(AnioRedurcer, initialState);

  const obtenerAnios = async () => {
    try {
      const resultado = await Axios.get("/anios");
      dispatch({
        type: OBTENER_ANIOS,
        payload: resultado.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo obtener los años",
        toast: true,
      });
      console.log(error);
    }
  };

  const registrarAnio = async (anio) => {
    try {
      const resultado = await Axios.post("/anios", anio);
      dispatch({
        type: REGISTRAR_ANIO,
        payload: resultado.data,
      });
      Swal.fire({
        icon: "success",
        title: "Correcto",
        text: "Año registrado correctamente.",
        toast: true,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo registrar el año",
        toast: true,
      });
      console.log(error);
    }
  };

  const obtenerAnio = async (anio) => {
    try {
      let anioEncontrado = null;
      if (anio !== null) {
        const resultado = await Axios.get(`/anios/${anio.idanio}`);
        anioEncontrado = resultado.data;
      } else {
        anioEncontrado = anio;
      }

      dispatch({
        type: OBTENER_ANIO,
        payload: anioEncontrado,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo obtener el año",
        toast: true,
      });
      console.log(error);
    }
  };

  const actualizarAnio = async (anio) => {
    try {
      const resultado = await Axios.put(`/anios`, anio);

      dispatch({
        type: MODIFICAR_ANIO,
        payload: resultado.data,
      });

      Swal.fire({
        icon: "success",
        title: "Correcto",
        text: "Año modificado correctamente.",
        toast: true,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo modificar el año",
        toast: true,
      });
      console.log(error);
    }
  };

  const eliminarAnio = async (idanio) => {
    try {
      Swal.fire({
        title: "¿Desea continuar?",
        text: "Se eliminará el año seleccionado",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar",
      }).then(async (result) => {
        if (result.value) {
          await Axios.delete(`/anios/${idanio}`);

          dispatch({
            type: ELIMINAR_ANIO,
            payload: idanio,
          });

          Swal.fire({
            icon: "success",
            title: "Correcto",
            text: "Año eliminado correctamente.",
            toast: true,
          });
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar el año",
        toast: true,
      });
      console.log(error);
    }
  };

  return (
    <AnioContext.Provider
      value={{
        aniosList: state.aniosList,
        anioActual: state.anioActual,

        obtenerAnios,
        registrarAnio,
        obtenerAnio,
        actualizarAnio,
        eliminarAnio,
      }}
    >
      {props.children}
    </AnioContext.Provider>
  );
};
