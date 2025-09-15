import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import Navbar from './Navbar';
import Footer from './Footer';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(UserContext);

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
        </>
    );
};

export default ProtectedRoute;
