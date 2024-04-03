import React from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Quiz from "./Pages/Quiz";
import SignUp from "./Pages/SignUp";

const App = () => {
  const user = "";
  return (
    <div className="">
      <Header />
      {user ? (
        <div className="bg-white-700 w-full min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      ) : (
        <div className="w-[300px] mt-3 ml-4">
          <h1>
            Hi there , This is Quiz app developed using MERN Stack and we get
            the questions in this app by using OPEN AI Api on differet
            programming lanaguages
          </h1>
        </div>
      )}
    </div>
  );
};

export default App;
