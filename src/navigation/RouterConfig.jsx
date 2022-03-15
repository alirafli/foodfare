import React from "react";
import { Routes, Route } from "react-router-dom";

//path
import { LOGIN } from "./Path";

//pages
import Login from "../pages/Login";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path={LOGIN} element={<Login />} />
    </Routes>
  );
};
