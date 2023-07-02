import React from "react";
import { ImageContainer } from "../asset/img/IMG";
import Badge from "./Badge";
import resumePdf from "../Pdf/Resume.pdf";

export default function DesktopCardInfo() {
  const socialNetworkTag = {
    style: "tablet:mx-2 mobile:mx-1 mobile:w-4 mobile:h-4",
    renderCss: () => {
      return socialNetworkTag.style;
    },
  };

  return (
    <div className=" h-full right-0 laptopDown:hidden">
      <div className="relative w-[367px] h-full">
        <div className=" absolute bg-purple top-0 w-full h-1/4">
          <div className=" relative w-full h-full">
            {/* <img
              src={ImageContainer.banerPersonPicture}
              alt="person"
              className=" absolute -bottom-48 z-10 "
            /> */}
            <img
              src={ImageContainer.personPicture}
              alt="person"
              className="absolute -bottom-48 z-10 border-[15px] border-white rounded-full w-96 h-96  tab mobile:hidden laptopDown:w-72 laptopDown:h-72"
            />
          </div>
        </div>
        <div className=" absolute flex items-center justify-center bg-liteGray bottom-0 w-full h-3/4">
          <div className=" flex flex-col items-center">
            <h1 className=" text-3xl text-boldGray">ali parsamanesh</h1>
            <div className="flex mt-6">
              {/* <img
                src={ImageContainer.instagram}
                alt="instagram"
                className={`${socialNetworkTag.renderCss()}`}
              />
              <img
                src={ImageContainer.telegram}
                alt="telegram"
                className={`${socialNetworkTag.renderCss()}`}
              />
              <img
                src={ImageContainer.linkedin}
                alt="linkedin"
                className={`${socialNetworkTag.renderCss()}`}
              /> */}
              {/* <img
                src={ImageContainer.twitter}
                alt="twitter"
                className={`${socialNetworkTag.renderCss()}`}
              /> */}
            </div>
            <div className="mt-6">
              <a href={resumePdf} target="_blank" download>
                <Badge
                  text={"Download Resume"}
                  padding="py-2 px-3"
                  classes="text-sm  cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
