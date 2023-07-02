import React from "react";
import { ImageContainer } from "../asset/img/IMG";
import Badge from "../shared/Badge";
import DesktopCardInfo from "../shared/DesktopCardInfo";

export default function MyInformation() {
  const parentBadgeTag = {
    style: "flex justify-between items-end tablet:py-3 laptopDown:py-2",
    renderCss: () => {
      return parentBadgeTag.style;
    },
  };

  const infoBadgeTag = {
    style: "text-boldGray laptopDown:text-xs tablet:text-xl",
    renderCss: () => {
      return badgeTag.style;
    },
  };

  const badgeTag = {
    style: "laptopDown:text-sm tablet:text-lg py-1 px-2",
    renderCss: () => {
      return badgeTag.style;
    },
  };
  return (
    <div className="flex justify-between items-center flex-row-reverse w-full h-full">
      <DesktopCardInfo />
      <div className="flex justify-between items-center flex-col relative h-full flex-grow">
        <div className=" relative w-full tablet:h-[55%] flex justify-between flex-row items-center laptopDown:px-[5%] tablet:px-14 laptopDown:h-full laptopDown:flex-col">
          <div className="h-full pt-11 laptopDown:w-full tablet:w-2/5">
            <div className="flex justify-between items-end flex-row-reverse mb-5">
              <img
                src={ImageContainer.personPicture}
                alt="person"
                className=" laptopUp:hidden w-2/5 rounded-full"
              />
              {/* <div> */}
              <h1 className="w-full text-left text-3xl tablet:py-3">
                About Me
              </h1>
              {/* </div> */}
            </div>
            <p className="tablet:text-xl laptopDown:text-lg text-textV1">
              I am ali parsamanesh, a web programmer.
              <br />
              It has been three years since I started programming.
              <br />
              I worked with different languages, but I am interested in
              JavaScript.
              <br />
              also i'm learning penetration testing and web design(Ui& Ux) so
              that I can develope a website as a professional developer.
              <br />
              I am currently working as a small programmer among a large community of programmers good luck.
            </p>
          </div>
          <div className="  flex justify-center items-end laptopDown:w-full tablet:w-2/5 tablet:h-full laptopDown:pb-10">
            <div className="w-full">
              <div className={parentBadgeTag.renderCss()}>
                <Badge
                  text={"Age"}
                  fontSize="16px"
                  classes={badgeTag.renderCss()}
                />
                <span className={infoBadgeTag.renderCss()}>22</span>
              </div>
              <hr />
              <div className={parentBadgeTag.renderCss()}>
                <Badge
                  text={"Education"}
                  fontSize="16px"
                  classes={badgeTag.renderCss()}
                />
                <span className={infoBadgeTag.renderCss()}>
                  Associate degree
                </span>
              </div>
              <hr />
              <div className={parentBadgeTag.renderCss()}>
                <Badge
                  text={"Email"}
                  fontSize="16px"
                  classes={badgeTag.renderCss()}
                />
                <span className={infoBadgeTag.renderCss()}>
                  parsamanesh.it@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className=" relative w-full h-[45%] pt-7 laptopDown:hidden">
          <img
            src={ImageContainer.desktopPurpleInformationVector}
            alt="vector"
            className=" absolute left-0 bottom-0 w-[70%] h-4/5 pt-2"
          />
          <img
            src={ImageContainer.desktopGrayInformationVector}
            alt="vector"
            className=" left-0 absolute bottom-0 w-[67%] h-4/5"
          />
          <img
            src={ImageContainer.humanGraphic}
            alt="vector"
            className=" relative mx-auto bottom-0 h-full z-20"
          />
        </div>
      </div>
    </div>
  );
}
