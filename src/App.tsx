import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePageContainer from './pages/HomePageContainer';
import AboutPageContainer  from './pages/AboutPageContainer';
import NavbarComponent from './pages/Navbar/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomePageContainer/>} />
          <Route path="/about" element={<AboutPageContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
