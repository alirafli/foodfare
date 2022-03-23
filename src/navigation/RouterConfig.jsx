import React from "react";
import { Routes, Route } from "react-router-dom";

//path
import { LOGIN, HOME, REGISTER } from "./Path";

//pages
import Login from "../pages/Login/Login";
import Homepage from "../pages/Homepage/Homepage";
import Register from "../pages/Register/Register";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route exact path={LOGIN} element={<Login />} />
      <Route path={HOME} element={<Homepage />} />
      <Route path={REGISTER} element={<Register />} />
    </Routes>
  );
};
