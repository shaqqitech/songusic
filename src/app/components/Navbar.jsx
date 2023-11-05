"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";
import { acme } from '../fonts'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggle = () => {
    setToggleMenu(!toggleMenu); // Simplified the toggle function
  };

  return (
    <>
<main className="hidden md:flex justify-between items-center px-5">
  <Link href={"/"} className={`font-bold text-4xl text-white ${acme.className}`}>
    Song<span className="text-rose-600">usic</span>
  </Link>
  <ul className="flex justify-center items-center space-x-4 text-white">
    <li>Albums</li>
    <li>Reviews</li>
    <li>Contact</li>
    <li>About</li>
  </ul>
  <div className="space-x-5">
    <button className="px-3 py-1 rounded-full text-white">Sign Up</button>
    <button className="px-4 py-1 rounded-full bg-gradient-to-l hover:bg-gradient-to-r from-red-700 to-rose-700 text-white">
      Log In
    </button>
  </div>
</main>


      <main className="md:hidden flex justify-between items-center">
        <Link href={"/"}
           className="font-bold text-3xl text-white">Song<span className="text-rose-600">usic</span>
        </Link>
        <div className="relative" onClick={toggle}>
          {toggleMenu ? (
            <RiCloseLine size={30} className="text-white" />
          ) : (
            <BiMenuAltRight size={30} className="text-white" />
          )}

          <ul className={`${toggleMenu ? 'block' : 'hidden'} absolute right-1 top-10 text-center bg-white text-lg space-y-1 py-3 px-2 rounded-lg`}>
            <li>Albums</li>
            <li>Reviews</li>
            <li>Contact</li>
            <li>About</li>
            <ul className="space-y-3 mt-5 bg-slate-100 py-2 font-semibold">
              <li>Sign Up</li>
              <li>Log In</li>
            </ul>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Navbar;
