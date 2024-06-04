import React from "react";

export default function Footer() {
  const socialData = [
    {
      path: "linkedin_icon",
      link: "£",
    },
    {
      path: "github_icon",
      link: "£",
    },
    {
      path: "twitter_icon",
      link: "£",
    },
    {
      path: "facebook_icon",
      link: "£",
    },
    {
      path: "discord_icon",
      link: "£",
    },
    {
      path: "instagram_icon",
      link: "£",
    },
  ];

  return (
    <div className="h-[vh] w-full bg-gray-100 dark:bg-[#183549] pt-5  pb-0 border-t-gray-200 dark:border-t-gray-600 border-t-2">
      <div className="">
        <div className="icons">
          <div className="w-[80%] bg-gray-00 mx-auto p-4 flex items-center justify-center gap-[3vw]">
            {socialData.map((item) => (
              <div className="icn w-12 bg-white p-3 rounded-full shadow-xl">
                <img src={`./images/${item.path}.svg`} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="footerMenu w-full py-3 text-gray-800 dark:text-gray-200 ">
          <ul className="w-full flex justify-center gap-[5vw] font-semibold">
            <li className="px-2 py-1 shadow-lg rounded bg-[#dfdfdf0e]">
              Projects
            </li>
            <li className="px-2 py-1 shadow-lg rounded bg-[#dfdfdf0e]">
              Contact
            </li>
            <li className="px-2 py-1 shadow-lg rounded bg-[#dfdfdf0e]">
              About
            </li>
          </ul>
        </div>
      </div>
      <div className="bottomFooter w-full mt-4 p-3 bg-gray-200 dark:bg-[#dfdfdf0e]">
        <h3 className="text-center text-gray-800 dark:text-gray-300 font-semibold">
          Nouman Khan © all right reserved
        </h3>
      </div>
    </div>
  );
}
