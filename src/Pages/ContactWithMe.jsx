import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ImageContainer } from "../asset/img/IMG";
import Badge from "../shared/Badge";
import DesktopCardInfo from "../shared/DesktopCardInfo";

export default function ContactWithMe() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  function InnerStyles() {
    this.informationIco =
      "p-3 bg-purple w-10 rounded-xl laptopDown:rounded laptopDown:p-1 laptopDown:w-4 laptopDown:h-4 box-content";
    this.informationText = "text-2xl text-boldGray pl-2 laptopDown:text-xl";
    this.textInput =
      " outline-none border border-purple rounded-xl p-3 text-2xl rtl-grid laptopDown:text-sm laptopDown:p-2 ";
  }

  const style = new InnerStyles();

  return (
    <div className="flex justify-between flex-row-reverse relative w-full h-full">
      <img
        src={ImageContainer.desktopGrayContactVector}
        alt="vector"
        className=" fixed top-0 left-0 w-2/5"
      />
      <DesktopCardInfo />
      <div className="w-full h-full z-10">
        <h1 className="text-3xl  tablet: pl-20 h-1/6 flex  items-center laptopDown:text-xl">
          Contact With Me
        </h1>
        <div className="flex w-full h-5/6 justify-around items-center flex-row-reverse laptopDown:flex-col">
          {/* <div className="flex flex-col justify-center laptopUp:w-2/6 h-full laptopDown:pr-14 laptopDown:self-end"> */}
          <div className="flex w-full pl-[10%] flex-row justify-evenly h-max laptopDown:pr-14 laptopDown:self-end mobile:flex-col mobile:">
            <div className="w-full ">
              <div className="flex justify-start items-center">
                <img
                  src={ImageContainer.markLocation}
                  alt="location"
                  className={style.informationIco}
                />
                <span className={style.informationText}>Mashhad</span>
              </div>
              <hr className=" border-boldGray my-2 w-3/4" />
              <div className="flex justify-start items-center">
                <img
                  src={ImageContainer.email}
                  alt="email"
                  className={style.informationIco}
                />
                <span className={style.informationText}>
                  parsamanesh.it@gmail.com
                </span>
              </div>
              <hr className=" border-boldGray my-2 w-3/4" />
              <div className="flex justify-start items-center">
                <img
                  src={ImageContainer.whiteLinkedin}
                  alt="email"
                  className={style.informationIco}
                />
                <a
                  href=""
                  className={`${style.informationText} text-purple underline decoration-purple`}>
                  Linkedin
                </a>
              </div>
            </div>

            <div className="w-full">
              <hr className=" border-boldGray my-2 w-3/4 tablet:hidden" />
              <div className="flex justify-start items-center">
                <img
                  src={ImageContainer.whiteTelegram}
                  alt="email"
                  className={style.informationIco}
                />
                <span className={style.informationText}>@PSMNS</span>
              </div>
              <hr className=" border-boldGray my-2 w-3/4" />
              <div className="flex justify-start items-center">
                <img
                  src={ImageContainer.whiteInstagram}
                  alt="email"
                  className={style.informationIco}
                />
                <span className={style.informationText}>ali._.psm</span>
              </div>
              <hr className=" border-boldGray my-2 w-3/4" />
              <div className="flex justify-start items-center">
                <img
                  src={ImageContainer.whitePhone}
                  alt="email"
                  className={style.informationIco}
                />
                <span className={style.informationText}>09370915132</span>
              </div>
            </div>
          </div>
          {/* <div className=" w-5/6 h-36 my-5 m-auto laptopUp:hidden">
            <img
            src={ImageContainer.location}
            alt="map"
              className="w-full h-full"
            />
          </div> */}
          {/* <div className="w-3/6 pl-7 mobile:w-3/4">
            <div className="flex justify-end items-center w-full">
              <h1 className=" text-3xl pr-3 laptopDown:text-xl">
                با من در ارتباط باشید
              </h1>
              <div className=" w-3 h-3 bg-purple rounded-sm"></div>
            </div>
            <div className="flex flex-row-reverse laptopUp:h-52  mt-11 laptopDown:flex-col laptopDown:mt-2">
              <div className=" flex flex-col justify-between ml-4">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="نام کامل"
                  className={`laptopDown:mb-2 ${style.textInput}`}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="ایمیل"
                  className={`laptopDown:mb-2 ${style.textInput}`}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="موضوع"
                  className={`laptopDown:mb-2 ${style.textInput}`}
                />
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="پیام"
                className={`laptopDown:h-28 ${style.textInput}`}></textarea>
            </div>
            <div
              className={`w-full flex flex-row-reverse justify-between items-center pt-4 laptopDown:flex-col-reverse laptopDown:items-end `}>
              <Badge
                text={"ارسال"}
                fontSize="24px"
                classes="p-2 text-2xl rounded-lg mt-3"
              />
              <div>
                <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className=" w-5/6 h-1/4 m-auto laptopDown:hidden">
          <img
            src={ImageContainer.location}
            alt="map"
            className="w-full h-full"
          />
        </div> */}
      </div>
    </div>
  );
}
