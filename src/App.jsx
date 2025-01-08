import { useEffect, useState } from "react";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import "./App.css";
import "./sass/style.scss";
import "./Swiper-Bundle.css";
import Footer from "./components/footer.jsx";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <Header />
      {!isMobile && (
        <AnimatedCursor
          innerSize={14}
          outerSize={32}
          color="28, 168, 203"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={2}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      )}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
