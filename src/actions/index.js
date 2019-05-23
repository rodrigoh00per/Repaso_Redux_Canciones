//aqui esta tanto el action creator
//como el action

export const seleccionarCancion = cancion => {
  return {
    type: "CANCION_SELECCIONADA",
    payload: cancion
  };
};
