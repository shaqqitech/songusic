import React from 'react';
import {
  FaMusic,
  FaHeadphones,
  FaMicrophone,
  FaGuitar,
  FaDrum,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto p-4 flex flex-wrap justify-center lg:justify-between">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p>123 Main Street</p>
          <p>City, State ZIP Code</p>
          <p>Email: example@email.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul>
            <li>
              <FaMusic className="text-lg inline mr-2" />
              Music
            </li>
            <li>
              <FaHeadphones className="text-lg inline mr-2" />
              Headphones
            </li>
            <li>
              <FaMicrophone className="text-lg inline mr-2" />
              Microphones
            </li>
            <li>
              <FaGuitar className="text-lg inline mr-2" />
              Guitars
            </li>
            <li>
              <FaDrum className="text-lg inline mr-2" />
              Drums
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6">
          <h2 className="text-xl font-semibold mb-4">Social Media</h2>
          <div className="flex space-x-4">
            <a href="#">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
