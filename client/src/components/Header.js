import React from 'react';
import Travel1 from "../Images/Travel1.avif";

const Header = () => {
    return (
        <div className="relative h-screen">
            <img
                className="h-[85.6vh]  mx-auto object-center"
                src={Travel1}
                alt="Background"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-deepBlue">Explore the World</h1>
                <p className="text-lg md:text-2xl text-deepBlue">Discover new destinations and unique experiences</p>
                {/* <button className="mt-6 px-6 py-3 bg-lightbBlue text-white font-bold rounded-full hover:bg-blue-700 transition">
                    Get Started
                </button> */}
            </div>
        </div>
    );
}

export default Header;
