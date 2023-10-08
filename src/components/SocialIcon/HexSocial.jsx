import { useRef } from "react";
import "./HexSocial.scss";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoYoutube,
} from "react-icons/bi";

const HexSocial = () => {
  const menuRef = useRef(null);
  return (
    <>
      <div className="social_menu2" ref={menuRef}>
        <div
          className="social_toggle2"
          onClick={() => {
            menuRef.current.classList.toggle("active2");
          }}
        >
          <span>+</span>
        </div>
        <span className="icon2">
          <a
            href="https://www.facebook.com/ashabuljannat.alif.14"
            className="social_fb2"
            target="_blank"
          >
            <BiLogoFacebook />
          </a>
        </span>
        <span className="icon2">
          <a
            href="https://www.linkedin.com/in/ashabul-jannat-alif-13981b1ba/"
            className="social_ln2"
            target="_blank"
          >
            <BiLogoLinkedin />
          </a>
        </span>
        <span className="icon2">
          <a
            href="https://www.youtube.com/@ashabuljannatalif"
            className="social_yt2"
            target="_blank"
          >
            <BiLogoYoutube />
          </a>
        </span>
        <span className="icon2">
          <a
            href="https://github.com/ashabuljannat"
            className="social_gt2"
            target="_blank"
          >
            <BiLogoGithub />
          </a>
        </span>
      </div>
    </>
  );
};

export default HexSocial;
