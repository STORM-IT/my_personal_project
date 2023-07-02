import React from "react";
import { ImageContainer } from "../asset/img/IMG";
import DesktopCardInfo from "../shared/DesktopCardInfo";
import ProgressSkil from "../shared/ProgressSkil";

export default function Resume() {
  const tableData = [
    { name: "xaankoo",technology:"React.js", description: "seo company", sourceLinke: "https://xaankoow.github.io/segmentor-react/#/dashboard" },
    { name: "Restaurant Management",technology:"C# Windows Form", description: "managing Restaurant and accurate calculation of financial statements", sourceLinke: "https://github.com/alipsm/Restaurant_Management" },
    { name: "RSA (cryptosystem)",technology:"C++", description: "encryption and decryption of texts and it has high security", sourceLinke: "https://github.com/alipsm/RSA-cryptosystem" },
    { name: "English Land (Not Completed)",technology:"Next.js", description: "Learning english with api machine", sourceLinke: "https://alipsm.ir/englishLand/" },
    { name: "Snake",technology:"Html/Css/Js", description: "Snake Games", sourceLinke: "https://github.com/alipsm/Game_Snake_html-js" },

  ];

  return (
    <div className="flex justify-between items-center flex-row-reverse w-full h-full">
      <DesktopCardInfo />
      <div className="w-full h-full overflow-hidden">
        {/* <h1 className="text-3xl text-right tablet: pl-20 h-1/6 flex items-center laptopDown:text-xl"> */}
        <h1 className="text-3xl  tablet: pl-20 h-1/6 flex  items-center laptopDown:text-xl">
        {/* text-3xl  tablet: pl-20 h-1/6 flex  items-center laptopDown:text-xl */}
          Projects
        </h1>
        {/* <div className="flex justify-around flex-row-reverse h-5/6 laptopDown:block">
          <div className=" text-right flex flex-col justify-between pb-[10%]  laptopDown:pr-16">
            <h1 className="rtl-grid relative left-6 flex justify-start items-center text-3xl  laptopDown:text-xl">
              <div className=" w-4 h-4 rounded-sm bg-purple inline-block ml-2"></div>
              تحصیلات :
            </h1>
            <div>
              <div className=" flex  items-center flex-row-reverse relative left-10  mb-3">
                <div className="flex  justify-center items-center bg-purple rounded-full border-4 border-gray w-10 h-10">
                  <img
                    src={ImageContainer.education_cap}
                    alt="cap"
                    className=" w-6 h-6"
                  />
                </div>
                <span className=" text-xl mr-3">۱۳۹۷ - تاکنون</span>
              </div>
              <span className=" border-r-2 border-gray pr-3 pb-4 block box-border">
                دانشگاه آزاد اسلامی قزوین
              </span>
              <span className=" border-r-2 border-gray pr-3 pb-4 block box-border">
                کارشناسی کامپیوتر
              </span>
            </div>
            <div className="">
              <div className=" flex  items-center flex-row-reverse relative left-10 mt-4 mb-3">
                <div className="flex  justify-center items-center bg-purple rounded-full border-4 border-gray w-10 h-10">
                  <img
                    src={ImageContainer.education_cap}
                    alt="cap"
                    className=" w-6 h-6"
                  />
                </div>
                <span className=" text-xl mr-3">۱۳۹۶-۱۳۹۹</span>
              </div>
              <span className=" border-r-2 border-gray pr-3 pb-4 block box-border">
                دبیرستان اقمشه
              </span>
              <span className=" border-r-2 border-gray pr-3 pb-4 block box-border">
                دیپلم ریاضی فیزیک
              </span>
            </div>
            <h1 className="rtl-grid relative left-6 flex justify-start items-center text-3xl  laptopDown:text-xl  laptopDown:mt-14">
              <div className=" w-4 h-4 rounded-sm bg-purple inline-block ml-2"></div>
              سوابق کاری :
            </h1>
            <div>
              <div className=" flex  items-center flex-row-reverse relative left-10 mt-4 mb-3">
                <div className="flex  justify-center items-center bg-purple rounded-full border-4 border-gray w-10 h-10">
                  <img
                    src={ImageContainer.education_cap}
                    alt="cap"
                    className=" w-6 h-6"
                  />
                </div>
                <span className=" text-xl mr-3">۱۳۹۷ - تاکنون</span>
              </div>
              <span className=" border-r-2 border-gray pr-3 pb-4 block box-border">
                مدیر عامل
              </span>
              <span className=" border-r-2 border-gray pr-3 pb-4 block box-border">
                شرکت ویشارک
              </span>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-between pb-[10%] items-center h-2/3">
              <div className="fle justify-around items-center w-full laptopDown:px-[20%]">
                <h1 className="rtl-grid relative left-6 flex justify-start items-center text-3xl laptopDown:text-xl">
                  <div className=" w-4 h-4 rounded-sm bg-purple inline-block ml-2"></div>
                  مهارت های سخت :
                </h1>
                <ProgressSkil level1={"100"} level2="100" parentClass="mt-5" />
                <ProgressSkil level1={"100"} level2="100" parentClass="mt-5" />
                <ProgressSkil level1={"100"} level2="100" parentClass="mt-5" />
              </div>

              <div className="w-full laptopDown:px-[20%] laptopDown:mt-8">
                <h1 className="rtl-grid relative left-6 flex justify-start items-center text-3xl  laptopDown:text-xl">
                  <div className=" w-4 h-4 rounded-sm bg-purple inline-block ml-2"></div>
                  مهارت های نرم :
                </h1>

                <ProgressSkil level1={"100"} level2="100" parentClass="mt-5" />
                <ProgressSkil level1={"100"} level2="100" parentClass="mt-5" />
              </div>
            </div>
          </div>
        </div> */}

        <div className="flex flex-col h-5/6 overflow-hidden w-9/12 m-auto relative z-10">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w- full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w- full text-left text-sm font-light tablet:text-xs mobile:text-s">
                  <thead className="border-b font-medium dark:border-neutral-500 bg-gray">
                    <tr>
                      <th scope="col" className="px-6 py-4 mobile:px-3 laptopDown:hidden"></th>
                      <th scope="col" className="px-6 py-4 mobile:px-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-4 mobile:px-3">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-4 mobile:px-3">
                        Technology
                      </th>
                      <th scope="col" className="px-6 py-4 mobile:px-3">
                        Source
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item,index)=>(
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 mobile:px-3 font-medium  laptopDown:hidden">{index}</td>
                      <td className="whitespace-nowrap px-6 py-4 mobile:px-3 ">{item.name}</td>
                      <td className="whitespace-nowrap px-6 py-4 mobile:px-3 ">{item.description}</td>
                      <td className="whitespace-nowrap px-6 py-4 mobile:px-3 ">{item.technology}</td>
                      <td className="whitespace-nowrap px-6 py-4 mobile:px-3 ">
                        <a
                          href={item.sourceLinke}
                          target={"_blank"}
                          className="text-purple underline decoration-purple">
                          View
                        </a>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* background vector */}
        <img
          src={ImageContainer.desktopGrayResumeVector}
          alt="vector"
          className=" fixed left-0 bottom-0 w-1/4 laptopDown:hidden"
        />
      </div>
    </div>
  );
}
