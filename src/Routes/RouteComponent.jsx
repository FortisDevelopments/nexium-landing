import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Landing from '../Pages/Landing/Landing';
import Booking from '../Pages/Booking/Booking';
// Example page components - you can replace these with your actual pages

const NotFound = () => (
  <div style={{ padding: '2rem' }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
  </div>
);

const UnderConstruction = () => (
  <div style={{ padding: '2rem', color: 'white' }}>
    <h1>Bajo Construccion</h1>
    <p>Esta pagina esta bajo Construccion</p>
  </div>
);


const RouteComponent= () => {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<UnderConstruction />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/404" element={<NotFound />} />
        {/* Redirect any unknown routes to 404 */}
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/citas" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteComponent;