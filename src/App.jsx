import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import UserList from "./pages/UserList/UserList";
import Home from "./pages/Home/Home";

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
   
  );
}

export default App;
