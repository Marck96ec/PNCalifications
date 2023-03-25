import {
  ELIMINAR_DESTREZA,
  MODIFICAR_DESTREZA,
  OBTENER_DESTREZA,
  OBTENER_DESTREZAS,
  REGISTRAR_DESTREZA,
} from "../const/actionTypes";

export default (state, action) => {
  switch (action.type) {
    case OBTENER_DESTREZAS:
      return {
        ...state,
        destrezasList: action.payload,
      };
    case REGISTRAR_DESTREZA:
      return {
        ...state,
        destrezasList: [action.payload, ...state.destrezasList],
      };
    case OBTENER_DESTREZA:
      return {
        ...state,
        destrezaActual: action.payload,
      };
    case MODIFICAR_DESTREZA:
      return {
        ...state,
        destrezasList: state.destrezasList.map((destreza) =>
          destreza.idDestreza === action.payload.idDestreza
            ? action.payload
            : destreza
        ),
      };
    case ELIMINAR_DESTREZA:
      return {
        ...state,
        destrezasList: state.destrezasList.filter(
          (destreza) => destreza.idDestreza !== action.payload
        ),
      };
    default:
      return state;
  }
};
