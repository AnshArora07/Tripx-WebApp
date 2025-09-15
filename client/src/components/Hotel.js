import React, { useState } from "react";

const Hotel = () => {
  const [searchCity, setSearchCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [hotels, setHotels] = useState([]);

  // List of predefined cities
  const cities = ["Delhi", "Jaipur", "Bombay", "Shimla", "Kerala", "Goa"];

  // Mock data for hotels with property type
  const mockHotels = {
    delhi: [
      { name: "The Taj Mahal Hotel", price: "₹10,000/night", image: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_534,q_40,w_800/hotelier-images/5e/e3/60a71e9f6c4258a5e527ee065af08c5c2ba76d1ca6c28dc38ac807490a30.jpeg", type: "Hotel" },
      { name: "ITC Maurya", price: "₹8,500/night", image: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcmaurya-new-delhi/images/overview-landing-page/headmast/desktop/exterior-night.png", type: "Resort" },
      { name: "The Leela Palace", price: "₹12,000/night", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/5648061.jpg?k=4629f919fb92436c3e19b71734d208d8e58201df7b29773f90089639f367db6d&o=&hp=1", type: "Resort" },
      { name: "Radisson Blu", price: "₹6,500/night", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/11/ff/9a/radisson-blu-plaza-delhi.jpg?w=700&h=-1&s=1", type: "Hotel" },
      { name: "Hyatt Regency", price: "₹9,000/night", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/35/87/0c/exterior.jpg?w=700&h=-1&s=1", type: "Hotel" },
      { name: "JW Marriott", price: "₹11,000/night", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZqtCnx2bLY5XVEgE_zMkY_8MdTwj6DSmgBQ&s", type: "Resort" },
    ],
    jaipur: [
      { name: "The Oberoi Rajvilas", price: "₹12,000/night", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/48356404.jpg?k=94a7dba4725f4284d857358a3aa6bea0e3b3d342e52fa60ae761e44ea35c5074&o=&hp=1", type: "Hotel" },
      { name: "Trident Jaipur", price: "₹6,500/night", image: "https://www.tridenthotels.com/-/media/trident-hotel/trident-jaipur/Jaipur-Overview/Banners/Desktop-1920x1080/banner2.jpg", type: "Resort" },
      { name: "Fairmont Jaipur", price: "₹10,500/night", image: "https://cf.bstatic.com/xdata/images/hotel/max500/17061423.jpg?k=a602c1735b051c67933f216b380b33b7a4ddc3414f830370d0683f57f3b74f1e&o=&hp=1", type: "Homestay" },
      { name: "Rambagh Palace", price: "₹20,000/night", image: "https://static.toiimg.com/thumb/100531888/rambagh.jpg?width=1200&height=900", type: "Hotel" },
      { name: "Alsisar Haveli", price: "₹7,000/night", image: "https://static.wixstatic.com/media/e0ce5d_fb872945ae0741439993da11be82eeee~mv2.jpg/v1/fill/w_1920,h_1189,al_c/e0ce5d_fb872945ae0741439993da11be82eeee~mv2.jpg", type: "Hotel" },
      { name: "Samode Haveli", price: "₹8,500/night", image: "https://cf.bstatic.com/xdata/images/hotel/max500/22490247.jpg?k=016c0b4388c40b407c1ff25c890b16601ef93cfe838ec7c2085e18e64fede52d&o=&hp=1", type: "Resort" },
    ],
    bombay: [
      { name: "The Taj Mahal Palace", price: "₹15,000/night", image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Taj_Mahal_Palace_Hotel_photo.jpg", type: "Hotel" },
      { name: "The St. Regis Mumbai", price: "₹12,000/night", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/16/5f/46/outdoor-pool.jpg?w=700&h=-1&s=1", type: "Hotel" },
      { name: "Trident Nariman Point", price: "₹10,000/night", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBebx7s8UraUgHNVm6w3LNc6Olibve5wfvFQ&s", type: "Resort" },
      { name: "Four Seasons", price: "₹11,500/night", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/472036509.jpg?k=ca519c1b538fb5a354795ca88348ad866bccca2859a8abec4e8560d167b0b235&o=&hp=1", type: "Hotel" },
      { name: "Grand Hyatt Mumbai", price: "₹9,500/night", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/a0/3f/3a/grand-hyatt-mumbai.jpg?w=700&h=-1&s=1", type: "Resort" },
      { name: "ITC Grand Central", price: "₹8,000/night", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/24/3e/74/itc-grand-central.jpg?w=700&h=-1&s=1", type: "Hotel" },
    ],
    kerala: [
      { name: "Taj Green Cove Resort", price: "₹14,000/night", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBuTUmkweqztekwKrm7mrikW4RO60PQ1GEhQ&s", type: "Resort" },
      { name: "The Leela Kovalam", price: "₹13,000/night", image: "https://www.theleela.com/prod/content/assets/styles/tl_840_604_webp/public/2024-01/The-cafe-restaurant-kovalam.jpg.webp?VersionId=tg9_O8be5iK_nGuzcO_M_oTuyFc7gtww&itok=A2R4IyCb", type: "Resort" },
      { name: "Zuri Kumarakom", price: "₹10,500/night", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP986VFYZhT1R37fCCVcd0pk9g_fjSk-wZDw&s", type: "Homestay" },
      { name: "Vivanta by Taj", price: "₹9,000/night", image: "https://r1imghtlak.mmtcdn.com/e114d6ac-c412-47c2-8fc9-25c185768e6f.PNG", type: "Hotel" },
      { name: "Fragrant Nature", price: "₹8,000/night", image: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_47,w_1000,h_563,r_0,c_crop/q_80,w_900,dpr_1,f_auto,fl_progressive,c_limit/fragrant-nature-kollam/38_Fragrant_Nature_Kollam_dnunax", type: "Resort" },
      { name: "Marari Beach Resort", price: "₹7,500/night", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsWSSX5IXGHxBOIZ8nnfS2DVO3prQK50vW5w&s", type: "Resort" },
    ],
    goa: [
      { name: "The Leela Goa", price: "₹15,000/night", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNSc9qmzejRgBT0dT5Y1Y_kRiuTK8hTrfmDw&s", type: "Resort" },

      { name: "Taj Exotica Resort", price: "₹14,000/night", image: "https://img.freepik.com/free-photo/wooden-jetty-luxury-resort-baa-atoll-maldives_505751-5736.jpg", type: "Resort" },

      { name: "Grand Hyatt Goa", price: "₹12,000/night", image: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2016/10/10/1651/Grand-Hyatt-Goa-P029-Hotel-Pool.jpg/Grand-Hyatt-Goa-P029-Hotel-Pool.16x9.jpg", type: "Hotel" },

      { name: "W Goa", price: "₹11,000/night", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqEMtT8aMunu3otai5glkcyGqsMKjMuDq1Yw&s", type: "Resort" },

      { name: "Holiday Inn Resort", price: "₹9,500/night", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXjgozzU3KWTqH8QMCtdWsE1ofrt0G_632A&s", type: "Hotel" },

      { name: "Radisson Blu Goa", price: "₹8,500/night", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxbHPQafgjv5bEcuQGVaekmgKOd3wjRryjw&s", type: "Hotel" },
    ],

    shimla: [
      { name: "Wildflower Hall", price: "₹15,000/night", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/dd/51/cc/wildflower-hall-shimla.jpg?w=700&h=-1&s=1", type: "Hotel" },

      { name: "Hotel Radisson Shimla", price: "₹8,000/night", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavuklxAq9STockVDBB18pYWQNCVbTOZcWPA&s", type: "Resort" },

      { name: "The Oberoi Cecil", price: "₹20,000/night", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVHB-JOZGiNZU-m5r07gBgcGm6JwuXquWfEw&s", type: "Hotel" },

      { name: "Chail Palace Hotel", price: "₹6,500/night", image: "https://static2.tripoto.com/media/filter/tst/img/1/SpotDocument/1504080733_1504012732_the_palace_at_chail_near_shimla.jpg.webp", type: "Homestay" },

      { name: "Kufri Holiday Resort", price: "₹7,500/night", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd9qy7CCffvxlzZ20heIlspFTuLcnabvzlZw&s", type: "Resort" },

      { name: "Himachal Pradesh Tourism Development Corporation (HPTDC)", price: "₹5,000/night", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOt8CdLLjMCSj7yvfQn7tz5RQQu6nZD8vfig&s", type: "Homestay" },
    ],
  };
  
  

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchCity(value);

    // Filter suggestions based on input
    const filteredCities = cities.filter((city) =>
      city.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestions(filteredCities);
    setShowSuggestions(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const cityKey = searchCity.trim().toLowerCase();
    if (mockHotels[cityKey]) {
      setHotels(mockHotels[cityKey]);
    } else {
      setHotels([]);
    }

    setShowSuggestions(false); // Close suggestions after search
  };

  const handleFocus = () => {
    // Show all cities on focus if input is empty
    if (searchCity.trim() === "") {
      setSuggestions(cities);
    }
    setShowSuggestions(true);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Search Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">Hotel Booking</h1>
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search city (e.g., Delhi, Jaipur)"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchCity}
            onChange={handleInputChange}
            onFocus={handleFocus}
          />
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute z-10 bg-white border border-gray-300 w-full mt-1 rounded-md shadow-lg">
              {suggestions.map((city, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSearchCity(city);
                    setSuggestions([]);
                    setShowSuggestions(false);
                  }}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition"
          >
            Search Hotels
          </button>
        </form>
      </div>

      {/* Hotel Display Section */}
      <div>
        {hotels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel, index) => (
              <div key={index} className="relative bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-40 object-cover rounded-t-md"
                />
                {/* Tag */}
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {hotel.type}
                </span>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-700 mb-2">{hotel.name}</h3>
                  <p className="text-gray-600 mb-4">{hotel.price}</p>
                  <button className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition">
                    View Property
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center mt-4">
            No hotels found. Try searching for another city.
          </p>
        )}
      </div>
    </div>
  );
};

export default Hotel;
