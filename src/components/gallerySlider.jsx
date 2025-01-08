import React, { useState, useEffect } from "react";

const GallerySlider = ({ data }) => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "/assets/js/vendor/jquery-3.6.0.min.js";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src = "/assets/js/main.js";
    script2.async = true;

    document.body.appendChild(script2);
    document.body.appendChild(script1);

    return () => {
      document.body.removeChild(script2);
      document.body.removeChild(script1);
    };
  }, []);
  return (
    <div className="gallery-area ">
      <div className="container th-container">
        <div className="title-area text-center">
          <span className="sub-title">{data?.gallery_title}</span>
          <h2 className="sec-title">{data?.gallery_heading}</h2>
        </div>
        <div className="row gy-10 gx-10 justify-content-center align-items-center">
          <div className="col-md-6 col-lg-2">
            <div className="gallery-card">
              <div className="box-img global-img">
                <a className="popup-image" href={data?.gallery[0].image}>
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus"></i>
                  </div>
                  <img src={data?.gallery[0].image} alt="gallery image" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="gallery-card">
              <div className="box-img global-img">
                <a href={data?.gallery[1].image} className="popup-image">
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus"></i>
                  </div>
                  <img src={data?.gallery[1].image} alt="gallery image" />
                </a>
              </div>
            </div>
            <div className="gallery-card">
              <div className="box-img global-img">
                <a href={data?.gallery[2].image} className="popup-image">
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus"></i>
                  </div>

                  <img src={data?.gallery[2].image} alt="gallery image" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="gallery-card">
              <div className="box-img global-img">
                <a href={data?.gallery[3].image} className="popup-image">
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus"></i>
                  </div>

                  <img src={data?.gallery[3].image} alt="gallery image" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="gallery-card">
              <div className="box-img global-img">
                <a href={data?.gallery[4].image} className="popup-image">
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus"></i>
                  </div>

                  <img src={data?.gallery[4].image} alt="gallery image" />
                </a>
              </div>
            </div>
            <div className="gallery-card">
              <div className="box-img global-img">
                <a href={data?.gallery[7].image} className="popup-image">
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus"></i>
                  </div>
                  <img src={data?.gallery[7].image} alt="gallery image" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="gallery-card">
              <div className="box-img global-img">
                <a href={data?.gallery[6].image} className="popup-image">
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus"></i>
                  </div>

                  <img src={data?.gallery[6].image} alt="gallery image" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="shape-mockup  d-none d-xl-block"
        data-top="-25%"
        data-left="0%"
      >
        <img src="assets/img/shape/line.png" alt="shape" />
      </div>
      <div
        className="shape-mockup movingX d-none d-xl-block"
        data-top="30%"
        data-left="3%"
      >
        <img
          className="gmovingX"
          src="assets/img/shape/shape_4.png"
          alt="shape"
        />
      </div>
    </div>
  );
};

export default GallerySlider;
