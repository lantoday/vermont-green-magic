import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import HomePageContainer from './pages/HomePageContainer';
import AboutPageContainer from './pages/AboutPageContainer';
import TestimonialsContainer from './pages/TestimonialsContainer';
import NavbarComponent from './pages/Navbar/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <div>
            <HashRouter>
                <NavbarComponent />
                <div className="App">
                    <Routes>
                        <Route path="/" element={<HomePageContainer />} />
                        <Route path="/about" element={<AboutPageContainer />} />
                        <Route
                            path="/testimonials"
                            element={<TestimonialsContainer />}
                        />
                    </Routes>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
