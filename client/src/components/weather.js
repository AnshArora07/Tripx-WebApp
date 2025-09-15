import React, { useState } from "react";

const api = {
  key: "d3e393ee4755798bf2f3dbae4efc3d7b",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [hover, setHover] = useState(false);

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="weather bg-deepBlue flex items-center justify-center h-80">
      <header className="weather-header text-center p-10">
        <h3
          className="text-white text-xl md:text-2xl font-bold mb-8 p-5"
          style={{
            transition: "color 0.3s ease, transform 0.3s ease",
            color: hover ? " #1d4ed8" : "white", 
            transform: hover ? "scale(1.05)" : "scale(1)",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Wanna Know the Weather of your next Travel Destination?
        </h3>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 rounded-l-md text-black"
          />
          <button
            onClick={searchPressed}
            className="p-3 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 ml-1"
          >
            Search
          </button>
        </div>

        {typeof weather.main !== "undefined" ? (
          <div className="text-white">
            <p className="text-xl font-semibold">{weather.name}</p>
            <p className="text-2xl">{weather.main.temp}°C</p>
            <p className="text-lg">{weather.weather[0].main}</p>
            <p className="italic">({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default Weather;
