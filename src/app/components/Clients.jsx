"use client";
import React, { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Logo1 from '../../../public/assets/clients/logo1.png'
import Logo2 from '../../../public/assets/clients/logo2.png'
import Logo3 from '../../../public/assets/clients/logo3.png'
import Logo4 from '../../../public/assets/clients/logo4.png'
import Logo5 from '../../../public/assets/clients/logo5.png'
import Logo6 from '../../../public/assets/clients/logo6.png'
import Logo7 from '../../../public/assets/clients/logo7.png'
import Logo8 from '../../../public/assets/clients/logo8.png'
import Logo9 from '../../../public/assets/clients/logo9.png'
import Logo10 from '../../../public/assets/clients/logo10.png'
import Image from "next/image";

const Clients = () => {
  const scrollContainer = useRef(null);

  const data = [
    { img:  Logo4},
    { img:  Logo5},
    { img:  Logo6},
    { img:  Logo7},
    { img:  Logo8},
    { img:  Logo9},
    { img:  Logo2},
    { img:  Logo1},
    { img:  Logo10},
    { img:  Logo3},
  ];

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  return (
    <main className="w-full bg-gradient-to-r from-gray-700 to-gray-900 p-10 text-white grid place-content-center ">
      <h1 className="font-bold text-4xl mb-4 text-center">Happy Clients</h1>
      <div className="w-screen h-full py-5  flex justify-between ">
        <div className="w-[4%] h-full flex flex-col justify-center items-center space-y-1 font-bold rounded-tr-xl rounded-br-xl bg-gray-800">
            <p>C</p>
            <p>L</p>
            <p>I</p>
            <p>E</p>
            <p>N</p>
            <p>T</p>
            <p>S</p>
        </div>
        <div className="w-[96%] relative">
          <MdChevronLeft
            size={40}
            className="bg-white left-0 cursor-pointer rounded-full absolute opacity-50 hover:opacity-100 z-50 text-black top-1/2 transform -translate-y-1/2"
            onClick={scrollLeft}
          />
          <div
            ref={scrollContainer}
            className="flex overflow-x-auto scrollbar-hide whitespace-nowrap scroll-smooth space-x-5 ml-4"
            style={{ minWidth: "100%" }}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col rounded-xl items-center text-center cursor-pointer"
              >
                <div
                  className={`w-52 h-52  bg-cover bg-center rounded-xl`}
                >
                  <Image src={item.img} alt="Clients" width={1} height={1} sizes="100%" className="w-full h-full bg-cover bg-no-repeat rounded-xl p-5" />
                </div>
              </div>
            ))}
          </div>
          <MdChevronRight
            size={40}
            className="bg-white right-0 cursor-pointer rounded-full absolute opacity-50 hover:opacity-100 z-50 text-black top-1/2 transform -translate-y-1/2"
            onClick={scrollRight}
          />
        </div>
      </div>
    </main>
  );
};

export default Clients;
