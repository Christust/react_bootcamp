/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect(f)
 */

import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
  // Vamos a crear dos contadores diferentes
  // Cada uno en un estado diferente
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // Vamos a crear una refencia con useRef() para asociar una variable
  // con un elemnto del DOM del componente (HTML)
  const miRef = useRef();

  function incrementar1() {
    setContador1(contador1 + 1);
  }

  function incrementar2() {
    setContador2(contador2 + 1);
  }

  /**
   * Trabajando con useEffect
   * ? Caso 1: Ejecutar siempre un snippet de codigo
   * Cada que haya un cambio en el estado del componente se ejecuta
   * aquello que este dentro del useEffect()
   */

  // useEffect(() => {
  //   console.log("Cambio en el estado del componente");
  //   console.log("Mostrando referencia del DOM:");
  //   console.log(miRef);
  // });

  /**
   * ? Caso 2: Ejecutar Solo cuando cambie el contador 1
   * Cada vez que haya un cambio en el contador1 se ejecuta el useEffect
   * En caso de que cambie el contador2 no pasara la ejecución
   */

  // useEffect(() => {
  //   console.log("Cambio el estado del contador1");
  //   console.log(miRef);
  // }, [contador1]);

  /**
   * ? Caso 3: Ejecutar solo cuando haya cambios en contador1 y 2
   */

  useEffect(() => {
    console.log("Cambio el estado del contador1 o contador2");
    console.log(miRef);
  }, [contador1, contador2]);

  return (
    <div>
      <h1>Ejemplo de useState, useRef y useEffect</h1>
      <h2>Contador 1: {contador1}</h2>
      <h2>Contador 2: {contador2}</h2>
      {/* Elemento referenciado: */}
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
      <div>
        <button onClick={incrementar1}>Contador 1</button>
        <button onClick={incrementar2}>Contador 2</button>
      </div>
    </div>
  );
};

export default Ejemplo2;
