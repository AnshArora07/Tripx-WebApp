import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Destinations = ({ limit }) => {
  const [likes, setLikes] = React.useState({});

  const destinations = [
    { name: "Mumbai", imgSrc: "https://wallpapers.com/images/featured/mumbai-crtn69rpkfw7xeyg.jpg", price: "Rs 12000", duration: "5 days, 4 nights", rating: 4 },
    { name: "Jaipur", imgSrc: "https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123_1280.jpg", price: "Rs 15000", duration: "7 days, 6 nights", rating: 5 },
    { name: "Delhi", imgSrc: "https://media.istockphoto.com/id/898467608/photo/the-india-gate-in-delhi.jpg?s=612x612&w=0&k=20&c=gXUaUcAJf7TD8VZ1UvBfNGU0SNNzqg-xuIx_eXgL1OM=", price: "Rs 30000", duration: "4 days, 3 nights", rating: 3 },
    { name: "Manali", imgSrc: "https://images.unsplash.com/photo-1712388430474-ace0c16051e2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuYWxpfGVufDB8fDB8fHww", price: "Rs 14000", duration: "6 days, 5 nights", rating: 4 },
    { name: "Shimla", imgSrc: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/12/pti28-12-2020-000048b-1609160104.jpg", price: "Rs 11000", duration: "5 days, 4 nights", rating: 2 },
    { name: "Goa", imgSrc: "https://plus.unsplash.com/premium_photo-1697729594707-0fc9e51c8eed?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hfGVufDB8fDB8fHww", price: "Rs 13000", duration: "6 days, 5 nights", rating: 5 },
    { name: "Kashmir", imgSrc: "https://static.wanderon.in/wp-content/uploads/2023/08/untitled-design-2023-08-21t122156.343-min.png", price: "Rs 13500", duration: "7 days, 6 nights", rating: 5 },
    { name: "Udaipur", imgSrc: "https://plus.unsplash.com/premium_photo-1661964079694-ccfaf7dc8028?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D", price: "Rs 12500", duration: "5 days, 4 nights", rating: 4 },
    { name: "Kerala", imgSrc: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?cs=srgb&dl=pexels-godson-bright-352845-962464.jpg&fm=jpg", price: "Rs 11000", duration: "6 days, 5 nights", rating: 3 },
  ];

  const displayedDestinations = limit ? destinations.slice(0, limit) : destinations;

  const handleLike = (name) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [name]: prevLikes[name] ? prevLikes[name] + 1 : 1,
    }));
    toast.success(`${name} liked!`);
  };

  return (
    <div className="destinations-page">
      <ToastContainer />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Explore Our Destinations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedDestinations.map((destination, index) => (
            <div key={index} className="destination-card bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={destination.imgSrc}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col items-center">
                <h2 className="text-2xl font-bold text-center">{destination.name}</h2>
                <Link to={`/destination/${destination.name}`}>
                  <button className='py-3 px-5 mt-4 font-mullish text-white border-lightbBlue border rounded-sm text-sm font-bold hover:bg-lightbBlue500 bg-lightbBlue'>
                    Explore
                  </button>
                </Link>
                <div className="flex justify-between items-center mt-4 w-full">
                  <button
                    className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
                    onClick={() => handleLike(destination.name)}
                  >
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
