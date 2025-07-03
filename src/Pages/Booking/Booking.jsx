import React, { useEffect } from "react";
import "./Booking.css";
import Header from "../../Components/Header";

const Booking = () => {
  useEffect(() => {
    // Load TidyCal embed script
    const script = document.createElement('script');
    script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="booking-page">
        <h1 className="booking-title">Agenda una Cita con nosotros</h1>
        <div className="calendar-container">
          <div className="tidycal-embed" data-path="megatron111994/15-minute-meeting"></div>
        </div>
      </div>
    </>
  );
};

export default Booking;
