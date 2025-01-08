import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Euro } from "lucide-react";

function Tour() {
  const [tourData, setTourData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://iamanas.in/travel_bug/web_api/package_type_details/${id}`)
      .then((res) => {
        console.log("packages array", res.data.data);
        setTourData(res?.data);
      })
      .catch((error) => console.error(error.message));
  }, [id]);

  if (!tourData) {
    return <div>Loading</div>;
  } else
    return (
      <div>
        <div className="container ">
          <h2 className="text-center sec-title" style={{ marginBottom: "3px" }}>
            {tourData.data?.main_title}
          </h2>
          <h2 className="text-center">{tourData.data?.title}</h2>
          <p>{tourData.data.main_content}</p>
          <h2 className="text-center sec-title">
            {tourData.data.package_section_title}
          </h2>
          <p>{tourData.data.package_section_content}</p>

          {/* 
          <div
            className="wrapper"
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {tourData.data.destinations.destinations.map((item, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "20px",
                  backgroundColor: "#ffffff",
                  margin: "20px auto",
                  width: "300px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                }}
              >
                <h4 style={{ color: "#333", marginBottom: "10px" }}>
                  {item.name}
                </h4>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "15px",
                  }}
                />
                <div className="destinations" style={{ textAlign: "left" }}>
                  <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                    Beaches in {item.name}:
                  </p>
                  <ul style={{ paddingLeft: "20px", margin: "0" }}>
                    {item.beaches.map((beach, i) => (
                      <li
                        key={i}
                        style={{
                          color: "#555",
                          fontSize: "14px",
                          marginBottom: "5px",
                        }}
                      >
                        {beach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {tourData.data.packages.map((item) => (
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
                      <span
                        className="box-title"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Euro size={20} />
                        {item.amount}
                      </span>
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
          </div>

          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="accordion-area accordion mb-30" id="faqAccordion">
                <div
                  className="items-center"
                  style={{ paddingTop: 50, textAlign: "center" }}
                >
                  <h3>{tourData.data.faq.heading}</h3>
                </div>
                {tourData.data.faq.faqs.map((faq, index) => (
                  <div className="accordion-card style2 " key={index}>
                    <div
                      className="accordion-header"
                      id={`collapse-item-${index}`}
                    >
                      <button
                        className="accordion-button collapsed new-btn-add"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse-${index}`}
                      >
                        Q{index + 1}.{faq.question}
                      </button>
                    </div>
                    <div
                      id={`collapse-${index}`}
                      className="accordion-collapse collapse "
                      aria-labelledby={`collapse-item-${index}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body style2">
                        <p className="faq-text"> {faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Tour;
