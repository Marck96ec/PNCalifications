import {
  ELIMINAR_EDAD,
  MODIFICAR_EDAD,
  OBTENER_EDAD,
  OBTENER_EDADES,
  REGISTRAR_EDAD,
} from "../const/actionTypes";

export default (state, action) => {
  switch (action.type) {
    case OBTENER_EDADES:
      return {
        ...state,
        edadesList: action.payload,
      };
    case REGISTRAR_EDAD:
      return {
        ...state,
        edadesList: [action.payload, ...state.edadesList],
      };
    case OBTENER_EDAD:
      return {
        ...state,
        edadActual: action.payload,
      };
    case MODIFICAR_EDAD:
      return {
        ...state,
        edadesList: state.edadesList.map((edad) =>
          edad.TABLAID === action.payload.TABLAID ? action.payload : edad
        ),
      };
    case ELIMINAR_EDAD:
      return {
        ...state,
        edadesList: state.edadesList.filter(
          (edad) => edad.TABLAID !== action.payload
        ),
      };
    default:
      return state;
  }
};
