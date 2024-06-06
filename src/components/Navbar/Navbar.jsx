import React, { useEffect, useState } from "react";
import { FaHome, FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineProject } from "react-icons/ai";
import { IoIosContact, IoMdContact } from "react-icons/io";
// import { logoLigt } from "../../assets/images/nk-black";
// import { logoDark } from "../../assets/images/nk-white";
import { toggleDarkMode } from "../../store/themeSlice";

export default function Navbar() {
  const currentTheme = useSelector((state) => state.theme);
  const [DarkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const handleDarkMode = () => {
    dispatch(toggleDarkMode());
    setDarkMode((prev) => !prev);
    console.log(currentTheme);
  };
  useEffect(() => {
    if (DarkMode) {
      document.body.classList.add("dark");
    } else if (!DarkMode) {
      document.body.classList.remove("dark");
    }
    console.log(DarkMode);
  }, [DarkMode]);
  // *****************************************
  // ++ working with to choose primary and seccondry colors
  // *****************************************

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
    <div className="w-full  px-3 py-1 boder-2 dark:border-gray-200 dark:bg-[#082132] bg-zinc-100">
      <div className="nav relative w-full flex justify-between items-center">
        <div className="nav_left">
          <div className="logo w-[] p-1">
            <img
              src={`${
                DarkMode
                  ? "./images/nk-white.png"
                  : "./images/nk-black.png"
              }`}
              className="-full h-[50px]"
              alt="NK_NOMI"
            />
          </div>
        </div>
        <div className="nav_center-menu hidden sm:block">
          <ul className="menu flex text-black gap-10 ">
            {links.map((link) => (
              <li
                key={link.id}
                className={`nav-link font-semibold cursor-pointer dark:text-white`}>
                {link.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="icons text-black flex gap-3">
          <li
            onClick={() => handleDarkMode()}
            className="w-[35px] dark:text-white text-black dark:bg-gray-600 h-[35px] cursor-pointer text-[15px] grid place-items-center bg-gray-200 rounded-full border-gray-400 dark:hover:boder-gray-100  hover:border-[1px] hover:bg-gray-300 dark:hover:bg-gray-700">
            {DarkMode ? <FaMoon /> : <FaSun />}
          </li>
          <li
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`w-[35px]  dark:text-white text-black dark:bg-gray-600 sm:hidden h-[35px] cursor-pointer text-[15px] grid place-items-center bg-gray-200 rounded-full border-gray-400 dark:hover:boder-gray-100  hover:border-[1px] hover:bg-gray-300 dark:hover:bg-gray-700`}>
            <GiHamburgerMenu />
          </li>
        </div>

        {/* ----------mobile menu---------- */}
        <div
          className={`nav-mobile sm:hidden absolute ${
            isMenuOpen ? "block" : "hidden"
          }  -bottom-[175px] w-[180px] bg-gray-200 dark:bg-gray-600 right-0 rounded overflow-hidden`}>
          <ul className="menu  text-black gap-10 select-none">
            {links.map((link, index) => (
              <li
                key={link.id}
                className={`nav-lin font-semibold flex items-center gap-2 cursor-pointer dark:text-white border-b-2 border-gray-300 dark:border-gray-500 p-2 px-3 ${
                  index >= links.length - 1
                    ? "border-0 border-b-0"
                    : ""
                } hover:bg-gray-300 dark:hover:bg-gray-700`}>
                {" "}
                <span className="text-[18px]">
                  {index === 0 ? (
                    <FaHome />
                  ) : index === 1 ? (
                    <AiOutlineProject />
                  ) : index === 2 ? (
                    <IoMdContact />
                  ) : (
                    <IoIosContact />
                  )}
                </span>
                <span>{link.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
