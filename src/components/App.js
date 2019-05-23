import React from "react";
import ListaCanciones from "./ListaCanciones";
import DetalleCancion from "./DetalleCancion";

const App = () => {
  return (
    <div className="ui container grid ">
      <div className="ui row">
        <div className="column eight wide">
          <ListaCanciones />
        </div>
        <div className="column eight wide">
          <DetalleCancion />
        </div>
      </div>
    </div>
  );
};

export default App;
