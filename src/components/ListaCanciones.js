import React, { Component } from "react";
import { connect } from "react-redux";
import { seleccionarCancion } from "../actions";

class ListaCanciones extends Component {
  listaparaMostrar = () => {
    return this.props.canciones.map(cancion => {
      return (
        <div className="item" key={cancion.titulo}>
          <div className="content">{cancion.titulo}</div>
          <div className="right floated content">
            <button
              onClick={() => this.props.seleccionarCancion(cancion)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
        </div>
      );
    });
  };
  render() {
    return <div className="ui divided list">{this.listaparaMostrar()}</div>;
  }
}
const mapStateToProps = state => {
  return { canciones: state.canciones };
};

export default connect(
  mapStateToProps,
  { seleccionarCancion }
)(ListaCanciones);
