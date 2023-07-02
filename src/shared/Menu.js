import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ImageContainer } from "../asset/img/IMG";
import 'alpinejs';
export default function Menu() {

  const location=useLocation()

  const linkTag={
    style:"tablet:w-full",
    renderCss:(section)=>{
      return `${linkTag.style} ${section===location.pathname.replace("/","")&&"mobile:relative mobile:-top-7"}`;
    }
  }

  const parentImgContainerTag={
    style:"tablet:flex-col tablet:mt-4 tablet:w-full tablet:py-4 tablet:rounded-r-3xl mobile:rounded-lg transition-all mobile:py-3 mobile:w-14",

    renderCss:(section)=>{
      return `${parentImgContainerTag.style} ${section===location.pathname.replace("/","")&&"bg-liteGray"}`;
    }
  }

  const textMenuItemTag={
    style:"tablet:text-xs  mobile:text-s text-boldGray mt-3",
    renderCss:(section)=>{
      return `${textMenuItemTag.style} ${section===location.pathname.replace("/","")?"visible mobile:text-purple":"mobile:hidden"}`;
    }
  }

  return (
    <div className=" relative mobile:w-full mobile:h-[7%] tablet:h-full tablet:w-24 min-w-[96px] z-50">
    <div className={`flex items-center w-full h-full absolute right-0 bg-[#fff] mobile:bottom-0   mobile:flex-row-reverse mobile:justify-around tablet:justify-start tablet:flex-col tablet:pt-16 tablet:top-0  `} x-data={""}>
      <Link to={"home"} className={linkTag.renderCss("home")}>
        <div className={`flex justify-center flex-col items-center cursor-pointer hover:bg-liteGray ${parentImgContainerTag.renderCss("home")} transition-all`} >
          <img src={ImageContainer.homeMenu} alt="home" className="mobile:w-8 mobile:h-8 tablet:w-12 tablet:h-12" x-show={"open"}/>
          <span className={textMenuItemTag.renderCss("home")}>Home</span>
        </div>
      </Link>
      <Link to={"info"} className={linkTag.renderCss("info")} >
        <div className={`flex justify-center flex-col items-center cursor-pointer hover:bg-liteGray ${parentImgContainerTag.renderCss("info")}`}>
          <img src={ImageContainer.myInformationMenu} alt="user" className="mobile:w-8 mobile:h-8 tablet:w-12 tablet:h-12"/>
          <span className={`${textMenuItemTag.renderCss("info")}`}>Info</span>
        </div>
      </Link>
      <Link to={"resume"} className={linkTag.renderCss("resume")}>
        <div className={`flex justify-center flex-col items-center cursor-pointer hover:bg-liteGray ${parentImgContainerTag.renderCss("resume")}`}>
          <img src={ImageContainer.resumeMenu} alt="resume" className="mobile:w-8 mobile:h-8 tablet:w-12 tablet:h-12"/>
          <span className={textMenuItemTag.renderCss("resume")}>Projects</span>
        </div>
      </Link>
      <Link to={"contact"} className={linkTag.renderCss("contact")}>
        <div className={`flex justify-center flex-col items-center cursor-pointer hover:bg-liteGray ${parentImgContainerTag.renderCss("contact")}`}>
          <img src={ImageContainer.contactMenu} alt="contact" className="mobile:w-8 mobile:h-8 tablet:w-12 tablet:h-12"/>
          <span className={textMenuItemTag.renderCss("contact")}>Contact</span>
        </div>
      </Link>
    </div>
    </div>
  );
}
