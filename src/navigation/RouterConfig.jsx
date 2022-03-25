import React from "react";
import { Routes, Route } from "react-router-dom";

//path
import { LOGIN, HOME, REGISTER, BIGDONATION } from "./Path";

//pages
import Login from "../pages/Login/Login";
import Homepage from "../pages/Homepage/Homepage";
import Register from "../pages/Register/Register";
import BigDonation from "../pages/BigDonation";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route exact path={LOGIN} element={<Login />} />
      <Route path={HOME} element={<Homepage />} />
      <Route path={REGISTER} element={<Register />} />
      <Route path={BIGDONATION} element={<BigDonation />} />
    </Routes>
  );
};
