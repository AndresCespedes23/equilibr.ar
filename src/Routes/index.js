/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "../Components/Admin";
import Feed from "../Components/Feed";
import Home from "../Components/Homepage";
import Login from "../Components/Login";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
