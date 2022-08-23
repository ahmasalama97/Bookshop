import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Logo from "../Logo";
import Searchbar from "../Searchbar";
import HeaderIcons from "../HeaderContents";
import Navigation from "../Navigation";
import Home from "../Home";
import { Routes } from "react-router-dom";
import Books from "../Books";
import AppRoutes from "../../Services/AppRoutes";

const Screen = () => {
  return (
    <div className="bg-white m-16 rounded-lg">
      <Router>
        <div className="flex justify-between">
          <Logo />
          <Searchbar />
          <HeaderIcons />
        </div>
        <Navigation />
        <Routes>
          <Route path={AppRoutes.home} element={<Home />} />
          <Route path={AppRoutes.books} element={<Books />} />
        </Routes>
      </Router>
    </div>
  );
};
export default Screen;
