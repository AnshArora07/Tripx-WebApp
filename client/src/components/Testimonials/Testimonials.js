import React, { useState } from "react";
import CardTestimonial from "./CardTestimonial";
import  {FiChevronLeft,FiChevronRight} from "react-icons/fi"

const Testimonial=(props)=>{
    let reviews=props.reviews;
    const [indx,setIndx]=useState(0);
    function LeftShiftHandler(){
        if(indx-1<0){
            setIndx(reviews.length-1);
        }
        else{
            setIndx(indx-1);
        }
    }
    function RightShiftHandler(){
        if(indx+1>=reviews.length){
            setIndx(0);
        }
        else{
            setIndx(indx+1);
        }
    }
    return (
        <div className="flex flex-col justify-center w-[100wv] h-[100vh] items-center bg-gray-100">
            <div className="text-center">
                <h2 className="text-3xl font-bold ">Our Testimonials</h2>
            </div>
            <div className="w-[100vw] md:w-[700px] bg-white flex flex-col justify-center 
            items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl">
                <CardTestimonial review={reviews[indx]}/>
                
            <div onClick={LeftShiftHandler}
            className="flex text-3xl mt-1 gap-3 text-lightbBlue500 font-bold mx-auto">
                <button className="cursor-pointer hover:text-deepBlue">
                    <FiChevronLeft/>
                </button>
                <button onClick={RightShiftHandler}
                className="cursor-pointer hover:text-deepBlue">
                    <FiChevronRight/>
                </button>
            </div>
            </div>


            
        </div>
    )
}

export default Testimonial;