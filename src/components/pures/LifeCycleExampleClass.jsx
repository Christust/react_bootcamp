// Ejemplo de componente clase que dispone de metodos de ciclo de vida
import React, { Component } from "react";

export default class LifeCycleExampleClass extends Component {
  constructor(props) {
    super(props);
    console.log("Cuando se instancia el componente");
  }

  componentWillMount() {
    console.log("Antes del montaje del componente");
  }
  componentDidMount() {
    console.log("Justo al acabar el montaje del componente antes de pintarlo");
  }

  componentWillReceiveProps() {
    console.log("Si se reciben nuevas props");
  }

  shouldComponentUpdate() {
    console.log(
      "Debe hacer un retorno de true o false, sirve para controlar si el componente debe o no actualizarse"
    );
    // return true / false
  }

  componentWillUpdate() {
    console.log("Justo antes de actualizarse");
  }

  componentDidUpdate() {
    console.log("Justo despues de actualizarse");
  }

  componentWillUnmount() {
    console.log("Justo antes de desaparecer");
  }

  render() {
    return <div>LifeCycleExampleClass</div>;
  }
}
