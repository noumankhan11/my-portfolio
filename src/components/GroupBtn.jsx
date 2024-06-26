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
    <div className="relative w-[90vw] sm:w-auto group cursor-pointer my-3 md:my-4">
      <div
        style={{
          background: `linear-gradient(to right,${firstBg}, ${middleBg}, ${lastBg})`,
        }}
        className={`absolute bg-center animate-tilt blur-[6px] group-hover:inset-[-1px] tranistion duration-200 inset-[2px] bg-gradient-t-tl from-${firstBg}-500 via-${middleBg}-400 to-${lastBg}-500  rounded-lg dark:bg-gradient-to-tl  dark:from-${middleBg}-700 dark:to-${lastBg}-700 `}></div>
      <div className="button relative rounded-lg flex items-center justify-evenly gap-1 sm:gap-3 bg-white dark:bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#194a6b] via-[#012f4c] to-gray-900 px-1 sm:px-3 py-[12px]">
        <div
          style={{
            color: `${iconColor}`,
          }}
          className={`icon text-${iconColor}-400 text-[26px]`}>
          {icon}
        </div>
        <p className="border-r-gray-600 w-[140px] border-r-2 pr-2 text-gray-600 group-hover:text-gray-800 dark:text-gray-300 dark:group-hover:text-gray-100">
          {text}
        </p>
        <span
          style={{
            color: `${textColor}`,
          }}
          className={`text-${textColor}-400 w-16 `}>
          {title}
        </span>
        {
          <FaArrowRight
            style={{
              color: `${textColor}`,
            }}
            className={`text-${textColor}-400 `}
          />
        }
      </div>
    </div>
  );
}
