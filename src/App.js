import React from "react";
import { Routes, Route } from "react-router";
import Login from "./pages/login";
import Homepage from "./pages/homepage";
import DetailHomepage from "./pages/homepage/detail";
import Test from "./pages/test";
import PrivateRoute from "./configs/privateRoute";

const App = () => {
  return (
    <Routes>
     <Route path="/" element={<Login />}/>
      <Route element={<PrivateRoute />}>
        <Route path="/github" element={<Homepage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/github/:id" element={<DetailHomepage />} />
      </Route>
    </Routes>
  )
}

export default App