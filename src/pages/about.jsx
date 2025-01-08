import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchAbout } from "../services/api";
import { Link, useNavigate } from "react-router-dom";

export default function About() {
  const [aboutInfo, setAboutInfo] = useState("");
  const [error, setError] = useState(null);

  const navigate=useNavigate()

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/about`)
      .then((response) => {
        setAboutInfo(response.data.data);
        console.log("api response", response.data);
        console.log("about info data", response.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setError(error);
      });
  }, []);

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <div
        className="breadcumb-wrapper "
        data-bg-src="assets/img/bg/breadcumb-bg.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">About Travel Bug</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="home-travel.html">Home</a>
              </li>
              <li>About Travel Bug</li>
            </ul>
          </div>
        </div>
      </div>{" "}
      <div
        className="about-area position-relative overflow-hidden overflow-hidden space"
        id="about-sec"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="img-box3">
                <div className="img1">
                  <img src="assets/img/normal/about_3_1.jpg" alt="About" />
                </div>
                <div className="img2">
                  <img src="assets/img/normal/about_3_2.jpg" alt="About" />
                </div>
                <div className="img3 movingX">
                  <img src="assets/img/normal/about_3_3.jpg" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="ps-xl-4">
                <div className="title-area mb-20">
                  <span className="sub-title style1 ">
                    Welcome To Travel Bug India
                  </span>
                  <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                    {aboutInfo && aboutInfo.welcome_message.title}
                  </h2>
                </div>

                <p className="pe-xl-5">
                  {aboutInfo && aboutInfo.welcome_message.introduction}
                </p>
                <h4 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                  Why Choose Travel Bug India
                </h4>
                <p className="mb-30 pe-xl-5">
                  {aboutInfo && aboutInfo.why_choose_travel_bug.introduction}
                </p>
                <p className="mb-30 pe-xl-5">
                  {aboutInfo &&
                    aboutInfo.why_choose_travel_bug.special_features
                      .description}
                </p>
                <div className="about-item-wrap">
                  {aboutInfo &&
                    aboutInfo.why_choose_travel_bug.special_features.features.map(
                      (item, index) => (
                        <div className="about-item style2" key={index}>
                          <div className="about-item_img">
                            <img src="assets/img/icon/about_1_1.svg" alt="" />
                          </div>
                          <div className="about-item_centent">
                            <h5 className="box-title">{item.title}</h5>
                            <p className="about-item_text">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      )
                    )}
                </div>
                <div className="mt-35">
                  <a href="contact.html" className="th-btn style3 th-icon">
                    Contact With Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="shape-mockup movingX d-none d-xxl-block"
          data-top="4%"
          data-left="2%"
        >
          <img src="assets/img/shape/shape_2_1.png" alt="shape" />
        </div>
        <div
          className="shape-mockup jump d-none d-xxl-block"
          data-top="28%"
          data-right="5%"
        >
          <img src="assets/img/shape/shape_2_2.png" alt="shape" />
        </div>
        <div
          className="shape-mockup spin d-none d-xxl-block"
          data-bottom="18%"
          data-left="2%"
        >
          <img src="assets/img/shape/shape_2_3.png" alt="shape" />
        </div>
        <div
          className="shape-mockup movixgX d-none d-xxl-block"
          data-bottom="18%"
          data-right="2%"
        >
          <img src="assets/img/shape/shape_2_4.png" alt="shape" />
        </div>
      </div>
      <section
        className="position-relative overflow-hidden space-bottom"
        id="destination-sec"
      >
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Services We Offer</span>
            <h2 className="sec-title">
              {aboutInfo && aboutInfo.travel_packages.title}
            </h2>

            <p className="mb-30 pe-xl-5">
              {aboutInfo &&
                aboutInfo.travel_packages.package_types.introduction}
            </p>
          </div>
          {/* <div className="row gy-4 gx-4">
            {aboutInfo &&
              aboutInfo.travel_packages.package_types.map((item) => (
                <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
                  <div className="destination-item th-ani">
                    <div className="destination-item_img global-img">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="destination-content">
                      <h3 className="box-title">
                        <a href="service-details.html">{item.title}</a>
                      </h3>
                      <p className="destination-text">{item.description}</p>
                      <a href="contact.html" className="th-btn style4 th-icon">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div> */}

          <div className="row gy-4 gx-4">
            {aboutInfo &&
              aboutInfo.travel_packages.package_types.map((item) => (
                <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
                  <div className="card">
                    <div className="card-img">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">
                        <a>{item.title}</a>
                      </h3>
                      <p className="card-text">
                        {item.description.length > 150 ? (
                          <>
                            {item.description.substring(0, 150)}...
                            <a className="read-more" onClick={()=>navigate(`/tour_packages/${item.id}`)}>Read More</a>
                          </>
                        ) : (
                          item.description
                        )}
                      </p>
                      <div className="pag">
                        <Link
                          to={`/tour_packages/${item.id}`}
                          className="th-btn style4 th-icon"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section className="discover-india-section-new">
        <div className="container">
          <div className="title-area text-center">
            <h2 className="sub-title">Discover India</h2>
            <h4 className="sec-title">
              {aboutInfo && aboutInfo.discover_india.title}
            </h4>
          </div>
          <p className="description">
            {aboutInfo && aboutInfo.discover_india.description}
          </p>
          <div className="contact-us text-center">
            <h4 className="sub-title">
              {aboutInfo && aboutInfo.contact_us.title}
            </h4>
            <p className="introduction">
              {aboutInfo && aboutInfo.contact_us.introduction}
            </p>
          </div>
        </div>
      </section>
      <div className="booking-form-container">
  <form
    action="mail.php"
    method="POST"
    className="contact-form style2 ajax-contact"
  >
    <h3 className="sec-title mb-30 text-capitalize">Book a Tour</h3>
    <div className="row">
      <div className="col-12 form-group position-relative">
        <input
          type="text"
          className="form-control"
          name="name"
          id="name3"
          placeholder="First Name"
        />
        <img src="assets/img/icon/user.svg" alt="User Icon" className="input-icon" />
      </div>
      <div className="col-12 form-group position-relative">
        <input
          type="email"
          className="form-control"
          name="email3"
          id="email3"
          placeholder="Your Mail"
        />
        <img src="assets/img/icon/mail.svg" alt="Mail Icon" className="input-icon" />
      </div>
      <div className="form-group col-12">
        <select
          name="subject"
          id="subject"
          className="form-select nice-select"
        >
          <option value="Select Tour Type" disabled>
            Select Tour Type
          </option>
          <option value="Africa Adventure">Africa Adventure</option>
          <option value="Africa Wild">Africa Wild</option>
          <option value="Asia">Asia</option>
          <option value="Scandinavia">Scandinavia</option>
          <option value="Western Europe">Western Europe</option>
        </select>
      </div>
      <div className="form-group col-12 position-relative">
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="4"
          className="form-control"
          placeholder="Your Message"
        ></textarea>
        <img src="assets/img/icon/chat.svg" alt="Chat Icon" className="textarea-icon" />
      </div>
      <div className="form-btn col-12 mt-24 text-center">
        <button type="submit" className="th-btn style3">
          Send Message
          <img src="assets/img/icon/plane.svg" alt="Send Icon" />
        </button>
      </div>
    </div>
    <p className="form-messages mb-0 mt-3"></p>
  </form>
</div>

    </>
  );
}
