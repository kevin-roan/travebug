import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Euro } from "lucide-react";

export default function TourPackages() {
  const [tourPackages, setTourpackages] = useState(null);
  const [error, setError] = useState(null);

  const [selectedPackage, setSelectedPackage] = useState(null); // Track the selected package
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const handleReadMore = (item) => {
    setSelectedPackage(item); // Set the selected package details
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setSelectedPackage(null); // Clear the selected package
    setIsModalOpen(false); // Close the modal
  };

  useEffect(() => {
    axios
      .get(`https://iamanas.in/travel_bug/web_api/holiday_packages/1`)
      .then((response) => {
        setTourpackages(response.data?.data?.holiday_packages);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setError(error);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    throw new Error(error);
  }
  if (!tourPackages) {
    return <div>Loading</div>;
  }

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <span className="sub-title">Holiday Packages</span>
      <h2 className="sec-title">{tourPackages.title}</h2>
      <p>{tourPackages.introduction}</p>

      <span className="sub-title mt-5">Make Your Tour More Pleasure</span>
      <h3 className=" mb-5">Tour Packages</h3>
      {/* <div
        style={{
          display: "flex",
          alignItems: "baseline",
          alignContent: "baseline",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {tourPackages.package_types.map((item, _) => (
          <div className="" key={item.id} style={{ width: 300, margin: 10 }}>
            <div className="tour-box th-ani gsap-cursor">
              <div className="tour-box_img global-img">
                <img
                  src={item.image}
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
      </div> */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Responsive grid
          gap: "20px", // Space between cards
          justifyItems: "center", // Center cards horizontally
        }}
      >
        {tourPackages.package_types.map((item) => (
          <div
            key={item.id}
            style={{
              width: "100%",
              maxWidth: "300px", // Uniform card width
              display: "flex",
              flexDirection: "column",
              height: "auto",
            }}
          >
            <div
              className="tour-box th-ani gsap-cursor"
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {/* Image Section */}
              <div
                className="tour-box_img global-img"
                style={{ height: "220px" }}
              >
                <img
                  src={item.image}
                  alt="image"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover", // Ensures image covers the container without distortion
                  }}
                />
              </div>
              {/* Content Section */}
              <div
                className="tour-content item-per-page"
                style={{
                  flex: 1,
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <h4 className="box-title">
                  <a className="ne-text text-start-start">{item.title}</a>
                </h4>
                <div
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3, // Limit text to 2 lines
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.description}
                </div>
                <button
                  onClick={() => handleReadMore(item)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#007bff",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: 0,
                    marginTop: "5px",
                    fontSize: "15px",
                  }}
                >
                  Read More
                </button>
                <h3 className="tour-box_price">
                  <span className="box-title">{item.amount}</span>
                </h3>
                <div
                  className="tour-action action-item"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
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

        {/* Modal Section */}
        {isModalOpen && selectedPackage && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "8px",
                maxWidth: "500px",
                width: "90%",
                textAlign: "center",
              }}
            >
              <h2
                className="sec-title"
                style={{ marginBottom: "5px", fontSize: "12px" }}
              >
                {selectedPackage.title}
              </h2>
              <p className="sec-text">{selectedPackage.description}</p>
            </div>
            <button
              onClick={closeModal}
              className="btn btn-outline-primary"
              style={{
                position: "absolute",
                top: "10px",
                right: "30px",
                borderColor: "white", // White border
                color: "white", // White text
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "white"; // White background on hover
                e.target.style.color = "#007bff"; // Primary text color on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent"; // Reset background
                e.target.style.color = "white"; // Reset text color
              }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
