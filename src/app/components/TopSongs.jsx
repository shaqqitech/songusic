import React from "react";
import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";
import Shaan from '../../../public/assets/clients/shan.webp'
import Neeti from '../../../public/assets/clients/neetimohan.webp'
import Asha from '../../../public/assets/clients/ashabhosle.webp'
import Beyonce from '../../../public/assets/clients/beyonce.webp'
import Chris from '../../../public/assets/clients/chrisbrown.webp'
import Justin from '../../../public/assets/clients/JustinBieber.webp'
import LadyGaga from '../../../public/assets/clients/ladygaga.webp'
import Madona from '../../../public/assets/clients/madona.webp'
import Shreya from '../../../public/assets/clients/shreya.webp'
import Taylor from '../../../public/assets/clients/TaylorSwift.webp'

const TopSongs = () => {
  const data = [
    {
      songName: "Song Name",
      artistName: "Shaan",
      profileIamge: Shaan,
      description: "Song description",
    },
    {
      songName: "Song Name",
      artistName: "Neet Mohan",
      profileIamge: Neeti,
      description: "Song description",
    },
    {
      songName: "Song Name",
      artistName: "Asha Bhosle",
      profileIamge: Asha,
      description: "Song description",
    },
    {
      songName: "Song Name",
      artistName: "Beyonce",
      profileIamge: Beyonce,
      description: "Song description",
    },
    {
      songName: "Song Name",
      artistName: "Chris Brown",
      profileIamge: Chris,
      description: "Song description",
    },
    {
      songName: "Song Name",
      artistName: "Justin Bieber",
      profileIamge: Justin,
      description: "Song description",
    },
    {
      songName: "Song Name",
      artistName: "Lady Gaga",
      profileIamge: LadyGaga,
      description: "Song description",
    },
    {
      songName: "Song Name",
      artistName: "Taylor Swift",
      profileIamge: Taylor,
      description: "Song description",
    },
    {
      songName: "Song Name",
      artistName: "Madona",
      profileIamge: Madona,
      description: "Song description",
    },
    {
      songName: "Song Name",
      artistName: "Shreya Ghoshal",
      profileIamge: Shreya,
      description: "Song description",
    },
  ];

  return (
    <main className="w-full p-4 md:p-10 grid place-content-center bg-gradient-to-r from-indigo-950 to-blue-950">
      <h1 className="w-full text-center text-white font-bold text-4xl">
        Top Songs
      </h1>
      <div className=" w-screen px-5 lg:px-52 grid grid-cols-1 md:grid-cols-2 gap-10 mt-7">
        {data.map((item, ind) => {
          return (
            <>
              <div className="bg-gradient-to-l from-red-500 to-rose-700 hover:scale-105 duration-200 rounded-xl w-full flex justify-between items-center px-3 py-2">
                <div className="w-3/4 flex justify-start space-x-7 text-white items-center">
                  <Image
                    src={item.profileIamge}
                    alt="Singer"
                    width={1}
                    height={1}
                    sizes="100%"
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex justify-start flex-col items-center"> 
                    <h1 className="font-semibold">{item.artistName}</h1>
                    <h1>{item.songName}</h1>
                  </div>
                </div>
                <div className="cursor-pointer text-white"><AiFillPlayCircle size={35} /></div>
              </div>
            </>
          );
        })}
      </div>
    </main>
  );
};

export default TopSongs;
