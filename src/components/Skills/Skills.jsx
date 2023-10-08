import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { skills } from "../../constants";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionDivider, SectionText } from "../../utils/styled-components";
import { useState } from "react";
import "./Skills.scss"

const Skills = () => {
  const [tachState, setTechState] = useState([]);
  const click = (tech) => {
    if (tech.allTech) {
      setTechState(tech.allTech);
    } else {
      setTechState([]);
    }
  };
  return (
    <>
      <div className="relative">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubTitle}>Tried then learned</p>
          <h2 className={styles.sectionHeadTitle}>Skills</h2>
          <SectionDivider height="40px" width="125px" color />
          <motion.div variants={fadeIn("", "", 0.1, 1)} className="max-w-5xl">
            <SectionText>
              I've learned and worked with a range of huge technologies in the
              web & app development world. From scratch. UI , Front-end,
              Back-end, Database, authentication, security, debugging tools.            
            </SectionText>
          </motion.div>
        </motion.div>

        <div className="flex flex-row flex-wrap justify-center gap-10 relative">
          {skills.map((technology, index) => (
            <div className="w-20 h-20 cursor-grab" key={index}>
              <motion.div
                whileDrag={{ scale: 0.8 }}
                whileTap={() => click(technology)}
                drag
                dragConstraints={{
                  top: -50,
                  left: -30,
                  right: -30,
                  bottom: 100,
                }}
              >
                <BallCanvas icon={technology.icon} />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-[500px] h-[400px] left-[5%] top-[50px]">
        {tachState.map((technologyName, index) => (
          <div className="" key={index}>
            <motion.p
              initial={{ x: 0 }}
              animate={{ x: index * 50 }}
              className="letter"
              transition={{ duration: 2.5 }}
            >
              {technologyName}
            </motion.p>
          </div>
        ))}
      </div>
      <div className="stars">
        <div className="star starWhite"></div>
        <div className="star starRed"></div>
        <div className="star starYellow"></div>
        <div className="star starWhite"></div>
        <div className="star starYellow"></div>
        <div className="star starRed"></div>
        <div className="star starYellow"></div>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
