import { useState, useRef } from "react";
import "../App.scss";
import TimeLineTitle from "./TimeLine/TimeLineTitle";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoGithub,
  BiLogoYoutube,
  BiLogoMediumSquare,
} from "react-icons/bi";

const Anim = () => {
  const menuRef = useRef(null);

  return (
    <>
      {/* <div class="wrapper">
        <div class="static-txt">I'm a</div>
        <ul class="dynamic-txts">
          <li>
            <span>Developer</span>
          </li>
          <li>
            <span>Designer</span>
          </li>
          <li>
            <span>Content creator</span>
          </li>
          <li>
            <span>Freelancer</span>
          </li>
          <li>
            <span>Graphic Designer</span>
          </li>
        </ul>
      </div> */}

      <div className="social_btn">
        <a href="" className="hex_btn main">
          <div>+</div>
        </a>
        <a
          href="https://www.facebook.com/ashabuljannat.alif.14"
          className="hex_btn face"
        >
          <BiLogoFacebook />
        </a>
        <a
          href="https://www.facebook.com/ashabuljannat.alif.14"
          className="hex_btn youtube"
        >
          <BiLogoYoutube />
        </a>
        <a href="https://twitter.com/AlifAshabul" className="hex_btn twi">
          <BiLogoTwitter />
        </a>
        <a href="https://github.com/ashabuljannat" className="hex_btn git">
          <BiLogoGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ashabul-jannat-alif-13981b1ba/"
          className="hex_btn linkedin"
        >
          <BiLogoLinkedin />
        </a>
        <a
          href="https://www.facebook.com/ashabuljannat.alif.14"
          className="hex_btn medium"
        >
          <BiLogoMediumSquare />
        </a>
      </div>

      <div className="social_menu" ref={menuRef}>
        <div
          className="social_toggle"
          onClick={() => {
            menuRef.current.classList.toggle("active");
          }}
        >
          <span>+</span>
        </div>
        <span className="icon social_fb_li">
          <a href="#" className="social_fb">
            <BiLogoFacebook />
          </a>
        </span>
        <span className="icon social_ln_li">
          <a href="#" className="social_ln">
            <BiLogoLinkedin />
          </a>
        </span>
        <span className="icon social_yt_li">
          <a href="#" className="social_yt">
            <BiLogoYoutube />
          </a>
        </span>
        <span className="icon social_gt_li">
          <a href="#" className="social_gt">
            <BiLogoGithub />
          </a>
        </span>
      </div>
    </>
  );
};

export default Anim;
