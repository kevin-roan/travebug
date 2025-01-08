import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && (
        <div id="preloader" className="preloader">
          <div className="preloader-inner">
            <img
              src="/assets/img/travelbug_logo.png"
              alt="Logo"
              style={{ width: "60px" }}
            />
          </div>
          <div
            id="loader"
            className="th-preloader"
            style={{ marginTop: "75px" }}
          >
            <div className="animation-preloader">
              <div className="txt-loading">
                <span preloader-text="T" className="characters">
                  T{" "}
                </span>
                <span preloader-text="R" className="characters">
                  R{" "}
                </span>
                <span preloader-text="A" className="characters">
                  A{" "}
                </span>
                <span preloader-text="V" className="characters">
                  V{" "}
                </span>
                <span preloader-text="E" className="characters">
                  E{" "}
                </span>
                <span preloader-text="L" className="characters">
                  L{" "}
                </span>
                <span preloader-text=" " className="characters">
                  {" "}
                </span>
                <span preloader-text=" " className="characters">
                  {" "}
                </span>
                <span preloader-text="B" className="characters">
                  B{" "}
                </span>
                <span preloader-text="U" className="characters">
                  U{" "}
                </span>
                <span preloader-text="G" className="characters">
                  G{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header className="th-header header-layout1">
        <div className="header-top">
          <div className="container th-container">
            <div className="row justify-content-center justify-content-xl-between align-items-center">
              <div className="col-auto d-none d-md-block">
                <div className="header-links">
                  <ul>
                    <li className="d-none d-xl-inline-block">
                      <i className="fa-sharp fa-regular fa-location-dot"></i>
                      <span>Calicut, India, Kerala</span>
                    </li>
                    <li className="d-none d-xl-inline-block">
                      <i className="fa-regular fa-clock"></i>
                      <span>Sun to Friday: 8.00 am - 7.00 pm</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container th-container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a href="/">
                      <img
                        src="/assets/img/travelbug_logo.png"
                        alt="Travel Bug"
                        style={{ width: "100px" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto me-xl-auto">
                  <nav className="main-menu d-none d-xl-inline-block">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <Link to="/about">About us</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Holidays</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/destination">Beach Holidays</a>
                          </li>
                          <li>
                            <a href="/destination">Ayurveda Wellness</a>
                          </li>
                          <li>
                            <a href="/destination">Escorted Tour</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/contact">Visa Requirements</a>
                      </li>
                      <li>
                        <a href="/faq">FAQ</a>
                      </li>
                      <li>
                        <a href="/blog">Blog</a>
                      </li>
                      <li>
                        <a href="/contact">Contact us</a>
                      </li>
                    </ul>
                  </nav>
                  <button
                    type="button"
                    className="th-menu-toggle d-block d-xl-none"
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
