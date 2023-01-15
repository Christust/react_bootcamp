import React, { useRef } from "react";
import PropTypes from "prop-types";

const ChildComponent = ({ name, send, update }) => {
  const messageRef = useRef("");
  const nameRef = useRef();
  function submitName(e) {
    e.preventDefault();
    update(nameRef.current.value);
  }
  function pressButton() {
    alert("Boton 1");
  }

  function pressButtonParams(text) {
    alert(text);
  }
  return (
    <div>
      <p onMouseOver={() => alert("Mouse")}>ChildComponent</p>
      <button onClick={pressButton}>Submit 1</button>
      <button onClick={() => pressButtonParams("Boton 2 pulsado")}>
        Submit 2
      </button>
      <button onClick={() => send(messageRef.current.value)}>
        Enviar mensaje a padre
      </button>
      <input type="text" ref={messageRef} />
      <div className="m-3">
        <form onSubmit={submitName} action="">
          <input ref={nameRef} type="text" placeholder="Nombre" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

ChildComponent.propTypes = {};

export default ChildComponent;
