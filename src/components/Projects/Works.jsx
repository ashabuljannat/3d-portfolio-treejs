import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionDivider, SectionText } from "../../utils/styled-components";
import Tilt from "react-tilt";
import "./Work.scss";
import { BiSolidVideos, BiLogoGithub } from "react-icons/bi";
import Modal from "./Modal";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  video_link,
  site_link,
}) => {
  const [modal, setModal] = useState(false);
  const tiltRef = useRef(null);
  return (
    <>
      <div>
        <Tilt
          ref={tiltRef}
          options={{
            max: 45,
            scale: 1.1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full -z-10"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="mt-5">
            <div className="flex justify-between">
              <h3 className="text-white font-bold text-[24px]  hover:text-cyan-400">
                <a href={site_link} target="_blank">
                  {name}
                </a>
              </h3>
              <div className="flex">
                <BiSolidVideos
                  className="w-6 h-6 mr-4 cursor-pointer"
                  onClick={() => setModal(true)}
                />
                <a href={source_code_link} target="_blank">
                  <BiLogoGithub className="w-6 h-6 mr-3" />
                </a>
              </div>
            </div>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <p key={index} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>

        {modal && <Modal video_link={video_link} setModal={setModal} />}
      </div>
    </>
  );
};

const Works = () => {
  let tabs = [
    { id: "full", label: "Full Stack" },
    { id: "react", label: "Front end(React)" },
    { id: "html", label: "Front end(HTML)" },
    { id: "rn", label: "React Native" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [filterProjects, setFilterProjects] = useState([]);

  useEffect(() => {
    const filterProject = projects.filter(
      (project) => project.stack === activeTab
    );
    setFilterProjects(filterProject);
  }, [activeTab]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTitle}>Apply of skills</p>
        <h2 className={styles.sectionHeadTitle}>
          <span className={styles.sectionTag}> &lt;h3&gt; </span>Projects
          <span className={styles.sectionTag}> &lt;/h3&gt; </span>
        </h2>
        <SectionDivider height="40px" width="175px" />
      </motion.div>

      <div className="w-full flex">
        <motion.div variants={fadeIn("", "", 0.1, 1)} className="max-w-5xl">
          <SectionText>
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </SectionText>
        </motion.div>
      </div>

      <div className="flex gap-10 mt-5 ml-[15%]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-white/60"
            } text-lg font-medium px-3 py-1.5 relative`}
          >
            {activeTab === tab.id && (
              <motion.div
                initial={{ rotate: 100 }}
                animate={{ rotate: 0 }}
                layoutId="bubble"
                className="absolute inset-0 bg-purple-600 rounded-full -z-10"
                transition={{ type: "spring", duration: 2 }}
              ></motion.div>
            )}

            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-7">
        {filterProjects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
