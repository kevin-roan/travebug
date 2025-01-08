import React, { useState } from "react";

export default function EnquiryForm() {
  const [isMinimized, setIsMinimized] = useState(false);

  const formStyles = {
    container: {
      position: "fixed",
      maxHeight: "90rem",
      flexShrink: 1,
      right: isMinimized ? "-300px" : 0,
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "white",
      padding: "20px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      width: "20rem",
      borderRadius: "8px 0 0 8px",
      zIndex: 1000,
      margin: "20px",
      transition: "right 0.3s ease",
      "@media (max-width: 768px)": {
        display: "none", // Hide on mobile
      },
    },
    toggleButton: {
      position: "absolute",
      left: "-40px",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "#008080",
      color: "white",
      border: "none",
      padding: "10px",
      cursor: "pointer",
      borderRadius: "4px 0 0 4px",
      width: "40px",
      height: "40px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "center",
    },
    inputGroup: {
      marginBottom: "15px",
      width: "100%",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px",
    },
    phoneInput: {
      width: "100%",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px",
    },
    submitButton: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#008080",
      border: "none",
      borderRadius: "4px",
      color: "white",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    flagIcon: {
      position: "absolute",
      left: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "25px",
    },
  };

  return (
    <div style={formStyles.container}>
      <button
        style={formStyles.toggleButton}
        onClick={() => setIsMinimized(!isMinimized)}
      >
        {isMinimized ? "→" : "←"}
      </button>

      <h2 style={formStyles.title}>Stay Connected</h2>

      <div style={formStyles.inputGroup}>
        <input type="text" placeholder="Name *" style={formStyles.input} />
      </div>

      <div style={formStyles.inputGroup}>
        <input
          type="text"
          placeholder="City of Residence *"
          style={formStyles.input}
        />
      </div>

      <div style={formStyles.inputGroup}>
        <input type="email" placeholder="Email *" style={formStyles.input} />
      </div>

      <div style={formStyles.inputGroup}>
        <input
          type="tel"
          placeholder="Phone Number *"
          style={formStyles.phoneInput}
        />
      </div>

      <div style={formStyles.inputGroup}>
        <input
          type="tel"
          placeholder="WhatsApp"
          style={formStyles.phoneInput}
        />
      </div>

      <div style={formStyles.inputGroup}>
        <input
          type="text"
          placeholder="Travel Destination *"
          style={formStyles.input}
        />
      </div>

      <div style={formStyles.inputGroup}>
        <input
          type="date"
          placeholder="Date of Travel *"
          style={formStyles.input}
        />
      </div>

      <div style={formStyles.inputGroup}>
        <input
          type="number"
          placeholder="No. of People *"
          style={formStyles.input}
        />
      </div>

      <div style={formStyles.inputGroup}>
        <input
          type="text"
          placeholder="Vacation Type *"
          style={formStyles.input}
        />
      </div>

      <button style={formStyles.submitButton}>SUBMIT</button>
    </div>
  );
}
