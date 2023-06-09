import {
  ELIMINAR_CLIENTE,
  MODIFICAR_CLIENTE,
  OBTENER_CLIENTE,
  OBTENER_CLIENTES,
  REGISTRAR_CLIENTE,
} from "../const/actionTypes";

export default (state, action) => {
  switch (action.type) {
    case OBTENER_CLIENTES:
      return {
        ...state,
        clientesList: action.payload,
      };
    case REGISTRAR_CLIENTE:
      return {
        ...state,
        clientesList: [action.payload, ...state.clientesList],
      };
    case OBTENER_CLIENTE:
      return {
        ...state,
        clienteActual: action.payload,
      };
    case MODIFICAR_CLIENTE:
      return {
        ...state,
        clientesList: state.clientesList.map((cliente) =>
          cliente.idUser === action.payload.idUser ? action.payload : cliente
        ),
      };
    case ELIMINAR_CLIENTE:
      return {
        ...state,
        clientesList: state.clientesList.filter(
          (cliente) => cliente.idUser !== action.payload
        ),
      };
    default:
      return state;
  }
};
