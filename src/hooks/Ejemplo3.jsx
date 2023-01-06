/**
 * Ejemplo hooks:
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from "react";

/**
 *
 * @returns Componente!
 * Dispone de un contexto que va a tener un valor
 * el cual recibe desde el padre
 */

// Iniciamos el estado vacio el cual se rellena con los datos
// del padre
const miContexto = React.createContext(null);

const Componente1 = () => {
  const state = useContext(miContexto);
  return (
    <div>
      <h1>El token es: {state.token}</h1>
      {/* Pintamos el componente 2 */}
      <Componente2></Componente2>
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);
  return (
    <div>
      <h2>La session es: {state.sesion}</h2>
    </div>
  );
};

const Ejemplo3 = () => {
  const estadoInicial = {
    token: "123",
    sesion: 1,
  };

  // Creamos el estado de este componente
  const [sesionData, setSesionData] = useState(estadoInicial);
  function actualizarSesion() {
    setSesionData({
      token: "123412341234",
      sesion: sesionData.sesion + 1,
    });
  }
  return (
    <miContexto.Provider value={sesionData}>
      {/* Todo lo que este aqui dentro puede leer sesionData ademas de actualizarse */}
      {/* Ademas si se actualiza, los componentes de aqui tambien se actualizan */}
      <Componente1></Componente1>
      <button onClick={actualizarSesion}>Actualizar sessiona</button>
    </miContexto.Provider>
  );
};

export default Ejemplo3;
