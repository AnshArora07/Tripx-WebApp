import React from "react";
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

const CardTestimonial = (props) => {
    let review = props.review;
    return (
        <div className="flex flex-col md:relative h-[45vh]">
            <div className="absolute top-[-7rem] z-[10] mx-auto2">
                <img 
                className="aspect-square rounded-full w=[100px] h-[100px] z-25"
                src={review.image} alt="#" />
            <div className="w-[100px] h-[100px] bg-lightbBlue500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
            </div>
            <div className="text-center mt-7">
                <p className="tracking-wider font-bold text-xl capitalize">{review.name}</p>
                <p className="text-lightbBlue500 uppercase text-sm">{review.job}</p>
            </div>

            <div className="text-deepBlue mx-auto mt-5">
                <FaQuoteLeft/>
            </div>
            <div className="text-center mt-4 text-slate-500">
                <p>{review.text}</p>
            </div>
            <div className="text-deepBlue mx-auto mt-5">
                <FaQuoteRight/>
            </div>
            
        </div>
    )
}

export default CardTestimonial;