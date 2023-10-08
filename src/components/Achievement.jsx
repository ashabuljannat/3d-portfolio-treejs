import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { SectionDivider } from "../utils/styled-components";
import { AchivData } from "../constants/aboutData";
import { BGAnimation } from "./BGAnimation";

const Achievement = () => {
  const [showCarousel, setShowCarousel] = useState(false);

  const handleWindowResize = () => {
    if (window.innerWidth < 724) {
      setShowCarousel(true);
    } else {
      setShowCarousel(false);
    }
  };

  useEffect(() => {
    handleWindowResize();
    const handleResize = () => {
      handleWindowResize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="pb-20 ">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTitle}>my effort's outcome</p>
        <h2 className={styles.sectionHeadTitle}>Achievements</h2>
        <SectionDivider height="40px" width="275px" />
      </motion.div>

      <div
        className={`carousel-wrapper${showCarousel ? " show-carousel" : ""}${
          window.innerWidth >= 820 ? " disable-scroll" : ""
        }`}
      >
        <div className="carousel">
          {AchivData.map((card, index) => (
            <div className="carousel-item" key={index}>
              <div className="number">{card.number}</div>
              <div className="text">{card.text}</div>
            </div>
          ))}
        </div>
      </div>
      <BGAnimation />
    </div>
  );
};

export default SectionWrapper(Achievement, "achievement");
