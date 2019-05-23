import React from "react";
import { connect } from "react-redux";
const DetalleCancion = ({ cancion }) => {
  if (cancion === null) {
    return <div>No haz seleccionado alguna cancion aun</div>;
  } else {
    return (
      <div>
        <h3>Detalle de la Canción</h3>
        <p>Titulo:{cancion.titulo}</p>
        <p>Duración:{cancion.duracion}</p>
      </div>
    );
  }
};

const mapStateToProps = state => {
  console.log(state);
  return { cancion: state.cancionSeleccionada };
};
export default connect(mapStateToProps)(DetalleCancion);
