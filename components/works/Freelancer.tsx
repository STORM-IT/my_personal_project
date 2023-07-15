import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Freelancer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Programmer{" "}
        <span className="text-textGreen tracking-wide"></span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Aprill 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textGreen">
            <TiArrowForward />
          </span>
          Completion of various academic projects
        </li>
        <li className="text-base flex items-center gap-2 text-textDark">
          <span className="text-textGreen">
            <TiArrowForward />
          </span>
          Solving the problem of university students
        </li>
      </ul>
    </motion.div>
  );
};

export default Freelancer;
