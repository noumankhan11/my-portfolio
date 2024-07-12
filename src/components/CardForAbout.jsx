import React from "react";
import { useSelector } from "react-redux";

function CardForAbout({ backend }) {
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
  // const backend = [
  //   {
  //     title: "Mongo-DB",
  //     imgName: "mongo_icon",
  //     color: "#d9ffd0b5 ",
  //     darkColor: "#6a7768a3 ",
  //   },
  //   {
  //     title: "Express",
  //     imgName: "express_icon",
  //     color: "#e3ebf9b5 ",
  //     darkColor: "#60759a8b ",
  //   },
  //   {
  //     title: "node-JS",
  //     imgName: "node_icon",
  //     color: "#c7d9d666 ",
  //     darkColor: "#ffffff88 ",
  //   },
  // ];

  return (
    <div>
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
              Currently i am learning the backend technologies such as
              Express-Js, Node-Js, and MongoDB
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
    </div>
  );
}

export default CardForAbout;
