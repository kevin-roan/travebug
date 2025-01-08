import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AyurvedaPage({ ayurveda }) {
  return (
    <div className="container">
      <h2 className="text-center">{ayurveda.data.title.title}</h2>
      <p>{ayurveda.data.title.content}</p>
      <h3 className="text-center">{ayurveda.data.section_2.heading}</h3>
      <p>{ayurveda.data.section_2.content}</p>
      <h3 className="text-center">{ayurveda.data.packages.heading}</h3>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {ayurveda.data.packages.packages.map((item) => (
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

      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="accordion-area accordion mb-30" id="faqAccordion">
            <div
              className="items-center"
              style={{ paddingTop: 50, textAlign: "center" }}
            >
              <h3>{ayurveda.data.faq.heading}</h3>
            </div>
            {ayurveda.data.faq.faqs.map((faq, index) => (
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

export default AyurvedaPage;

AyurvedaPage.propTypes = {
  ayurveda: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }).isRequired,
      section_2: PropTypes.shape({
        heading: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }).isRequired,
      packages: PropTypes.shape({
        heading: PropTypes.string.isRequired,
        packages: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            thumbnail: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
          }),
        ).isRequired,
      }).isRequired,
      faq: PropTypes.shape({
        heading: PropTypes.string.isRequired,
        faqs: PropTypes.arrayOf(
          PropTypes.shape({
            question: PropTypes.string.isRequired,
            answer: PropTypes.string.isRequired,
          }),
        ).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
