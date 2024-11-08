import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import CityDetails from './pages/CityDetails';
import PlaceDetails from './pages/PlaceDetails';
import Schedule from './pages/Schedule';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destination/:cityId" element={<CityDetails />} />
          <Route path="/destination/:cityId/place/:placeId" element={<PlaceDetails />} />
          <Route path="/schedule/:cityId" element={<Schedule />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;