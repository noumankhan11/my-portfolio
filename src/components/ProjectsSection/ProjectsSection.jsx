import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineIosShare } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Projects() {
  const projectsData = [
    {
      title: "project Name",
      liveUrl: "",
      githubUrl: "",
      imgUrl: "./images/project.jpg",
    },
    {
      title: "project Name",
      liveUrl: "",
      githubUrl: "",
      imgUrl: "./images/project.jpg",
    },
    {
      title: "project Name",
      liveUrl: "",
      githubUrl: "",
      imgUrl: "./images/project.jpg",
    },
    {
      title: "project Name",
      liveUrl: "",
      githubUrl: "",
      imgUrl: "./images/project.jpg",
    },
  ];
  return (
    <div>
      <div className={` bg-white dark:bg-transparent px-1  sm:p-4 `}>
        <h1 className="text-center relative z-10 text-gray-800 dark:text-gray-200 text-3xl sm:text-4xl  font-bold py-3">
          Projects
        </h1>

        <div className="container w-full px-0 md:px-2 p-2 flex mx-auto items-center justify-center flex-wrap gap-8 ">
          {projectsData.map((item) => (
            <div className="box relative dark:bg-[#89898a15] flex-1 basis-[250px] grow max-w-[340px] lg:max-w-[400px] h-[350px] border-black border- shadow-2xl my-1 p-2 rounded-xl overflow-hidden">
              <div className="">
                <div className="topImg relative h-[55%] rounded overflow-hidden">
                  <img
                    className=" h-[170px] w-full object-cover rounded "
                    src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                  <div className="aboutProject dark:bg-[#1e4161] dark:text-gray-200 absolute bottom-0 left-[50%] translate-x-[-50%] bg-gray-50 py-1 px-3 rounded-tl-lg rounded-tr-lg">
                    Web App
                  </div>
                </div>
                <div className="bottom dark:text-gray-200 text-gray-700">
                  <h3
                    className="projectName text-center dark:text-gray-100 text-gray-900  font-semibold text-lg py-2 my-1
                  ">
                    {item.title}
                  </h3>
                  <p className="description leading-tight dark:text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Debitis, veniam.
                  </p>
                  <div className="w-full absolute bottom-0 text-2xl  flex justify-between px-5 py-3 border-t-[1px] border-gray-200 dark:border-gray-700">
                    <div className="">
                      <MdOutlineIosShare />
                    </div>
                    <div className="">
                      <IoLogoGithub />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center py-3 text-gray-700 dark:text-gray-200 cursor-pointer ">
          <button className="w-fit rounded shadow-xl py-2 px-4 bg-gray-100 dark:bg-[#00000039] dark:hover:text-gray-100 dark:hover:bg-[#49494935]  duration-100">
            <NavLink to={Projects}>See all</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
