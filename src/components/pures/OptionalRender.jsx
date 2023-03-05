import React, { useState } from "react";

// Login / Logout buttons

const LoginButton = ({ loginAction }) => {
  return <button onClick={loginAction}>Login</button>;
};

const LogoutButton = ({ logoutAction }) => {
  return <button onClick={logoutAction}>Logout</button>;
};

const OptionalRender = () => {
  const [access, setAccess] = useState(false);
  const [message, setMessage] = useState(0);

  function loginAction() {
    setAccess(true);
  }

  function logoutAction() {
    setAccess(false);
  }

  let optionalButton;

  if (!access) {
    optionalButton = <LoginButton loginAction={loginAction}></LoginButton>;
  } else {
    optionalButton = <LogoutButton logoutAction={logoutAction}></LogoutButton>;
  }

  //   Unread messages

  function unreadMessages() {
    setMessage(message + 1);
  }

  return (
    <div>
      {optionalButton}
      <button onClick={unreadMessages}>Agregar tarea</button>
      {/* Mensajes sin leer */}
      {message > 0 && <p>Mensajes nuevos: {message}</p>}
      {message === 0 && <p>No tienes mensajes nuevos</p>}
      {/* Operador ternario */}
      {message > 0 ? (
        <p>Mensajes nuevos: {message}</p>
      ) : (
        <p>No tienes mensajes nuevos</p>
      )}
    </div>
  );
};

export default OptionalRender;
