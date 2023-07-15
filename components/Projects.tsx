import React from "react";
import SectionTitle from "./SectionTitle";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import {
  segmento_1,
  segmento_2,
  segmento_3,
  englishLand_1,
  englishLand_2,
  englishLand_3,
  rsa_1,
  rsa_2,
  rsa_3,
  rsa_4,
  cv_1,
  cv_2,
  restaurant_1,
} from "../public/assets";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" />
      <div className="flex flex-col gap-14">
        <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-28 lgl:gap-0 mt-10">
          <div className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Swiper
                modules={[Autoplay]}
                loop
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}>
                <SwiperSlide>
                  <Image
                    className="w-[full] h-full object-contain"
                    src={segmento_1}
                    alt="segmentoPic"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-[full] h-full object-contain"
                    src={segmento_2}
                    alt="segmentoPic"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-[full] h-full object-contain"
                    src={segmento_3}
                    alt="segmentoPic"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <Link href={"https://segmento.ir/"} target="_blank">
              <h3 className="text-2xl font-bold underline">Segmento</h3>
            </Link>
            <p className="bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 rounded-md">
              Get practical options for SEO by using this site.
              <br />
              This site is able to suggest you to find the title of the articles
              according to the entered keywords.
              <br />
              Also, according to the purchased plan, this build can give you
              unique features, for example, you can reach it by entering the
              workspace and check its rank on Google pages.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Javascript</li>
              <li>ReactJs</li>
              <li>HTML & CSS</li>
              <li>Tailwindcss</li>
              <li>Redux</li>
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-col xl:flex-row-reverse items-center justify-center gap-28 lgl:gap-0 mt-10">
          <div className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Swiper
                modules={[Autoplay]}
                loop
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}>
                <SwiperSlide>
                  <Image
                    className="w-[full] h-full object-contain"
                    src={englishLand_1}
                    alt="englishLandPic"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-[full] h-full object-contain"
                    src={englishLand_2}
                    alt="englishLandPic"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-[full] h-full object-contain"
                    src={englishLand_3}
                    alt="englishLandPic"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start text-right xl:-mr-16 z-10">
            <Link href={"https://alipsm.ir/englishLand/"} target="_blank">
              <h3 className="text-2xl font-bold underline">English Land</h3>
            </Link>
            <p className="bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 rounded-md">
              A very simple machine that can help you learn English.
              <br />
              Using an intelligent algorithm, this site can compare your words
              with their original meanings, and if your meaning is almost equal,
              it will give you the correct answer.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Tailwindcss</li>
              <li>Sass</li>
              <li>Axios</li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-28 lgl:gap-0 mt-10">
          <div className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Swiper
                modules={[Autoplay]}
                loop
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}>
                <SwiperSlide>
                  <Image
                    className="w-[full] h-full object-contain"
                    src={rsa_1}
                    alt="rsaPic"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-[full] h-full object-contain"
                    src={rsa_2}
                    alt="rsaPic"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-[full] h-full object-contain"
                    src={rsa_3}
                    alt="rsaPic"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-[full] h-full object-contain"
                    src={rsa_4}
                    alt="rsaPic"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <Link
              href={"https://github.com/alipsm/RSA-cryptosystem"}
              target="_blank">
              <h3 className="text-2xl font-bold underline">RSA Algorithm</h3>
            </Link>
            <p className="bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 rounded-md">
              You can encrypt your text using this algorithm and decrypt it
              using private and public keys.
              <br />
              This tool has the ability to automatically break the algorithm and
              find the simplest keys.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>C++</li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col xl:flex-row-reverse items-center justify-center gap-28 lgl:gap-0 mt-10">
          <div className="w-full xl:w-1/2 h-auto relative group">
            <div>
              <Swiper
                modules={[Autoplay]}
                loop
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}>
                <SwiperSlide>
                  <Image
                    className="w-[full] h-full object-contain"
                    src={cv_1}
                    alt="cvPic"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    className="w-[full] h-full object-contain"
                    src={cv_2}
                    alt="cvPic"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start text-right xl:-mr-16 z-10">
            <Link
              href={"https://alipsm.github.io/portfolio/#/home"}
              target="_blank">
              <h3 className="text-2xl font-bold underline">Basic Personal Resume</h3>
            </Link>
            <p className="bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 rounded-md">
              Responsive site for entering personal and professional information
              as well as introducing projects.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React</li>
              <li>NextJs</li>
              <li>TailwindCss</li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-28 lgl:gap-0 mt-10">
          <div>
            <Image
              className="w-[full] h-full object-contain"
              src={restaurant_1}
              alt="femgram"
            />
          </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <Link
              href={"https://github.com/alipsm/Restaurant_Management"}
              target="_blank">
              <h3 className="text-2xl font-bold underline">Restaurant Management</h3>
            </Link>
            <p className="bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 rounded-md">
              Windows application to manage restaurant and store accounting This
              program uses sql server to store information Some features of this
              application:
              <br />
              create,delete,update for admin and users/ setting admin access to
              the application / the amount of sales and working time of each
              admin / calculating the progress and performance of the restaurant
              compared to previous months / view the purchase history of each
              user / ...
              <br />
              And many, many other features
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>C#</li>
              <li>Sql</li>
              <li>Stimulsoft</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
