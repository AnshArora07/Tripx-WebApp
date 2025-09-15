// src/components/About.js
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-deepBlue">About Us</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-lightbBlue">Who We Are</h2>
        <p className="text-lg leading-relaxed">
          At Tripx, we are passionate about travel and dedicated to helping our customers explore the world. Founded with the belief that travel should be accessible and enjoyable for everyone, we have been creating memorable journeys and experiences for travelers across the globe.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-lightbBlue">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          Our mission is to make travel seamless, affordable, and personalized. We aim to inspire wanderlust and make dream destinations a reality by offering a wide range of travel packages, each carefully curated to meet the diverse needs and preferences of our clients.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-lightbBlue">Our Values</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li><strong>Customer Satisfaction:</strong> We prioritize our customers' needs and strive to exceed their expectations at every turn.</li>
          <li><strong>Integrity:</strong> We operate with honesty and transparency, ensuring trust and reliability in all our services.</li>
          <li><strong>Innovation:</strong> We continuously innovate to provide our customers with unique and exciting travel experiences.</li>
          <li><strong>Sustainability:</strong> We are committed to responsible travel that respects and preserves the environment and cultures we explore.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-lightbBlue">Why Choose Us?</h2>
        <p className="text-lg leading-relaxed">
          With years of experience in the travel industry, Tripx is your trusted partner for all your travel needs. Whether you are looking for a luxurious getaway or an adventurous escape, our expert team is here to guide you every step of the way. We offer:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li>A wide selection of destinations and packages tailored to your preferences.</li>
          <li>Competitive pricing with no hidden fees.</li>
          <li>24/7 customer support to assist you before, during, and after your trip.</li>
          <li>Exclusive deals and offers for loyal customers.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-lightbBlue">Join Us on the Journey</h2>
        <p className="text-lg leading-relaxed">
          Embark on a journey of a lifetime with Tripx. Let us take care of the details so you can focus on enjoying your adventure. Your dream vacation is just a click away!
        </p>
      </section>
    </div>
  );
};

export default About;
