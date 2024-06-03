import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosCodeWorking } from "react-icons/io";

export default function GroupBtn({
  text,
  icon,
  title,
  firstBg,
  middleBg,
  lastBg,
  iconColor,
  textColor,
}) {
  return (
    <div className="relative group cursor-pointer my-4">
      <div
        className={`absolute bg-center animate-tilt blur-[6px] group-hover:inset-[-1px] tranistion duration-200 inset-[2px] bg-gradient-to-tl from-${firstBg}-500 via-${middleBg}-400 to-${lastBg}-500  rounded-lg dark:bg-gradient-to-tl  dark:from-${middleBg}-700 dark:to-${lastBg}-700 `}></div>
      <div className="button relative rounded-lg flex items-center justify-evenly gap-3 bg-white dark:bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#194a6b] via-[#012f4c] to-gray-900  px-3 py-[12px]">
        <div className={`icon text-${iconColor}-400 text-[26px]`}>
          {icon}
        </div>
        <p className="border-r-gray-800 w-[140px] border-r-2 pr-2 group-hover:text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300">
          {text}
        </p>
        <span className={`text-${textColor}-400 w-16 `}>{title}</span>
        {<FaArrowRight className={`text-${textColor}-400 `} />}
      </div>
    </div>
  );
}
