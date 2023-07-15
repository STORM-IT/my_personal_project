import { motion } from "framer-motion";
import Link from "next/link";
import { TiArrowForward } from "react-icons/ti";

const Xaankoo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Front-end Developer{" "}
        <Link href={"https://xaankoo.com/"} target="_blank">

        <span className="text-textGreen tracking-wide">@Xaankoo</span>
        </Link>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        May 2022 - Aprill 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textGreen">
            <TiArrowForward />
          </span>
          Developin Project with MVC architecture
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textGreen">
            <TiArrowForward />
          </span>
          Teaching technologies to team members
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textGreen">
            <TiArrowForward />
          </span>
          Interview with job applicants
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textGreen">
            <TiArrowForward />
          </span>
          Fix front-end team bugs
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textGreen">
            <TiArrowForward />
          </span>
          Implementation of the overall project structure
        </li>
      </ul>
    </motion.div>
  );
};

export default Xaankoo;
