import React from "react";
import { ImageContainer } from "../asset/img/IMG";
import Badge from "../shared/Badge";
import resumePdf from "../Pdf/Resume.pdf";

export default function Home() {
  const backgroundVectorTag = {
    desktop: "absolute h-full w-full mobile:hidden",
    mobile: "absolute h-full w-full tablet:hidden",
    renderCss: (device) => {
      return backgroundVectorTag[device];
    },
  };

  const socialNetworkTag = {
    style: "tablet:mx-2 mobile:mx-1 mobile:w-4 mobile:h-4",
    renderCss: () => {
      return socialNetworkTag.style;
    },
  };

  return (
    <div className=" overflow-hidden h-full tablet:bg-liteGray mobile:bg-white ">
      <div className=" absolute left-0 top-0 h-[101%] w-5/6">
        <img
          src={ImageContainer.desktopGrayVector_2}
          alt="vector"
          className={`${backgroundVectorTag.renderCss(
            "desktop"
          )} movingHomeVectore3 left-16`}
        />
        <img
          src={ImageContainer.desktopGrayVector_1}
          alt="vector"
          className={`${backgroundVectorTag.renderCss(
            "desktop"
          )} movingHomeVectore2 left-8 `}
        />
        <img
          src={ImageContainer.desktopPurpleVector}
          alt="vector"
          className={`${backgroundVectorTag.renderCss(
            "desktop"
          )} movingHomeVectore1 `}
        />
        <img
          src={ImageContainer.mobilePurpleVector}
          alt="vector"
          className={`${backgroundVectorTag.renderCss("mobile")}`}
        />
      </div>
      <div className="relative flex justify-around tablet:items-center mobile:items-end mobile:pb-32 w-full h-full z-10">
        <div>
          <img
            src={ImageContainer.personPicture}
            alt="person"
            className=" border-[15px] border-white rounded-full w-96 h-96 relative -top-[5%] tab mobile:hidden laptopDown:w-72 laptopDown:h-72"
          />
        </div>
        <div className=" flex flex-col items-center relative top-[10%]">
          <h1 className="laptopUp:text-6xl tablet:text-5xl mobile:text-4xl">
            ali parsamanesh
          </h1>
          <span className=" text-boldGray laptopUp:text-2xl tablet:text-lg mt-1 mobile:text-xs">
            front-end developer
          </span>
          <div className="flex mt-6 text-xl">
            {/* <a href=""> */}
            {/* <img src={ImageContainer.instagram} alt="instagram" className={`${socialNetworkTag.renderCss()}`}/> */}
            {/* </a> */}
            {/* <img src={ImageContainer.telegram} alt="telegram" className={`${socialNetworkTag.renderCss()}`} /> */}
            {/* <img src={ImageContainer.linkedin} alt="linkedin" className={`${socialNetworkTag.renderCss()}`} /> */}
            {/* <img src={ImageContainer.twitter} alt="twitter" className={`${socialNetworkTag.renderCss()}`} /> */}
          </div>
          <div className="mt-6">
            <a href={resumePdf} target={"_blank"} download>
              <Badge
                text={"download resume"}
                padding="py-3 px-4"
                classes="laptopUp:text-2xl text tablet:text-xl mobile:text-base  cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
