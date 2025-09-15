import React from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookingPage = () => {
  const location = useLocation();
  const { name, imgSrc, price, duration } = location.state || {};
  const navigate = useNavigate();
  // const handlePayNow = () => {
  //   toast.success("Yayyy!! Pack your bags for a new destination");
  //   setTimeout(() => navigate('/'), 6000); 
  // };
  const buyFunction = async () => {
    try {
      const response = await axios.post('https://tripx-webapp-backend.onrender.com/payment', {
        name, // Pass the selected package name
        price, // Pass the selected package price
        
      });
      if (response.status === 200) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };
  

  return (
    <div className="booking-page container mx-auto px-4 py-8">
      <ToastContainer />
      <h1 className="text-4xl font-bold text-center mb-8">Booking Confirmation</h1>
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden p-4">
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-48 object-contain mb-4"
        />
        <h2 className="text-2xl font-bold text-deepBlue mb-2">{name}</h2>
        <p className="text-lg text-gray-600 mb-2">Duration: {duration}</p>
        <p className="text-lg text-blue-600 font-semibold mb-4">Price: {price}</p>
        <button
          onClick={buyFunction}
          className="py-2 px-4 bg-lightbBlue text-white rounded hover:bg-lightbBlue500"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
