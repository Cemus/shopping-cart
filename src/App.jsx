import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </>
  );
}

export default App;
