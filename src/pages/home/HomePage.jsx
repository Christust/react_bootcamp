import React from "react";
import { Link, Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"task-list"}>Tasks</Link>
        <Link to={"about"}>About</Link>
        <Link to={"faqs"}>FAQS</Link>
        <Link to={"error-kjlahsdjkahsd"}>Error</Link>
      </div>
      <h1>Home page</h1>
      <Outlet />
    </div>
  );
};

export default HomePage;
