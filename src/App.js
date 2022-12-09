import React from "react";
import { Route , Routes } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
};

export default App;
