import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-4`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-28 md:h-[220px] violet-gradient" />
        </div>

        <div className="">
          <h1
            className={`${styles.heroHeadText} text-white`}
            style={{ fontFamily: "Dancing Script" }}
          >
            Hi, I'm{" "}
            <span className="text-[#80d6f7]">
              <TypeAnimation
                sequence={[
                  "A",
                  100,
                  "As",
                  100,
                  "Ash",
                  100,
                  "Asha",
                  100,
                  "Ashab",
                  100,
                  "Ashabu",
                  100,
                  "Ashabul ",
                  100,
                  "Ashabul J",
                  100,
                  "Ashabul Ja",
                  100,
                  "Ashabul Jan",
                  100,
                  "Ashabul Jann",
                  100,
                  "Ashabul Janna",
                  100,
                  "Ashabul Jannat",
                  100,
                  "Ashabul Jannat ",
                  100,
                  "Ashabul Jannat A",
                  100,
                  "Ashabul Jannat Al",
                  100,
                  "Ashabul Jannat Ali",
                  100,
                  "Ashabul Jannat Alif",
                ]}
                cursor={true}
                repeat={0}
              />
            </span>
          </h1>
          <div
            className={`${styles.heroSubText} text-white animate__animated animate__bounceInLeft animate__delay-2s`}
          >
            <span className={styles.sectionTag}> &lt;View&gt; </span>
            RN Developer
            <span className={styles.sectionTag}> &lt;/View&gt; </span>
            <div className="flex flex-row items-center">
              <div className="w-3 h-3  bg-[#915EFF]" />
              <div className="h-1 w-20 violet-gradient" />
            </div>
          </div>
          <div
            className={`${styles.heroSubText} text-white animate__animated animate__bounceInLeft animate__delay-3s`}
          >
            <span className={styles.sectionTag}> &lt;h2&gt; </span>
            MERN Developer
            <span className={styles.sectionTag}> &lt;/h2&gt; </span>
            <div className="flex flex-row items-center">
              <div className="w-3 h-3  bg-[#915EFF]" />
              <div className="h-1 w-24 violet-gradient" />
            </div>
          </div>
          <div
            className={`${styles.heroSubText} text-white animate__animated animate__bounceInLeft animate__delay-4s`}
          >
            <span className={styles.sectionTag}> &lt;$&gt; </span>
            Business Analytics
            <span className={styles.sectionTag}> &lt;/$$&gt; </span>
            <div className="flex flex-row items-center">
              <div className="w-3 h-3  bg-[#915EFF]" />
              <div className="h-1 w-28 violet-gradient" />
            </div>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
