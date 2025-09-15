import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Testimonial from './components/Testimonials/Testimonials';
import reviews from './components/Testimonials/data';
import Header from './components/Header';
import Destinations from './components/Destinations/Destination';
import Packages from './components/Packages/Packages';
import PackageDetails from './components/Packages/PackageDetails';
import About from './components/About';
import Contact from './components/.Contact';
import DestinationDetails from './components/Destinations/DestinationDetails';
import Weather from './components/weather';
import TravelerPhotos from './components/TravelerPhotos';
import Signup from './components/Signup';
import Login from './components/Login';
import BookingPage from './components/BookingPage';
import WishList from './components/WishList';
import ScrollToTop from './components/ScrollToTop';
import UserProvider from './components/context/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import Hotel from './components/Hotel';
function App() {
    const [wishList, setWishList] = useState([]);

    const addToWishList = (destination) => {
        if (!wishList.some((item) => item.id === destination.id)) {
            setWishList((prev) => [...prev, destination]);
        }
    };

    return (
        <UserProvider>
            <Router>
                <ScrollToTop />
                <Routes>
                    {/* Public Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                    {/* Protected Routes */}
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <div>
                                    <Header />
                                    <Weather />
                                    <Destinations limit={6} />
                                    <TravelerPhotos />
                                    <Testimonial reviews={reviews} />
                                </div>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/destinations"
                        element={
                            <ProtectedRoute>
                                <Destinations />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/destination/:name"
                        element={
                            <ProtectedRoute>
                                <DestinationDetails />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/packages"
                        element={
                            <ProtectedRoute>
                                <Packages addToWishList={addToWishList} />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/packages/:destination"
                        element={
                            <ProtectedRoute>
                                <PackageDetails />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <ProtectedRoute>
                                <About />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/contact-us"
                        element={
                            <ProtectedRoute>
                                <Contact />
                            </ProtectedRoute>
                        }
                    />
                    <Route 
                    path='/hotels' 
                    element={
                      <ProtectedRoute>
                        <Hotel/>
                      </ProtectedRoute>
                    }/>
                    <Route
                        path="/booking"
                        element={
                            <ProtectedRoute>
                                <BookingPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/wishlist"
                        element={
                            <ProtectedRoute>
                                <WishList wishList={wishList} />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;
