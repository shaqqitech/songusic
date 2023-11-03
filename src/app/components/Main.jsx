import Image from "next/image";
import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import MainImage from "../../../public/assets/main.png";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <main className="w-screen h-screen relative bg-gradient-to-r from-purple-900 to-pink-900 overflow-hidden">
      <div className="absolute lg:px-20 px-5 py-4 w-full z-50">
        <Navbar />
      </div>
      <div className="w-full h-screen md:grid md:grid-cols-2 relative">
        {/* Text Content */}
        <div className="w-full h-full top-0 left-0 opacity-90 absolute lg:relative z-10">
          <div className="w-full h-full flex flex-col justify-center items-center lg:text-start md:px-20 text-center px-2 space-y-10 md:space-y-16 lg:space-y-6 bg-black/40 lg:bg-transparent">
            <h1 className="font-extrabold text-4xl lg:text-5xl text-white lg:text-start">
              BEST MUSIC FOR YOUR NEXT PROJECT
            </h1>
            <p className="w-5/6 md:w-full mt-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, qui
              aliquid. Quas, quam fugiat sequi corrupti explicabo suscipit ab
              accusantium porro.
            </p>
            <div className=" lg:w-full  flex flex-col md:flex-row justify-start items-center space-y-3 md:space-y-0 md:space-x-10">
              <button className="flex justify-around items-center text-white px-4 py-3 rounded-full w-44 font-bold bg-gradient-to-l hover:bg-gradient-to-r from-red-700 to-rose-700">
                Let's Start <BsArrowRight size={20} />
              </button>
              <p className="text-white font-semibold flex justify-around items-center cursor-pointer">
                <BsArrowLeft /> Play Demo
              </p>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className="w-full h-full absolute lg:relative z-0">
          <Image
            src={MainImage}
            alt="Home Picture"
            //   layout="fill" // Make the image cover the entire container
            sizes="100%"
            objectFit="cover" // Cover the container with the image
            className="w-full h-full -bottom-10 absolute  "
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
