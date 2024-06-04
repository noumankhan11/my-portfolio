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
      <div className="hero-section h-[calc(100vh-70px)]  flex items-center pb-9">
        <div className="container w-full flex items-center justify-between">
          <div className="left-main_info w-[60%] p-3">
            <div className="mb-6">
              <h1 className="text-5xl font-bold mb-4 text-fuchsia-600">
                Hello there! I'm Nomi
              </h1>
              <h3 className="text-[28px] font-semibold text-indigo-600">
                A passionate Front-end Developer & aspiring Full-stack
                Developer
              </h3>
            </div>
            <div className="">
              <p className="font-semibold text-[18px]">About me</p>
              <h4 className="text-pink-800">
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
          <div className="right p-3 w-fit min-w-[350px] bg-yellow-00 text-center">
            <div className="Main-buttons_menu">
              <div className="container flex flex-col gap-2">
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
