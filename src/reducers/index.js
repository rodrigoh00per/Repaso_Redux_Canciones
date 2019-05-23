import { combineReducers } from "redux";

//estos son los 2 reducers basicos que usamos
const listaCancionesReducer = () => {
  return [
    { titulo: "Voices", duracion: "3:22" },
    { titulo: "The game", duracion: "2:33" },
    { titulo: "My time is now", duracion: "1:22" }
  ];
};

export const seleccionarCancionReducer = (
  cancionSeleccionada = null,
  action
) => {
  if (action.type === "CANCION_SELECCIONADA") {
    return action.payload;
  }
  return cancionSeleccionada;
};

export default combineReducers({
  canciones: listaCancionesReducer,
  cancionSeleccionada: seleccionarCancionReducer
});
