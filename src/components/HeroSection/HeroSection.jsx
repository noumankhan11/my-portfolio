import React from "react";
import GroupBtn from "../GroupBtn";
import { FaArrowRight } from "react-icons/fa";
import {
  IoIosCodeWorking,
  IoIosContact,
  IoIosPaper,
} from "react-icons/io";

export default function HeroSection() {
  return (
    <div>
      <div className="hero-section select-none h-full md:h-[calc(100vh-70px)] w-full flex items-center justify-start md:justify-center before:backdrop:pb-9">
        <div className="container w-[100vw] pt-7 md:pt-0 flex items-start md:items-center justify-between flex-col md:flex-row">
          <div className="left-main_info w-full md:w-[60%] p-3 ">
            <div className="mb-6">
              <h1 className="text-[11vw] leading-[100%] sm:text-[8vw] md:text-5xl font-bold mb-4 text-[#345266] dark:text-gray-200">
                Hello there! I'm{" "}
                <span className="text-[#4a4aed] dark:text-[#6da4c0] font-extrabold">
                  Nomi
                </span>
              </h1>
              <h3 className="text-xl sm:text-[24px] font-semibold text-[#3a5693] dark:text-[#8fafc5]">
                A passionate Front-end Developer & aspiring Full-stack
                Developer
              </h3>
            </div>
            <div className="">
              <p className="font-semibold text-[18px] text-gray-800 dark:text-gray-200">
                About me
              </p>
              <h4 className="text-gray-600 dark:text-gray-300">
                I'm a self-taught developer with a strong foundation
                in Front-end development using React. I'm now eager to
                expand my skills to become a proficient Full-stack
                Developer. Currently, I'm delving into the world of
                backend development with JavaScript technologies like
                Express.js, Node.js, and MongoDB, and I'm excited to
                continue learning and growing as a self-motivated
                learner.
              </h4>
            </div>
          </div>
          <div className="right px-0 md:p-3  w-full md:w-[350px] my-2 text-center">
            <div className="Main-buttons_menu mx-auto w-fit">
              <div className="container flex flex-col gap-0 md:gap-2">
                <GroupBtn
                  firstBg="#537cb9c2"
                  middleBg="#32409baa"
                  lastBg={"#0283918f"}
                  text={"What i have made"}
                  icon={<IoIosCodeWorking />}
                  slug={"/#"}
                  title={"Project"}
                  textColor={"#5fc3cedb"}
                  iconColor={"#5fc3cedb"}
                />
                <GroupBtn
                  firstBg={"#b9239dcd"}
                  middleBg={"#68c9d4ac"}
                  lastBg={"#398e0082"}
                  text={"Read about me"}
                  icon={<IoIosContact />}
                  slug={"/#"}
                  title={"About"}
                  textColor={"#69e64d88"}
                  iconColor={"#69e64d88"}
                />
                <GroupBtn
                  firstBg={"#d79b418f"}
                  middleBg={"#0283918f"}
                  lastBg={"#3b52ecc9"}
                  text={"Download resume"}
                  icon={<IoIosPaper />}
                  slug={"/#"}
                  title={"Resume"}
                  textColor={"#5a69c6c8"}
                  iconColor={"#5a69c6c8"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
