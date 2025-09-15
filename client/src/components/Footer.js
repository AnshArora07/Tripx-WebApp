import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Tripx4 from "../Images/Tripx4.png";

const Footer = () => {
    return (
        <footer className="bg-deepBlue text-white py-10">
            <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and Description */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <img src={Tripx4} alt="Tripx Logo" className="w-20 mb-4" />
                    <p className="text-sm">Explore the world with Tripx.</p>
                    <p className="text-sm">Your adventure starts here.</p>
                </div>

                {/* Links */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        {['Home', 'Destinations', 'Packages', 'About', 'Contact Us'].map((link) => (
                            <li key={link} className="hover:underline hover:text-lightbBlue500">
                                <Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact and Social Media */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                    <p className="text-sm">123 Chitkara University, Rajpura Punjab</p>
                    <p className="text-sm">Email: support@tripx.com</p>
                    <p className="text-sm mb-4">Phone: +1 (555) 123-4567</p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <Link to="#" className="text-lightbBlue hover:text-blue-300">
                            <FaFacebookF />
                        </Link>
                        <Link to="#" className="text-lightbBlue hover:text-blue-300">
                            <FaTwitter />
                        </Link>
                        <Link to="#" className="text-lightbBlue hover:text-blue-300">
                            <FaInstagram />
                        </Link>
                        <Link to="#" className="text-lightbBlue hover:text-blue-300">
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Tripx. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
