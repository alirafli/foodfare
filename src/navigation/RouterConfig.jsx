import React from "react";
import { Routes, Route } from "react-router-dom";

//path
import {
  LOGIN,
  HOME,
  REGISTER,
  EDUCATION,
  ARTICLE,
  BIGDONATION,
  FORM,
  SHAREFOOD,
} from "./Path";

//pages
import Login from "../pages/Login/Login";
import Homepage from "../pages/Homepage/Homepage";
import Register from "../pages/Register/Register";
import BigDonation from "../pages/BigDonation";
import BigDonationForm from "../pages/BigDonationForm";
import Education from "../pages/EducationPage/EducationPage";
import Article from "../pages/Article/Article";
import ShareFood from "../pages/ShareFoodFunction";
import ShareFoodForm from "../pages/ShareFoodForm";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route exact path={LOGIN} element={<Login />} />
      <Route path={HOME} element={<Homepage />} />
      <Route path={REGISTER} element={<Register />} />
      <Route exact path={EDUCATION} element={<Education />} />
      <Route path={ARTICLE} element={<Article />} />
      <Route path={BIGDONATION}>
        <Route index element={<BigDonation />} />
        <Route path={FORM} element={<BigDonationForm />} />
      </Route>
      <Route path={SHAREFOOD}>
        <Route index element={<ShareFood />} />
        <Route path={FORM} element={<ShareFoodForm />} />
      </Route>
      <Route path={EDUCATION} element={<Education />} />
    </Routes>
  );
};
