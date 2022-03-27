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
  BIGDONATIONFORM,
  MODAL,
} from "./Path";

//pages
import Login from "../pages/Login/Login";
import Homepage from "../pages/Homepage/Homepage";
import Register from "../pages/Register/Register";
import BigDonation from "../pages/BigDonation";
import BigDonationForm from "../pages/BigDonationForm";
import Education from "../pages/EducationPage/EducationPage";
import Article from "../pages/Article/Article";
import Navbar from "../components/Navbar/Navbar";
import Modals from "../components/Modals/Modals";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route exact path={LOGIN} element={<Login />} />
      <Route path={REGISTER} element={<Register />} />
      <Route
        path={HOME}
        element={
          <div>
            <Navbar />
            <Homepage />
          </div>
        }
      />
      <Route
        exact
        path={EDUCATION}
        element={
          <div>
            <Navbar />
            <Education />
          </div>
        }
      />
      <Route
        path={ARTICLE}
        element={
          <div>
            <Navbar />
            <Article />
          </div>
        }
      />
      <Route path={BIGDONATION}>
        <Route
          index
          element={
            <div>
              <Navbar />
              <BigDonation />
            </div>
          }
        />
        <Route
          path={BIGDONATIONFORM}
          element={
            <div>
              <Navbar />
              <BigDonationForm />
            </div>
          }
        />
      </Route>
      <Route
        path={EDUCATION}
        element={
          <div>
            <Navbar />
            <Education />
          </div>
        }
      />
      <Route path={MODAL} element={<Modals />} />
    </Routes>
  );
};
