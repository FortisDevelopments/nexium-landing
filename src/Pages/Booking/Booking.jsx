import React, { useEffect, useState } from "react";
import "./Booking.css";
import Header from "../../Components/Header";
import logo from "../../assets/images/nexiumlogo.png" // Adjust the path as necessary

const Booking = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  useEffect(() => {
    // Start fade out after 0.5 seconds
    const fadeTimeout = setTimeout(() => {
      setIsFadingOut(true);
      
      // Hide loader completely after fade animation completes
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Wait for the 0.5s CSS transition to complete
    }, 500);

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

    // Cleanup timeouts on unmount
    return () => {
      clearTimeout(fadeTimeout);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="booking-page">
        {isLoading && (
          <div className={`loader-overlay ${isFadingOut ? 'fade-out' : ''}`}>
            <div className="loader-content">
              <img 
                src={logo}
                alt="Nexium Logo" 
                className="loader-logo"
              />
            </div>
          </div>
        )}
        <h1 className="booking-title">Agenda una Cita con nosotros!</h1>
        <div className="calendar-container">
          <div className="tidycal-embed" data-path="megatron111994/15-minute-meeting"></div>
        </div>
      </div>
    </>
  );
};

export default Booking;
