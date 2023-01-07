/**
 * Ejemplo del uso del metodo de DidMount del componente de clase
 * y el hook equivalente para componentes de tipo funcion
 */

import React, { Component, useEffect } from "react";

export class DidMount extends Component {
  componentDidMount() {
    console.log(
      "Comportamiento antes de que el componente sea añadido al DOM (renderice)"
    );
  }
  render() {
    return <div>DidMountClass</div>;
  }
}

export const DidMountHook = () => {
  useEffect(() => {
    console.log(
      "Comportamiento antes de que el componente sea añadido al DOM (renderice)"
    );
  }, []);
  return <div>DidMountFunctional</div>;
};
