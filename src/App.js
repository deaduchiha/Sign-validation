import React from "react";
import { Route, Routes } from "react-router-dom";

// components
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
