import './App.css';
import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './components/home/Home';
import { Map } from './components/Map';
import { Navbar } from './components/navbar/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="map" element={<Map />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
