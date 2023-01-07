/**
 * Ejemplo del uso del metodo de WillUnmount del componente de clase
 * y el hook equivalente para componentes de tipo funcion
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from "react";

export class WillUnmount extends Component {
  componentWillUnmount() {
    console.log("Comportamiento cuando el componente va a desaparecer");
  }
  render() {
    return <div>WillUnmountClass</div>;
  }
}

export const WillUnmountHook = () => {
  useEffect(() => {
    return () => {
      console.log("Comportamiento cuando el componente va a desaparecer");
    };
  }, []);
  return <div>WillUnmountFunctional</div>;
};
