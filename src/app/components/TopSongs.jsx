import React from "react";
import MainImage from "../../../public/assets/main.png";
import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";

const TopSongs = () => {
  const data = [
    {
      songName: "Song Name",
      artistName: "Snger Name",
      profileIamge: MainImage,
      description: "Song description",
    },
    {
      songName: "Song Name",
      artistName: "Snger Name",
      profileIamge: MainImage,
      description: "Song description",
    },
    {
      songName: "Song Name",
      artistName: "Snger Name",
      profileIamge: MainImage,
      description: "Song description",
    },
    {
      songName: "Song Name",
      artistName: "Snger Name",
      profileIamge: MainImage,
      description: "Song description",
    },
    {
      songName: "Song Name",
      artistName: "Snger Name",
      profileIamge: MainImage,
      description: "Song description",
    },
    {
      songName: "Song Name",
      artistName: "Snger Name",
      profileIamge: MainImage,
      description: "Song description",
    },
    {
      songName: "Song Name",
      artistName: "Snger Name",
      profileIamge: MainImage,
      description: "Song description",
    },
    {
      songName: "Song Name",
      artistName: "Snger Name",
      profileIamge: MainImage,
      description: "Song description",
    },
    {
      songName: "Song Name",
      artistName: "Snger Name",
      profileIamge: MainImage,
      description: "Song description",
    },
    {
      songName: "Song Name",
      artistName: "Snger Name",
      profileIamge: MainImage,
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
                    <h1>{item.artistName}</h1>
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
