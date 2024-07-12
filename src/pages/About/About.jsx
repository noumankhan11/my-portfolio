import React from "react";

import { useSelector } from "react-redux";
import { CardForAbout } from "../../components";

export default function About() {
  const dark = useSelector((state) => state.theme.darkMode);

  const frontend = [
    {
      title: "html",
      imgName: "html",
      color: "#ffd0d0b5 ",
      darkColor: "#6d4f4fb0 ",
    },
    {
      title: "css",
      imgName: "css_icon",
      color: "#d5e5ffb5 ",
      darkColor: "#35507e8c ",
    },
    {
      title: "javascript",
      imgName: "js_icon",
      color: "#ffd75f66 ",
      darkColor: "#8374498c ",
    },
    {
      title: "react-js",
      imgName: "react_icon",
      color: "#afd2fb43 ",
      darkColor: "#3a5676b5 ",
    },
    {
      title: "tailwind css",
      imgName: "tailwind_icon",
      color: "#dcfff899 ",
      darkColor: "#5d837b70 ",
    },
  ];
  const backend = [
    {
      title: "Mongo-DB",
      imgName: "mongo_icon",
      color: "#d9ffd0b5 ",
      darkColor: "#6a7768a3 ",
    },
    {
      title: "Express",
      imgName: "express_icon",
      color: "#e3ebf9b5 ",
      darkColor: "#60759a8b ",
    },
    {
      title: "node-JS",
      imgName: "node_icon",
      color: "#c7d9d666 ",
      darkColor: "#ffffff88 ",
    },
  ];

  return (
    <div>
      {/* ############## */}
      <div className="w-full p-2 md:p-5 py-9 flex justify-center gap-6 md:flex-row flex-col-reverse">
        <div className="left w-full h-[30vh] md:w-[45%] bg-gray-00">
          <div className="img h-full w-full object-cover shadow-xl">
            <img
              className="w-full h-full object-cover rounded-xl"
              src="./images/code.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="right w-full md:w-[50%] h-full px-4 ">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-50">
            About
          </h1>
          <div className="w-full h-full flex flex-col items-start gap-3 md:gap-8 pt-5 md:pt-9 ">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 md:mt-4">
              My name is Nouman Khan, I am a pasionate web developer
              programmer
            </h2>
            <p className="text text-gray-600 dark:text-gray-300  ">
              Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Qui, culpa cum! Nulla enim asperiores aspernatur
              exercitationem nemo, reiciendis suscipit hic?Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Quasi
              ullam vitae culpa commodi quibusdam, quas eum ipsam
              ducimus explicabo cupiditate!
            </p>
            <div className="buttons">
              <button className="px-3 py-2 mr-3 rounded-lg shadow-xl font-semibold bg-slate-100 dark:bg-[#2a2a2a46] hover:bg-slate-200 dark:hover:bg-[#73727224] duration-200 text-gray-800 dark:text-gray-200">
                My Service
              </button>
              <button className="px-3 py-2 mr-3 rounded-lg shadow-xl font-semibold bg-slate-100 dark:bg-[#2a2a2a46] hover:bg-slate-200 dark:hover:bg-[#73727224] duration-200 text-gray-800 dark:text-gray-200">
                My Service
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ############## */}
      <div className=" p-4 py-9 w-full lg:w-[80%] mx-auto bg-red-50">
        <div className="heading">
          <h1 className="text-center font-bold text-3xl text-gray-800">
            Currntly stack
          </h1>
        </div>
        {/* ===================== */}
        <div className="upper w-full my-9 p-3 bg-white">
          <div className="w-full flex gap-4">
            <div className="left w-[300px] h-44 bg-slate-100">
              <img src="" alt="" />
            </div>
            <div className="right">
              <h1 className="text-2xl font-bold text-gray-700 my-3">
                The Backend
              </h1>
              <p>
                Currently i am learning the backend technologies such
                as Express-Js, Node-Js, and MongoDB
              </p>
              <div className="icons mt-6">
                <div className="icon flex gap-4">
                  {/* ******************* */}
                  {backend.map((item) => (
                    <div className="box w-fit">
                      <div
                        className="w-8 h-8 sm:w-10 sm:h-10 p-1 bg-red-00 rounded-full shadow-lg"
                        style={{
                          background: !dark
                            ? item.color
                            : item.darkColor,
                        }}>
                        <div className="img w-full">
                          <img
                            className="w-full"
                            src={`./images/${item.imgName}.svg`}
                            alt=""
                          />
                        </div>
                      </div>
                      {/* <div className="txt mt-2 text-center text-gray-800 dark:text-gray-300 text-[14px] font-semibold uppercase ">
                        {item.title}
                      </div> */}
                    </div>
                  ))}
                  {/* ******************* */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* =============== */}

        <div>
          <CardForAbout backend={backend} />
        </div>
        <div className="down">
          <div className="">
            <h1>Future Plan (Next to Learn)</h1>
          </div>
        </div>
      </div>
      {/* ############## */}
    </div>
  );
}
