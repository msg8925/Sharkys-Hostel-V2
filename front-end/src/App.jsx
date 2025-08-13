import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import RoomDetails from './pages/RoomDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Navbar>
        <section id="home" className="h-screen bg-gray-100">Home Content</section>
        <section id="about" className="h-screen bg-gray-200">About</section>
        <section id="rooms" className="h-screen bg-gray-300">Rooms</section>
        <section id="contact" className="h-screen bg-gray-400">Contact</section>
        <section id="booking-form" className="h-screen bg-gray-500">
          Booking Form Here
        </section>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
      </Routes>
    </Router>
  );
}

export default App
