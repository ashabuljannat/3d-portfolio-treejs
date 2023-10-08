import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionDivider, SectionText } from "../utils/styled-components";
import TimeLineTitle from "./TimeLine/TimeLineTitle";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTitle}>
          Welcome To My Personal Portfolio
        </p>
        <h2 className={styles.sectionTag}>&lt;h1&gt;</h2>
        <h2 className={`${styles.sectionHeadTitle},  `}>Introduce Myself.</h2>
        <SectionDivider height="50px" width="375px" />
      </motion.div>

      <div className="relative flex">
        <div className="relative z-10">
          <motion.div variants={fadeIn("", "", 0.1, 1)} className="max-w-3xl">
            <SectionText>
              I'm a skilled software developer with experience in TypeScript and
              JavaScript, and expertise in frameworks like React, Node.js. I'm a
              quick learner and collaborate closely with clients to create
              efficient, scalable, and user-friendly solutions that solve
              real-world problems. Let's work together to bring your ideas to
              life!
              <br />
              My responsibility is Completion of business related tasks by
              completing management, accounting, finance, marketing to achieve
              the goals objectives of the company. Through the supply chain by
              using SWAT analysis to avoid threats and exploit opportunities. I
              have black-belt from Programming-Hero Full stack web development
              course in MERN stack. my passion is programming. although my study
              in BBA in Management. then i need a job for start my programming
              development career.
            </SectionText>
          </motion.div>
          <div className="absolute z-10 guard"></div>
        </div>

        <motion.div
          initial={{ x: 500, scale: 0 }}
          animate={{
            scale: 1,
            x: -65,
            y: -100,
            rotate: 15,
            transition: { linear: true, duration: 0.5 },
          }}
        >
          <div className="w-[500px] h-[400px] object-contain absolute -z-10">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ashabuljannat55.appspot.com/o/portfolio-treejs%2Fassets%2Fprofile.jpg?alt=media&token=7b9bc944-fa48-4208-bb75-7561732273d1&_gl=1*6x98pd*_ga*MjY1MTgwODguMTY1NjUxNzA5NA..*_ga_CW55HF8NVT*MTY5Njc1MDk3NC40OC4xLjE2OTY3NTE5NzEuNjAuMC4w"
              alt="web-development"
              className="w-[500px] h-[400px] object-contain absolute"
            />
          </div>
        </motion.div>
      </div>
      <h2 className={styles.sectionTag}>&lt;/h1&gt;</h2>
      <TimeLineTitle />
    </>
  );
};

export default SectionWrapper(About, "about");
