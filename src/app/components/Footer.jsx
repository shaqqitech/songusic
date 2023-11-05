import Link from 'next/link';
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
    <footer className="bg-gray-900 text-white py-8 grid place-content-center text-center" >
      <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-content-center">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <address className='text-center md:text-start space-y-3 '>
            <p>123 Main Street</p>
            <p>City, State ZIP Code</p>
            <p>Email: example@email.com</p>
            <p>Phone: (123) 456-7890</p>
          </address>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <ul className='grid place-content-center space-y-3'>
            <li className="flex items-center mb-2 cursor-pointer hover:text-rose-500">
              <FaMusic className="text-2xl mr-2" />
              Music
            </li>
            <li className="flex items-center mb-2 cursor-pointer hover:text-rose-500">
              <FaHeadphones className="text-2xl mr-2" />
              Headphones
            </li>
            <li className="flex items-center mb-2 cursor-pointer hover:text-rose-500">
              <FaMicrophone className="text-2xl mr-2" />
              Microphones
            </li>
            <li className="flex items-center mb-2 cursor-pointer hover:text-rose-500">
              <FaGuitar className="text-2xl mr-2" />
              Guitars
            </li>
            <li className="flex items-center mb-2 cursor-pointer hover:text-rose-500">
              <FaDrum className="text-2xl mr-2" />
              Drums
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Social Media</h2>
          <div className="flex justify-center items-center flex-row space-x-4">
            <Link href="#" className="text-3xl hover:text-rose-400">
              <FaFacebook />
            </Link>
            <Link href="#" className="text-3xl hover:text-rose-400">
              <FaTwitter />
            </Link>
            <Link href="#" className="text-3xl hover:text-rose-400">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
