import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Xaankoo from "./works/Xaankoo";
import Freelancer from "./works/Freelancer";

const Experience = () => {
  const [freelancer, setFreelancer] = useState(true)
  const [xaankoo, setXaankoo] = useState(false)
  const [lopwork, setLopwork] = useState(false)

  const selectRP = () => {
    setFreelancer(true)
    setXaankoo(false)
    setLopwork(false)
  }

  const selectNativshark = () => {
    setFreelancer(false);
    setXaankoo(true);
    setLopwork(false);
  };

  const selectLopworks = () => {
    setFreelancer(false);
    setXaankoo(false);
    setLopwork(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title='"Where I have worked' />

      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={selectRP}
            className={`border-l-2 ${
              freelancer ? "border-l-textGreen" : "border-l-hoverColor"
            } text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Freelancer
          </li>
          <li
            onClick={selectNativshark}
            className={`border-l-2 ${
              xaankoo ? "border-l-textGreen" : "border-l-hoverColor"
            } text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Xaankoo
          </li>
          <li
            onClick={selectLopworks}
            className={`border-l-2 ${
              lopwork ? "border-l-textGreen" : "border-l-hoverColor"
            } text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            
          </li>
        </ul>
        {freelancer && <Freelancer />}
        {xaankoo && <Xaankoo />}
      </div>
    </section>
  );
};

export default Experience;
