import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import { SectionDivider } from "../utils/styled-components";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const topic = `⚡ ${subject}`;
    const body = `Name: ${name}
    Email: ${email}
    Message: ${message}`;

    const mailtoLink = `mailto:2alifashabuljannat@gmail.com?subject=${encodeURIComponent(
      topic
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setLoading(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <div className={`h-full flex xl:flex-row flex-col-reverse gap-10`}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl mt-6 h-full"
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubTitle}>Get in touch</p>
            <h2 className={styles.sectionHeadTitle}>Contact</h2>
            <SectionDivider height="35px" width="155px" />
          </motion.div>

          <form
            onSubmit={handleFormSubmit}
            className="mt-2 flex flex-col gap-3 "
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Name</span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="What's your good name?"
                className={styles.contactInput}
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your email</span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="What's your email address?"
                className={styles.contactInput}
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Subject</span>
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="What's your message topic?"
                className={styles.contactInput}
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Message</span>
              <textarea
                rows={4}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What you want to say?"
                className={styles.contactInput}
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
        </div>
        {/* <svg
          className="relative -bottom-16"
          id="wave"
          viewBox="0 0 1240 150"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(247, 133, 253, 1)" offset="0%"></stop>
              <stop stopColor="rgba(255, 179, 11, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: "1" }}
            fill="url(#sw-gradient-0)"
            d="M0,136L30,133.2C60,130,120,125,180,127.5C240,130,300,142,360,127.5C420,113,480,74,540,62.3C600,51,660,68,720,85C780,102,840,119,900,110.5C960,102,1020,68,1080,56.7C1140,45,1200,57,1260,56.7C1320,57,1380,45,1440,56.7C1500,68,1560,102,1620,110.5C1680,119,1740,102,1800,102C1860,102,1920,119,1980,110.5C2040,102,2100,68,2160,68C2220,68,2280,102,2340,104.8C2400,108,2460,79,2520,62.3C2580,45,2640,40,2700,42.5C2760,45,2820,57,2880,53.8C2940,51,3000,34,3060,25.5C3120,17,3180,17,3240,14.2C3300,11,3360,6,3420,5.7C3480,6,3540,11,3600,31.2C3660,51,3720,85,3780,107.7C3840,130,3900,142,3960,121.8C4020,102,4080,51,4140,34C4200,17,4260,34,4290,42.5L4320,51L4320,170L4290,170C4260,170,4200,170,4140,170C4080,170,4020,170,3960,170C3900,170,3840,170,3780,170C3720,170,3660,170,3600,170C3540,170,3480,170,3420,170C3360,170,3300,170,3240,170C3180,170,3120,170,3060,170C3000,170,2940,170,2880,170C2820,170,2760,170,2700,170C2640,170,2580,170,2520,170C2460,170,2400,170,2340,170C2280,170,2220,170,2160,170C2100,170,2040,170,1980,170C1920,170,1860,170,1800,170C1740,170,1680,170,1620,170C1560,170,1500,170,1440,170C1380,170,1320,170,1260,170C1200,170,1140,170,1080,170C1020,170,960,170,900,170C840,170,780,170,720,170C660,170,600,170,540,170C480,170,420,170,360,170C300,170,240,170,180,170C120,170,60,170,30,170L0,170Z"
          ></path>
          <defs>
            <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(243, 106, 62, 1)" offset="0%"></stop>
              <stop stopColor="rgba(213, 249, 121, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 50px)", opacity: "0.9" }}
            fill="url(#sw-gradient-1)"
            d="M0,34L30,36.8C60,40,120,45,180,62.3C240,79,300,108,360,113.3C420,119,480,102,540,93.5C600,85,660,85,720,79.3C780,74,840,62,900,59.5C960,57,1020,62,1080,79.3C1140,96,1200,125,1260,124.7C1320,125,1380,96,1440,90.7C1500,85,1560,102,1620,102C1680,102,1740,85,1800,85C1860,85,1920,102,1980,107.7C2040,113,2100,108,2160,87.8C2220,68,2280,34,2340,36.8C2400,40,2460,79,2520,85C2580,91,2640,62,2700,56.7C2760,51,2820,68,2880,73.7C2940,79,3000,74,3060,82.2C3120,91,3180,113,3240,121.8C3300,130,3360,125,3420,104.8C3480,85,3540,51,3600,48.2C3660,45,3720,74,3780,79.3C3840,85,3900,68,3960,70.8C4020,74,4080,96,4140,110.5C4200,125,4260,130,4290,133.2L4320,136L4320,170L4290,170C4260,170,4200,170,4140,170C4080,170,4020,170,3960,170C3900,170,3840,170,3780,170C3720,170,3660,170,3600,170C3540,170,3480,170,3420,170C3360,170,3300,170,3240,170C3180,170,3120,170,3060,170C3000,170,2940,170,2880,170C2820,170,2760,170,2700,170C2640,170,2580,170,2520,170C2460,170,2400,170,2340,170C2280,170,2220,170,2160,170C2100,170,2040,170,1980,170C1920,170,1860,170,1800,170C1740,170,1680,170,1620,170C1560,170,1500,170,1440,170C1380,170,1320,170,1260,170C1200,170,1140,170,1080,170C1020,170,960,170,900,170C840,170,780,170,720,170C660,170,600,170,540,170C480,170,420,170,360,170C300,170,240,170,180,170C120,170,60,170,30,170L0,170Z"
          ></path>
          <defs>
            <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(243, 106, 62, 1)" offset="0%"></stop>
              <stop stopColor="rgba(255, 179, 11, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 100px)", opacity: "0.8" }}
            fill="url(#sw-gradient-2)"
            d="M0,0L30,22.7C60,45,120,91,180,110.5C240,130,300,125,360,121.8C420,119,480,119,540,116.2C600,113,660,108,720,93.5C780,79,840,57,900,59.5C960,62,1020,91,1080,96.3C1140,102,1200,85,1260,68C1320,51,1380,34,1440,28.3C1500,23,1560,28,1620,45.3C1680,62,1740,91,1800,96.3C1860,102,1920,85,1980,87.8C2040,91,2100,113,2160,102C2220,91,2280,45,2340,28.3C2400,11,2460,23,2520,25.5C2580,28,2640,23,2700,25.5C2760,28,2820,40,2880,59.5C2940,79,3000,108,3060,119C3120,130,3180,125,3240,113.3C3300,102,3360,85,3420,70.8C3480,57,3540,45,3600,45.3C3660,45,3720,57,3780,65.2C3840,74,3900,79,3960,73.7C4020,68,4080,51,4140,53.8C4200,57,4260,79,4290,90.7L4320,102L4320,170L4290,170C4260,170,4200,170,4140,170C4080,170,4020,170,3960,170C3900,170,3840,170,3780,170C3720,170,3660,170,3600,170C3540,170,3480,170,3420,170C3360,170,3300,170,3240,170C3180,170,3120,170,3060,170C3000,170,2940,170,2880,170C2820,170,2760,170,2700,170C2640,170,2580,170,2520,170C2460,170,2400,170,2340,170C2280,170,2220,170,2160,170C2100,170,2040,170,1980,170C1920,170,1860,170,1800,170C1740,170,1680,170,1620,170C1560,170,1500,170,1440,170C1380,170,1320,170,1260,170C1200,170,1140,170,1080,170C1020,170,960,170,900,170C840,170,780,170,720,170C660,170,600,170,540,170C480,170,420,170,360,170C300,170,240,170,180,170C120,170,60,170,30,170L0,170Z"
          ></path>
        </svg> */}
     
    </>
  );
};

export default SectionWrapper(Contact, "contact");
