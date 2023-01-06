/**
 * Ejemplo para entender props.children
 */
import React from "react";

const Ejemplo4 = (props) => {
  return (
    <div>
      <h1>Ejemplo de ChildrenProps</h1>
      <h2>Nombre: {props.nombre}</h2>
      {/* props.children pintara aquello entre las etiqutas */}
      {/* de apertura y cierre de este componente desde el padre */}
      {props.children}
    </div>
  );
};

export default Ejemplo4;
