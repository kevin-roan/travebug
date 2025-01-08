import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Contact() {
  const [contactInfo, setContactInfo] = useState([]);
  const [packageListType, setPackageListType] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    packageType: "",
    message: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactInformation = () => {
      axios
        .get(`${import.meta.env.VITE_API_URL}/contact_us`)
        .then((response) => {
          setContactInfo(response.data.data.addresses);
        })
        .catch((error) => {
          console.log("Error fetching data", error);
          setError(error);
        });
    };
    fetchContactInformation();
    const fetchPackageList = () => {
      axios
        .get(`https://iamanas.in/travel_bug/web_api/package_type_list`)
        .then((response) => {
          setPackageListType(response.data.data);
        })
        .catch((error) => {
          setError(error.message);
          console.log(error, "erro");
        });
    };
    fetchPackageList();
  }, []);
  if (error) {
    <div className="container">{error}</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://iamanas.in/travel_bug/web_api/insert_contact_us`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (response.status) {
        setFormData({
          username: "",
          email: "",
          package_type_id: "",
          message: "",
        });
        alert("Message sent successfully!");
      }
    } catch (error) {
      setError(error.message);
      console.log("Error submitting form:", error.request);
      alert(`Sorry try again later, ${error}`);
    }
  };

  return (
    <>
      <div
        className="breadcumb-wrapper "
        data-bg-src="assets/img/bg/breadcumb-bg.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Contact Us</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="home-travel.html">Home</a>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="space">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Get In Touch</span>
            <h2 className="sec-title">Our Contact Information</h2>
          </div>
          <div className="row gy-4 justify-content-center">
            {contactInfo &&
              contactInfo.map((address, index) => (
                <div className="col-xl-4 col-lg-6" key={index}>
                  <div className="about-contact-grid style2 h-100">
                    <div className="about-contact-icon">
                      <img src="assets/img/icon/location-dot2.svg" alt="" />
                    </div>
                    <div className="about-contact-details">
                      <h6 className="box-title">{address.title}</h6>
                      <p className="about-contact-details-text">
                        {address.address.line_1}
                      </p>
                      <p className="about-contact-details-text">
                        {address.address.line_2}
                      </p>
                      <p className="about-contact-details-text">
                        {address.address.line_3}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            {/* 
            <div className="col-xl-4 col-lg-6">
              <div className="about-contact-grid">
                <div className="about-contact-icon">
                  <img src="assets/img/icon/call.svg" alt="" />
                </div>
                <div className="about-contact-details">
                  <h6 className="box-title">Phone Number</h6>
                  <p className="about-contact-details-text">
                    <a href="tel:919037317949">+91 90373 17949</a>
                  </p>
                  <p className="about-contact-details-text">
                    <a href="tel:919037317949">+91 90373 17949</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="about-contact-grid">
                <div className="about-contact-icon">
                  <img src="assets/img/icon/mail.svg" alt="" />
                </div>
                <div className="about-contact-details">
                  <h6 className="box-title">Email Address</h6>
                  <p className="about-contact-details-text">
                    <a href="mailto:mailinfo00@.com">mailinfo.com</a>
                  </p>
                  <p className="about-contact-details-text">
                    <a href="mailto:support24@.com">support.com</a>
                  </p>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>{" "}
      <div
        className="space-extra2-top space-extra2-bottom"
        data-bg-src="assets/img/bg/video_bg_1.jpg"
      >
        <div className="container">
          <div className="row flex-row-reverse justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="video-box1">
                <a
                  href="https://www.youtube.com/watch?v=cQfIUPw72Dk"
                  className="play-btn style2 popup-video"
                >
                  <i className="fa-sharp fa-solid fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="contact-form style2 ajax-contact"
                >
                  <h3 className="sec-title mb-30 text-capitalize">
                    Book a tour
                  </h3>
                  <div className="row">
                    <div className="col-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                      />
                      <img src="assets/img/icon/user.svg" alt="" />
                    </div>
                    <div className="col-12 form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Mail"
                        required
                      />
                      <img src="assets/img/icon/mail.svg" alt="" />
                    </div>
                    <div className="form-group col-12">
                      <select
                        name="packageType"
                        value={formData.packageType}
                        onChange={handleInputChange}
                        className="form-select nice-select"
                        required
                      >
                        <option value="" disabled>
                          Select Tour Type
                        </option>
                        {packageListType &&
                          packageListType.map((packageType) => (
                            <option key={packageType.id} value={packageType.id}>
                              {packageType.title}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="form-group col-12">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        cols="30"
                        rows="3"
                        className="form-control"
                        placeholder="Your Message"
                        required
                      ></textarea>
                      <img src="assets/img/icon/chat.svg" alt="" />
                    </div>
                    <div className="form-btn col-12 mt-24">
                      <button
                        type="submit"
                        className="th-btn style3"
                        onClick={handleSubmit}
                      >
                        Send message
                        <img src="assets/img/icon/plane.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <p className="form-messages mb-0 mt-3"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="">
        <div className="container-fluid">
          <div className="contact-map style2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
            <div className="contact-icon">
              <img src="assets/img/icon/location-dot3.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
