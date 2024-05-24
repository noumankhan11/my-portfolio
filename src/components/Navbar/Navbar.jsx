import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { toggleDarkMode } from "../../store/themeSlice";

export default function Navbar() {
  const currentTheme = useSelector((state) => state.theme);
  // const [DarkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();
  const handleDarkMode = () => {
    dispatch(toggleDarkMode());
    // setDarkMode((prev) => !prev);
  };
  console.log(currentTheme);

  const links = [
    {
      title: "Home",
      slug: "/home",
      id: 2,
    },
    {
      title: "Projects",
      slug: "/projects",
      id: 3,
    },
    {
      title: "Contact",
      slug: "/contact",
      id: 4,
    },
    {
      title: "About",
      slug: "/about",
      id: 5,
    },
  ];
  return (
    <div className="w-full px-3 py-1 bg-zinc-100">
      <div className="nav w-full flex justify-between items-center">
        <div className="nav_left">
          <div className="logo w-[10vw] bg-orange-600">
            <img
              src="./images/nk-black.png"
              className="-full h-[70px]"
              alt="NK_NOMI"
            />
          </div>
        </div>
        <div className="nav_center-menu bg-slate-600">
          <ul className="menu flex text-black bg-slate-400 gap-20">
            {links.map((link) => (
              <li key={link.id} className="menu_item">
                {link.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="icons text-black ">
          <li
            onClick={() => handleDarkMode()}
            className="w-[40px] h-[40px] cursor-pointer text-185px] grid place-items-center bg-gray-200 rounded-full">
            {currentTheme ? "Dark Now" : "Light Now"}
          </li>
        </div>
      </div>
    </div>
  );
}
