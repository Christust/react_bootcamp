/**
 * Ejemplo del uso del metodo de DidUpdate del componente de clase
 * y el hook equivalente para componentes de tipo funcion
 */

import React, { Component, useEffect } from "react";

export class DidUpdate extends Component {
  componentDidUpdate() {
    console.log(
      "Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado"
    );
  }
  render() {
    return <div>DidUpdateClass</div>;
  }
}

export const DidUpdateHook = () => {
  useEffect(() => {
    console.log(
      "Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado"
    );
  });
  return <div>DidUpdateFunctional</div>;
};
