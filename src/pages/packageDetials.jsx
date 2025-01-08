import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import axios from "axios";
import TourPackageBanner from "../components/packageDetailBanner";
import EnquiryForm from "../components/EnquiryForm";

export default function PackageDetails() {
  const [data, setData] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://iamanas.in/travel_bug/web_api/package_details/${id}`)
      .then((response) => {
        setData(response.data.data);
        console.log("Package details", response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!data) {
    return (
      <div className="container flex items-center justify-center">
        Loading...
      </div>
    );
  } else
    return (
      <div className="container">
        <TourPackageBanner
          id={data.package_details.id}
          title={data.package_details.title}
          day={data.package_details.day}
          night={data.package_details.night}
          amount={data.package_details.amount}
          thumbnail={data.package_details.thumbnail}
          startingPoint={data.package_details.starting_point}
          endingPoint={data.package_details.ending_point}
        />
        <h3 className="sec-title mt-3">{data?.package_details.title}</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.package_details?.description),
          }}
        ></div>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.package_details?.overview),
          }}
        ></div>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.package_details?.highlights),
          }}
        ></div>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.package_details?.other_info),
          }}
        ></div>
        <div>
          {data.package_details?.accommodation.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: "2rem",
                padding: "1.5rem",
                borderRadius: "15px",
                backgroundColor: "#ffffff",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                position: "relative",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                animation: "fadeIn 0.6s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0, 0, 0, 0.1)";
              }}
            >
              {/* Section Title */}
              <h3
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                  color: "#2c3e50",
                  textAlign: "center",
                }}
              >
                {item.title}
              </h3>

              {/* Section Content */}
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  color: "#555",
                  marginBottom: "1.5rem",
                  textAlign: "justify",
                  padding: "0 0.5rem",
                }}
              >
                {item.content}
              </p>

              {/* Image Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "12px",
                      transition: "transform 0.4s ease",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <img
                      src={image}
                      alt={`Accommodation ${index + 1} Image ${imgIndex + 1}`}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.1)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        right: "0",
                        padding: "0.5rem",
                        background:
                          "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
                        color: "white",
                        textAlign: "center",
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.package_details?.inclusion),
          }}
        ></div>
        <section className="itinerary m-3">
          {data.package_details.itinerary.map((itenary, index) => (
            <div className="accordion-card style2 " key={index}>
              <div className="accordion-header" id={`collapse-item-${index}`}>
                <button
                  className="accordion-button collapsed new-btn-add"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse-${index}`}
                >
                  {itenary.title}
                </button>
              </div>
              <div
                id={`collapse-${index}`}
                className="accordion-collapse collapse "
                aria-labelledby={`collapse-item-${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body style2">
                  <p className="faq-text"> {itenary.content}</p>
                </div>
                <p
                  className="faq-text text-bold mx-4 mb-4"
                  style={{ fontWeight: "bold" }}
                >
                  {" "}
                  {itenary.sub_content}
                </p>
              </div>
            </div>
          ))}
        </section>
        <section
          className="similar-packages "
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {data.package_details.similar_packages.map((item) => (
            <div
              className=""
              key={item.id}
              style={{
                width: 300,
                margin: 10,
              }}
            >
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img
                    src={item.thumbnail}
                    alt="image"
                    style={{
                      height: 280,
                    }}
                  />
                </div>
                <div className="tour-content">
                  <h4 className="box-title">
                    <a href="tour-tourData.html">{item.title}</a>
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "center",
                      flexWrap: "wrap",
                      marginBottom: 10,
                    }}
                  >
                    {item.description}
                  </div>
                  <h3 className="tour-box_price">
                    <span className="box-title">{item.amount} €</span>
                  </h3>
                  <div
                    className="tour-action"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Link
                      to={`/package_details/${item.id}`}
                      className="th-btn style4 th-icon"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <div
          style={{
            position: "absolute",
            top: "100px",
            right: 0,
            width: "25%",
            "@media (max-width: 768px)": {
              position: "relative",
              width: "100%",
              top: "auto",
              marginTop: "20px",
            },
          }}
        >
          <EnquiryForm />
        </div>
      </div>
    );
}
