import React from "react";
import { Routes, Route } from "react-router-dom";

//path
import { LOGIN, HOME } from "./Path";

//pages
import Login from "../pages/Login/Login";
import Homepage from "../pages/Homepage/Homepage"

export const RouterConfig = () => {
  return (
    <Routes>
      <Route exact path={LOGIN} element={<Login />} />
      <Route path={HOME} element={<Homepage />} />
    </Routes>
  );
};
