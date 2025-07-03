import React, { useEffect } from "react";
import "./Booking.css";
import Header from "../../Components/Header";

const Booking = () => {
  useEffect(() => {
    const loadTidyCal = () => {
      // Check if TidyCal script is already loaded
      const existingScript = document.querySelector('script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]');
      
      const initializeTidyCal = () => {
        // Find the TidyCal embed element
        const tidycalElement = document.querySelector('.tidycal-embed[data-path="megatron111994/15-minute-meeting"]');
        if (tidycalElement && window.TidyCal) {
          // Initialize TidyCal with the specific element
          window.TidyCal.init(tidycalElement);
        }
      };
      
      if (!existingScript) {
        // Load the script if it doesn't exist
        const script = document.createElement('script');
        script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
        script.async = true;
        script.onload = () => {
          // Small delay to ensure DOM is ready
          setTimeout(initializeTidyCal, 50);
        };
        document.head.appendChild(script);
      } else {
        // Script already exists, just reinitialize TidyCal
        setTimeout(initializeTidyCal, 50);
      }
    };

    // Small delay to ensure component is fully mounted
    setTimeout(loadTidyCal, 10);
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
