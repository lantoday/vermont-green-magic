import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const HomePageContainer = React.lazy(() => import('./pages/HomePageContainer'));
const ContactPageContainer = React.lazy(
    () => import('./pages/ContactPageContainer')
);
const TestimonialsContainer = React.lazy(
    () => import('./pages/TestimonialsContainer')
);
const ProductListPageContainer = React.lazy(
    () => import('./pages/ProductListPageContainer')
);
const CbdPageContainer = React.lazy(() => import('./pages/CbdPageContainer'));
const NutrientPageContainer = React.lazy(
    () => import('./pages/NutrientPageContainer')
);
const GalleryPageContainer = React.lazy(
    () => import('./pages/GalleryPageContainer')
);
const NavbarComponent = React.lazy(
    () => import('./shared/Navbar/NavbarComponent')
);

function App() {
    return (
        <div>
            <HashRouter>
                <div className="app_container">
                    <Routes>
                        <Route path="/" element={<NavbarComponent />}>
                            <Route index element={<HomePageContainer />} />
                            <Route
                                path="/productlist"
                                element={
                                    <React.Suspense fallback={<>...</>}>
                                        <ProductListPageContainer />
                                    </React.Suspense>
                                }
                            />
                            <Route
                                path="/testimonials"
                                element={
                                    <React.Suspense fallback={<>...</>}>
                                        <TestimonialsContainer />
                                    </React.Suspense>
                                }
                            />
                            <Route
                                path="/contact"
                                element={
                                    <React.Suspense fallback={<>...</>}>
                                        <ContactPageContainer />
                                    </React.Suspense>
                                }
                            />
                            <Route
                                path="/cbd"
                                element={
                                    <React.Suspense fallback={<>...</>}>
                                        <CbdPageContainer />
                                    </React.Suspense>
                                }
                            />
                            <Route
                                path="/nutrient-brewing"
                                element={
                                    <React.Suspense fallback={<>...</>}>
                                        <NutrientPageContainer />
                                    </React.Suspense>
                                }
                            />
                            <Route
                                path="/gallery"
                                element={
                                    <React.Suspense fallback={<>...</>}>
                                        <GalleryPageContainer />
                                    </React.Suspense>
                                }
                            />
                        </Route>
                    </Routes>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
