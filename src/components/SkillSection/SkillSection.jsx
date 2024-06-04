import React from "react";
import { useSelector } from "react-redux";

export default function SkillSection() {
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
  console.log(dark);
  return (
    <div>
      <div
        style={{ background: !dark ? "#f7f7f7" : "transparent" }}
        className="w-full min-h-screen py-4">
        <div className="p-4">
          <h1 className="text-3xl text-left sm:text-4xl mb-5 tracking-wider font-bold md:text-center dark:text-gray-200">
            My Skills
          </h1>
          {/* ============================= */}
          <div className="Frontend w-full pt-5 shadow-lg  bg-white dark:bg- dark:bg-blur dark:bg-[#ffffff04] rounded-2xl">
            <h2 className="text-2xl md:text-3xl mb-4 mb:my-0 font-bold text-gray-700 dark:text-gray-300 px-[5%]">
              Frontend:
            </h2>
            <div className="container w-full md:w-[70%] mx-auto  p-3 pt-1 flex justify-center items-center flex-wrap gap-6">
              {frontend.map((item) => (
                <div className="box w-fit">
                  <div
                    className="w-16 h-16 sm:w-24 sm:h-24 p-4 bg-red-00 rounded-full shadow-lg"
                    style={{
                      background: !dark ? item.color : item.darkColor,
                    }}>
                    <div className="img w-full">
                      <img
                        className="w-full"
                        src={`./images/${item.imgName}.svg`}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="txt mt-2 text-center text-gray-800 dark:text-gray-300 text-[14px] font-semibold uppercase ">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-00 h-[vh] text-center py-5">
              <p className="text-base md:text-lg text-gray-800 p-2 px-2  lg:p-5 lg:px-7 dark:text-gray-200">
                I have been learning web development for more than a
                year. I have worked with{" "}
                <span className="font-semibold ">HTML</span>,{" "}
                <span className="font-semibold ">CSS</span>, and{" "}
                <span className="font-semibold ">JavaScript</span> for
                more than six months. <br /> Then, I moved on to{" "}
                <span className="text-sky-500 font-semibold">
                  React-JS
                </span>
                , and I have worked with it for five months. months
              </p>
            </div>
          </div>
          {/* ============**********================ */}
          <div className="Backend mt-4 w-full pt-5 shadow-lg  bg-white dark:bg- dark:bg-blur dark:bg-[#ffffff04] rounded-2xl">
            <h2 className="text-2xl md:text-3xl mb-4 md:mb-0 font-bold text-gray-700 dark:text-gray-300 px-[5%]">
              Backend:
            </h2>
            <div className="container w-[95%] md:w-[70%] mx-auto  p-3 pt-1 flex justify-center items-center flex-wrap gap-6">
              {backend.map((item) => (
                <div className="box w-fit">
                  <div
                    className="w-16 h-16 sm:w-24 sm:h-24 p-4 bg-red-00 rounded-full shadow-lg"
                    style={{
                      background: !dark ? item.color : item.darkColor,
                    }}>
                    <div className="img w-full">
                      <img
                        className="w-full"
                        src={`./images/${item.imgName}.svg`}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="txt mt-2 text-center text-gray-800 dark:text-gray-300 text-[14px] font-semibold uppercase ">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-00 h-[vh] text-center py-5">
              <p className="text-base md:text-lg text-gray-800 p-2 px-2  lg:p-5 lg:px-7 dark:text-gray-200">
                Currently i have been learning backend with{" "}
                <span className="font-semibold ">MongoDB</span>,{" "}
                <span className="font-semibold ">Express-JS</span>,
                and <span className="font-semibold ">Node-JS</span>{" "}
                for three months.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
