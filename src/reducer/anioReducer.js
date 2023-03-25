import {
  ELIMINAR_ANIO,
  MODIFICAR_ANIO,
  OBTENER_ANIO,
  OBTENER_ANIOS,
  REGISTRAR_ANIO,
} from "../const/actionTypes";

export default (state, action) => {
  switch (action.type) {
    case OBTENER_ANIOS:
      return {
        ...state,
        aniosList: action.payload,
      };
    case REGISTRAR_ANIO:
      return {
        ...state,
        aniosList: [action.payload, ...state.aniosList],
      };
    case OBTENER_ANIO:
      return {
        ...state,
        anioActual: action.payload,
      };
    case MODIFICAR_ANIO:
      return {
        ...state,
        aniosList: state.aniosList.map((anio) =>
          anio.idUser === action.payload.idanio ? action.payload : anio
        ),
      };
    case ELIMINAR_ANIO:
      return {
        ...state,
        aniosList: state.aniosList.filter(
          (anio) => anio.idanio !== action.payload
        ),
      };
    default:
      return state;
  }
};
