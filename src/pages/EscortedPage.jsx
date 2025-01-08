import { Link } from "react-router-dom";

function EscortedPage({ escorted }) {
  return (
    <div className="container">
      <h2 className="text-center sec-title">{escorted.data.title.title}</h2>
      <p>{escorted.data.title.content}</p>
      <h3 className="text-center sec-title">
        {escorted.data.packages.heading}
      </h3>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {escorted.data.packages.packages.map((item) => (
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
                  <a href="tour-details.html">{item.title}</a>
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
                  <span className="box-title">{item.amount}</span>
                </h3>
                <div
                  className="tour-action"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Link
                    to={`package_details/${item.id}`}
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

      <h2 className="text-center">{escorted.data.destinations.heading}</h2>
      <div
        className="wrapper"
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {escorted.data.destinations.destinations.map((item, index) => (
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
            <h4 style={{ color: "#333", marginBottom: "10px" }}>{item.name}</h4>
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
                {item.name}:
              </p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-center sec-title">
        {escorted.data.tour_types.heading}
      </h2>

      <div
        className="wrapper"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {escorted.data.tour_types.types.map((item, index) => (
          <div
            key={index}
            style={{
              border: "none",
              borderRadius: "15px",
              padding: "20px",
              backgroundColor: "#ffffff",
              boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              width: "300px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h4
              style={{
                color: "#1CA8CB",
                marginBottom: "15px",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              {item.name}
            </h4>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "15px",
              }}
            />
            <div
              style={{
                textAlign: "left",
                color: "#555",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  marginBottom: "10px",
                }}
              >
                {item.name}:
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: "1.5",
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-center sec-title">
        {escorted.data.best_time_to_visit.heading}
      </h2>

      <div>
        <ul>
          {escorted.data.best_time_to_visit.seasons.map(
            (season, seasonIndex) => (
              <li key={seasonIndex}>
                <strong>{season.name}:</strong> {season.highlights?.join(", ")}
                {season.description}
              </li>
            ),
          )}
        </ul>
      </div>

      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="accordion-area accordion mb-30" id="faqAccordion">
            <div
              className="items-center"
              style={{ paddingTop: 50, textAlign: "center" }}
            >
              <h3>{escorted.data.faq.heading}</h3>
            </div>
            {escorted.data.faq.faqs.map((faq, index) => (
              <div className="accordion-card style2 " key={index}>
                <div className="accordion-header" id={`collapse-item-${index}`}>
                  <button
                    className="accordion-button collapsed"
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
  );
}

export default EscortedPage;
