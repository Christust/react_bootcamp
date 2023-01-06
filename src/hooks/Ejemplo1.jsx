/**
 * Ejemplo de uso de useState
 * Crear un componente funcional y acceder a su estado privado
 * a travez de un hook ademas de poder modificarlo
 */
import React, { useState } from "react";

const Ejemplo1 = () => {
  // Valor inicial para un contador:
  const valorInicial = 0;

  // Valor inicial para un objeto de tipo persona
  const personaInicial = {
    nombre: "Martin",
    email: "c@c.com",
  };

  /**
   * Queremos que el valorInicial y personaInicial sean parte del estado
   * del componente y asi gestionar su cambio y que este se vea
   * reflejado en la vista del componente.
   *
   * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
   */
  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /**
   * Funcion para actualizar el estado privado que contiene el contador
   */
  function incrementarContador() {
    setContador(contador + 1);
  }

  /**
   *
   */
  function actualizarPersona() {
    setPersona({
      nombre: "Christos",
      email: "christos.marroquin@hotmail.com",
    });
  }

  return (
    <div>
      <h1>Ejemplo useState:</h1>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementarContador}>Aumentar en 1</button>
      <hr />
      <h2>Objeto persona:</h2>
      <h3>{persona.nombre}</h3>
      <h3>{persona.email}</h3>
      <button onClick={actualizarPersona}>Actualizar persona</button>
    </div>
  );
};

export default Ejemplo1;
