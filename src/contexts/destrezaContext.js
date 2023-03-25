import React, { createContext, useReducer } from "react";
import DestrezaRedurcer from "../reducer/destrezaReducer";

import Axios from "axios";
import Swal from "sweetalert2";

import {
  ELIMINAR_DESTREZA,
  MODIFICAR_DESTREZA,
  OBTENER_DESTREZA,
  OBTENER_DESTREZAS,
  REGISTRAR_DESTREZA,
} from "../const/actionTypes";

export const DestrezaContext = createContext();

export const DestrezaContextProvider = (props) => {
  const initialState = {
    destrezasList: [],
    destrezaActual: null,
  };

  const [state, dispatch] = useReducer(DestrezaRedurcer, initialState);

  const obtenerDestrezas = async () => {
    try {
      const resultado = await Axios.get("/destreza");
      dispatch({
        type: OBTENER_DESTREZA,
        payload: resultado.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo obtener las destrezas",
        toast: true,
      });
      console.log(error);
    }
  };

  const registrarDestreza = async (destreza) => {
    try {
      const resultado = await Axios.post("/destreza", destreza);
      dispatch({
        type: REGISTRAR_DESTREZA,
        payload: resultado.data,
      });
      Swal.fire({
        icon: "success",
        title: "Correcto",
        text: "Destreza registrada correctamente.",
        toast: true,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo registrar la destreza",
        toast: true,
      });
      console.log(error);
    }
  };

  const obtenerDestreza = async (destreza) => {
    try {
      let destrezaEncontrado = null;
      if (destreza !== null) {
        const resultado = await Axios.get(`/destreza/${destreza.idDestreza}`);
        destrezaEncontrado = resultado.data;
      } else {
        destrezaEncontrado = destreza;
      }

      dispatch({
        type: OBTENER_DESTREZA,
        payload: destrezaEncontrado,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo obtener la destreza",
        toast: true,
      });
      console.log(error);
    }
  };

  const actualizarDestreza = async (destreza) => {
    try {
      const resultado = await Axios.put(`/destreeza`, destreza);

      dispatch({
        type: MODIFICAR_DESTREZA,
        payload: resultado.data,
      });

      Swal.fire({
        icon: "success",
        title: "Correcto",
        text: "Destreza modificado correctamente.",
        toast: true,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo modificar el destreza",
        toast: true,
      });
      console.log(error);
    }
  };

  const eliminarDestreza = async (idDestreza) => {
    try {
      Swal.fire({
        title: "¿Desea continuar?",
        text: "Se eliminará el cliente seleccionado",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar",
      }).then(async (result) => {
        if (result.value) {
          await Axios.delete(`/destreza/${idDestreza}`);

          dispatch({
            type: ELIMINAR_DESTREZA,
            payload: idDestreza,
          });

          Swal.fire({
            icon: "success",
            title: "Correcto",
            text: "Destreza eliminada correctamente.",
            toast: true,
          });
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar la destreza",
        toast: true,
      });
      console.log(error);
    }
  };

  return (
    <DestrezaContext.Provider
      value={{
        destrezasList: state.destrezasList,
        destrezaActual: state.destrezaActual,

        obtenerDestrezas,
        registrarDestreza,
        obtenerDestreza,
        actualizarDestreza,
        eliminarDestreza,
      }}
    >
      {props.children}
    </DestrezaContext.Provider>
  );
};
