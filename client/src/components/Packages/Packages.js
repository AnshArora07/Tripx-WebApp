import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';

const Packages = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [budget, setBudget] = useState('');
  const [likedDestinations, setLikedDestinations] = useState(new Set());

  useEffect(() => {
    const savedWishList = JSON.parse(localStorage.getItem('wishlist')) || [];
    const likedSet = new Set(savedWishList.map(item => item.name));
    setLikedDestinations(likedSet);
  }, []);

  const destinations = [
    { id: 1, name: "Mumbai and Pune", imgSrc: "https://wallpapers.com/images/featured/mumbai-crtn69rpkfw7xeyg.jpg", price: 12000, duration: "5 days, 4 nights" },
    { id: 2, name: "Jaipur and Alwar", imgSrc: "https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123_1280.jpg", price: 15000, duration: "7 days, 6 nights" },
    { id: 3, name: "Delhi and Agra", imgSrc: "https://media.istockphoto.com/id/898467608/photo/the-india-gate-in-delhi.jpg?s=612x612&w=0&k=20&c=gXUaUcAJf7TD8VZ1UvBfNGU0SNNzqg-xuIx_eXgL1OM=", price: 30000, duration: "4 days, 3 nights" },
    { id: 4, name: "Manali and Kasaul", imgSrc: "https://images.unsplash.com/photo-1712388430474-ace0c16051e2?fm=jpg&q=60&w=3000", price: 14000, duration: "6 days, 5 nights" },
    { id: 5, name: "Shimla and Kufri", imgSrc: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/12/pti28-12-2020-000048b-1609160104.jpg", price: 11000, duration: "5 days, 4 nights" },
    { id: 6, name: "Goa", imgSrc: "https://plus.unsplash.com/premium_photo-1697729594707-0fc9e51c8eed?fm=jpg&q=60&w=3000", price: 13000, duration: "6 days, 5 nights" },
    { id: 7, name: "Kashmir and Ladakh", imgSrc: "https://static.wanderon.in/wp-content/uploads/2023/08/untitled-design-2023-08-21t122156.343-min.png", price: 13500, duration: "7 days, 6 nights" },
    { id: 8, name: "Udaipur and Jaipur", imgSrc: "https://plus.unsplash.com/premium_photo-1661964079694-ccfaf7dc8028?fm=jpg&q=60&w=3000", price: 12500, duration: "5 days, 4 nights" },
    { id: 9, name: "Kerala and Chennai", imgSrc: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?cs=srgb&dl=pexels-godson-bright-352845-962464.jpg&fm=jpg", price: 11000, duration: "6 days, 5 nights" },
  ];

  const filteredDestinations = destinations.filter((destination) => {
    const matchesQuery = destination.name.toLowerCase().includes(query.toLowerCase());
    const matchesBudget = budget ? destination.price <= parseInt(budget) : true;
    return matchesQuery && matchesBudget;
  });

  const handleLike = (destination) => {
    const updatedLikedDestinations = new Set(likedDestinations);
    if (updatedLikedDestinations.has(destination.name)) {
      updatedLikedDestinations.delete(destination.name);
      toast.info(`${destination.name} removed from WishList!`);
    } else {
      updatedLikedDestinations.add(destination.name);
      toast.success(`${destination.name} added to WishList!`);
    }

    setLikedDestinations(updatedLikedDestinations);

    // Update localStorage with the current wishlist
    const updatedWishList = destinations.filter(d => updatedLikedDestinations.has(d.name));
    localStorage.setItem('wishlist', JSON.stringify(updatedWishList));
  };

  const handleBookNow = (destination) => {
    navigate('/booking', { state: destination });
  };

  return (
    <div className="package-page">
      <ToastContainer />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Packages</h1>
        <div className="mb-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Packages..."
            className="py-2 px-4 w-full max-w-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightBlue500"
          />
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Enter Budget (Rs)"
            className="py-2 px-4 w-full max-w-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightBlue500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination, index) => (
            <div key={index} className="destination-card bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={destination.imgSrc}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col">
                <h2 className="text-2xl font-bold text-center text-deepBlue">{destination.name}</h2>
                <p className="text-lg text-gray-600">{destination.duration}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-xl font-bold text-green-600">₹ {destination.price}</p>
                  <div
                    onClick={() => handleLike(destination)}
                    className="cursor-pointer"
                    title={likedDestinations.has(destination.name) ? "Remove from WishList" : "Add to WishList"}
                  >
                    {likedDestinations.has(destination.name) ? (
                      <FcLike size={30} />
                    ) : (
                      <FcLikePlaceholder size={30} />
                    )}
                  </div>
                </div>
                <button
                  className="mt-4 py-2 px-4 bg-deepBlue text-white rounded-lg w-full hover:bg-lightbBlue"
                  onClick={() => handleBookNow(destination)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
