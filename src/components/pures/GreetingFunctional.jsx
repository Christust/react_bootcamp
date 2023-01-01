import React, { useState } from "react";
import PropTypes from "prop-types";

const GreetingFunctional = (props) => {
  const [age, setAge] = useState(25);
  const birthday = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <h1>Hola {props.name}</h1>
      <h2>Tu edad es de {age}</h2>
      <button onClick={birthday}>Aumentar funcion</button>
    </div>
  );
};

GreetingFunctional.propTypes = {
  name: PropTypes.string,
};

export default GreetingFunctional;

