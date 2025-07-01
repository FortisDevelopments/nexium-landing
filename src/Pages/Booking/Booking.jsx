import React, { useEffect } from "react";
import "./Booking.css";
import Header from "../../Components/Header";
const Booking = () => {
  useEffect(() => {
    // Load TidyCal embed script
    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector(
        'script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]'
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <div className="booking-page">
        <h1 className="booking-title">Agenda una Cita con nosotros</h1>
        <div
          className="tidycal-embed"
          data-path="megatron111994/15-minute-meeting"
        ></div>
      </div>
    </>
  );
};

export default Booking;
