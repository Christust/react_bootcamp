import React, { useEffect } from "react";

const AllCycles = () => {
  useEffect(() => {
    console.log("Logica cuando se renderice o cambie el componente");
    const intervalID = setInterval(() => {
      document.title = `${new Date()}`;
      console.log("Cambio de intervalo");
    }, 5000);
    return () => {
      console.log("Logica cuando el componente desaparece");
      clearInterval(intervalID);
    };
  }, []);
  return <div></div>;
};

export default AllCycles;
