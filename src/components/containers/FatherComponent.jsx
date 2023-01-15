import React, { useState } from "react";
import ChildComponent from "../pures/ChildComponent";
const FatherComponent = () => {
  const [name, setName] = useState("Christos");
  function showMessage(text) {
    alert(text);
  }
  function updateName(newName) {
    setName(newName);
  }
  return (
    <div>
      <p>{name}</p>
      <ChildComponent send={showMessage} update={updateName}></ChildComponent>
    </div>
  );
};

export default FatherComponent;
