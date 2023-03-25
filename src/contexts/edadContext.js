import React, { createContext, useReducer } from "react";
import EdadRedurcer from "../reducer/edadReducer";

import Axios from "axios";
import Swal from "sweetalert2";

import {
  ELIMINAR_EDAD,
  MODIFICAR_EDAD,
  OBTENER_EDAD,
  OBTENER_EDADES,
  REGISTRAR_EDAD,
} from "../const/actionTypes";

export const EdadContext = createContext();

export const EdadContextProvider = (props) => {
  const initialState = {
    edadesList: [],
    edadActual: null,
  };

  const [state, dispatch] = useReducer(EdadRedurcer, initialState);

  const obtenerEdades = async () => {
    try {
      const resultado = await Axios.get("/paramedad");
      dispatch({
        type: OBTENER_EDADES,
        payload: resultado.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo obtener las edades",
        toast: true,
      });
      console.log(error);
    }
  };

  const registrarEdad = async (edad) => {
    try {
      const resultado = await Axios.post("/paramedad", edad);
      dispatch({
        type: REGISTRAR_EDAD,
        payload: resultado.data,
      });
      Swal.fire({
        icon: "success",
        title: "Correcto",
        text: "Edad registrada correctamente.",
        toast: true,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo registrar la edad",
        toast: true,
      });
      console.log(error);
    }
  };

  const obtenerEdad = async (edad) => {
    try {
      let edadEncontrado = null;
      if (edad !== null) {
        const resultado = await Axios.get(`/paramedad/${edad.TABLAID}`);
        edadEncontrado = resultado.data;
      } else {
        edadEncontrado = edad;
      }

      dispatch({
        type: OBTENER_EDAD,
        payload: edadEncontrado,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo obtener la edad",
        toast: true,
      });
      console.log(error);
    }
  };

  const actualizarEdad = async (edad) => {
    try {
      const resultado = await Axios.put(`/paramedad`, edad);

      dispatch({
        type: MODIFICAR_EDAD,
        payload: resultado.data,
      });

      Swal.fire({
        icon: "success",
        title: "Correcto",
        text: "Edad modificada correctamente.",
        toast: true,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo modificar la edad",
        toast: true,
      });
      console.log(error);
    }
  };

  const eliminarEdad = async (TABLAID) => {
    try {
      Swal.fire({
        title: "¿Desea continuar?",
        text: "Se eliminará la edad seleccionada",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar",
      }).then(async (result) => {
        if (result.value) {
          await Axios.delete(`/paramedad/${TABLAID}`);

          dispatch({
            type: ELIMINAR_EDAD,
            payload: TABLAID,
          });

          Swal.fire({
            icon: "success",
            title: "Correcto",
            text: "Edad eliminado correctamente.",
            toast: true,
          });
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar la edad",
        toast: true,
      });
      console.log(error);
    }
  };

  return (
    <EdadContext.Provider
      value={{
        edadesList: state.edadesList,
        edadActual: state.edadActual,

        obtenerEdades,
        registrarEdad,
        obtenerEdad,
        actualizarEdad,
        eliminarEdad,
      }}
    >
      {props.children}
    </EdadContext.Provider>
  );
};
