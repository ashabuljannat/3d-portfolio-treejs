import { FiPhoneCall, FiSend } from "react-icons/fi";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer mb-5">
          <div className="footer__address">
            <h1 className="footer__logo">ashabul jannat alif</h1>
            <h2 className="mt-4 text-lg">Address</h2>
            <p className="text-[#99d825]">
              Dhamrai, Dhaka, Bangladesh
              <br />
              Postcode: 1350
            </p>
            <div className="flex">
              <a href="mailto:@2alifashabuljanant@gmail.com">
                <button className="facebook">
                  <span>
                    <FiSend className="" color="#f33d3d" />
                  </span>
                  Email Me
                </button>
              </a>
              <a href="tel:+8801932796080">
                <button className="facebook">
                  <span>
                    <FiPhoneCall className="" color="#4de979" />
                  </span>
                  Call Me
                </button>
              </a>
            </div>
          </div>

          <ul className="footer__items">
            <div className="">
              <h2 className="nav__title">Media</h2>
              <ul className="nav__ul">
                <li>Facebook</li>
                <li>Youtube</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>

            <div className="">
              <h2 className="nav__title">Technology</h2>
              <ul className="nav__ul nav__ul--extra">
                <li>Front-end Development</li>
                <li>Back-end Development</li>
                <li>Full stack Development</li>
                <li>MERN Development</li>
                <li>App Development</li>
                <li>React native Development</li>
                <li>React native Development</li>
              </ul>
            </div>

            <div className="">
              <h2 className="nav__title">Legal</h2>
              <ul className="nav__ul">
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Sitemap</li>
              </ul>
            </div>
          </ul>
        </div>
        <p className="text-[#999]">
          &copy; {new Date().getFullYear()} Ashabul Jannat Alif All Rights
          Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
