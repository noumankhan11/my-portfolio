import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosCodeWorking } from "react-icons/io";

export default function GroupBtn() {
  return (
    <div className="relative group cursor-pointer">
      <div className="absolute bg-center animate-tilt blur-sm group-hover:inset-[-3px] tranistion duration-200 -inset-[2px] bg-gradient-to-tl from-fuchsia-600 via-indigo-500 to-pink-600  rounded-lg "></div>
      <div className="button relative  rounded-lg flex items-center justify-evenly gap-3 bg-white px-3 py-[10px]">
        <div className="icon text-[26px]">
          <IoIosCodeWorking />
        </div>
        <p className="border-r-gray-800 border-r-2 pr-2 group-hover:text-gray-500">
          What i have made
        </p>
        <span>Projects</span>
        <FaArrowRight />
      </div>
    </div>
  );
}
