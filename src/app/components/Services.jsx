import React from "react";
import { BsSoundwave, BsShuffle } from "react-icons/bs";
import { RiSpeakFill, RiSoundModuleFill } from "react-icons/ri";

const Services = () => {
  return (
    <main className="w-full p-10 relative grid place-content-center bg-gray-950 space-y-8">
      <h1 className="font-bold text-3xl text-white text-center">
        Check out my services
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-10 text-white">
        <div className="w-52 h-52 p-5 bg-gradient-to-l from-red-500 to-rose-700 hover:scale-105 duration-200 cursor-pointer rounded-lg flex flex-col justify-start items-start space-y-3">
          <BsSoundwave size={25} />
          <h1 className="font-bold text-2xl">Beats</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="w-52 h-52 p-5 bg-gradient-to-l from-red-500 to-rose-700 hover:scale-105 duration-200 cursor-pointer rounded-lg flex flex-col justify-start items-start space-y-3">
          <RiSpeakFill size={25} />
          <h1 className="font-bold text-2xl">Vocals</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="w-52 h-52 p-5 bg-gradient-to-l from-red-500 to-rose-700 hover:scale-105 duration-200 cursor-pointer rounded-lg flex flex-col justify-start items-start space-y-3">
          <BsShuffle size={25} />
          <h1 className="font-bold text-2xl">Mixng</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="w-52 h-52 p-5 bg-gradient-to-l from-red-500 to-rose-700 hover:scale-105 duration-200 cursor-pointer rounded-lg flex flex-col justify-start items-start space-y-3">
          <RiSoundModuleFill size={25} />
          <h1 className="font-bold text-2xl">Mastering</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </main>
  );
};

export default Services;
