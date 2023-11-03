"use client";
import React, { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Clients = () => {
  const scrollContainer = useRef(null);

  const data = [
    { name: "John" },
    { name: "John" },
    { name: "John" },
    { name: "John" },
    { name: "John" },
    { name: "John" },
    { name: "John" },
    { name: "John" },
    { name: "John" },
    { name: "John" },
    { name: "John" },
    { name: "John" },
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
    <main className="w-full bg-black p-10 text-white grid place-content-center ">
      <h1 className="font-bold text-4xl mb-4 text-center">Happy Clients</h1>
      <div className="w-screen h-full py-5  flex justify-between ">
        <div className="w-[3%] h-full flex flex-col justify-center items-center space-y-1 font-bold rounded-tr-xl rounded-br-xl bg-gray-800">
            <p>C</p>
            <p>L</p>
            <p>I</p>
            <p>E</p>
            <p>N</p>
            <p>T</p>
            <p>S</p>
        </div>
        <div className="w-[97%] relative">
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
                className="flex flex-col border-2 rounded-xl items-center text-center cursor-pointer"
              >
                <div
                  className={`w-52 h-52 ${item.name} bg-cover bg-center rounded-xl p-5`}
                >
                  {/* <Image src={item.img} width={1} height={1} sizes="100%" className="w-full h-full bg-cover bg-no-repeat hover:scale-110 duration-150 transition-all ease-in-out" /> */}
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
