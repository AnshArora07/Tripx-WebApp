import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishList = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(savedWishList);
  }, []);

  const handleRemove = (destination) => {
    const updatedWishlist = wishlist.filter(item => item.name !== destination.name);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    toast.info(`${destination.name} removed from WishList!`);
  };

  return (
    <div className="wishlist-page">
      <ToastContainer />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Your WishList</h1>
        {wishlist.length === 0 ? (
          <p className="text-center text-lg text-gray-500">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist.map((destination, index) => (
              <div key={index} className="destination-card bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={destination.imgSrc}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-center text-deepBlue">{destination.name}</h2>
                  <p className="text-lg text-gray-600">{destination.duration}</p>
                  <p className="text-xl font-bold text-green-600">₹ {destination.price}</p>
                  <button
                    className="mt-4 py-2 px-4 bg-red-600 text-white rounded-lg w-full"
                    onClick={() => handleRemove(destination)}
                  >
                    Remove from WishList
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
