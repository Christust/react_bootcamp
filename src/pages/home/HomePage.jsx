import React from "react";
import { Link, Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <navbar>
        <Link to={"/"}>Home</Link>
        <Link to={"task-list"}>Task List</Link>
      </navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default HomePage;
