import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import Login from "./components/Login/Login";

function App() {
  // const token = getToken();

  // const getToken = () => {
  //   const tokenString = sessionStorage.getItem("token");
  //   const userToken = JSON.parse(tokenString);
  //   return userToken?.token;
  // };

  // const setToken = (userToken) => {
  //   sessionStorage.setItem("token", JSON.stringify(userToken));
  // };

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  return (
    <div className="wrapper">
      <h1>Application</h1>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/preferences" element={<Preferences />}></Route>
      </Routes>
    </div>
  );
}

export default App;
