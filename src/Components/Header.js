import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { Button, Avatar } from "antd";
import { menu } from "../Utils/Icons/icons";
import { Link } from "react-router-dom";
const Header = () => {
  const user = "";
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex justify-between items-center relative">
      <img src={logo} alt="" className="w-17 h-14 rounded-lg ml-3" />
      <div className=" hidden md:flex gap-2">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/quiz" className="hover:underline">
          Quiz
        </Link>
      </div>
      <div className="flex gap-2 justify-center items-center mr-3">
        <div className="justify-center items-center mr-3  hidden md:flex gap-2">
          <Button size="small">
            <Link to="/signup">signUp</Link>
          </Button>
          {user ? (
            <Avatar size="small" icon={""} />
          ) : (
            <Avatar size="small" icon={"aa"} className="self-center" />
          )}
        </div>
        <span
          className="md:hidden text-lg cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          {menu}
        </span>
      </div>
      {toggle && (
        <div className="absolute right-10 bg-white w-[250px] rounded-lg top-20  md:hidden flex flex-col justify-center items-center gap-y-2 border-2 border-gray-200 p-2 shadow-lg">
          <Link to="/">Home</Link>
          <Link to="/quiz">Quiz</Link>
          <Button
            size="small"
            className="self-center bg-blue-500 hover:bg-blue-300"
          >
            <Link to="/signup"> signUp</Link>
          </Button>
          {user ? (
            <Avatar
              size="small"
              icon={""}
              className="self-center bg-blue-500 cursor-pointer"
            />
          ) : (
            <Avatar
              size="small"
              icon={"aa"}
              className="self-center bg-blue-500 cursor-pointer"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
