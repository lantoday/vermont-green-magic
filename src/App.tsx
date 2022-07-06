import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import HomePageContainer from './pages/HomePageContainer';
import ContactPageContainer from './pages/ContactPageContainer';
import TestimonialsContainer from './pages/TestimonialsContainer';
import ProductListPageContainer from './pages/ProductListPageContainer';
import CbdPageContainer from './pages/CbdPageContainer';
import NutrientPageContainer from './pages/NutrientPageContainer';
import NavbarComponent from './shared/Navbar/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
    return (
        <div>
            <HashRouter>
                <NavbarComponent />
                <div className="app_container">
                    <Routes>
                        <Route path="/" element={<HomePageContainer />} />
                        <Route
                            path="/productlist"
                            element={<ProductListPageContainer />}
                        />
                        <Route
                            path="/testimonials"
                            element={<TestimonialsContainer />}
                        />
                        <Route
                            path="/contact"
                            element={<ContactPageContainer />}
                        />
                        <Route path="/cbd" element={<CbdPageContainer />} />
                        <Route
                            path="/nutrient-brewing"
                            element={<NutrientPageContainer />}
                        />
                    </Routes>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
