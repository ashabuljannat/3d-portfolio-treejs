import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Navbar,
  About,
  Experience,
  Skills,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
  Services,
  HexSocial,
  Achievement,
  Footer,
} from "./components";
import Anim from "./components/Anim";
import ScrollToTop from "react-scroll-to-top";
import { BGAnimation } from "./components/BGAnimation";

function App() {
  const btn = {
    borderRadius: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <ScrollToTop smooth top={300} color="aqua" style={btn} />
          <BGAnimation />
          {/* <Anim /> */}
          <HexSocial />
          <About />
          <Skills />
          <Experience />
          <Works />
          <Services />
          <Achievement />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
