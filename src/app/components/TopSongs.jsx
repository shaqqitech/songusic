"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import Shaan from "../../../public/assets/topsongs/shan.webp";
import Neeti from "../../../public/assets/topsongs/neetimohan.webp";
import Asha from "../../../public/assets/topsongs/ashabhosle.webp";
import Beyonce from "../../../public/assets/topsongs/beyonce.webp";
import Chris from "../../../public/assets/topsongs/chrisbrown.webp";
import Justin from "../../../public/assets/topsongs/JustinBieber.webp";
import LadyGaga from "../../../public/assets/topsongs/ladygaga.webp";
import Madona from "../../../public/assets/topsongs/madona.webp";
import Shreya from "../../../public/assets/topsongs/shreya.webp";
import Taylor from "../../../public/assets/topsongs/TaylorSwift.webp";
import NowPlaying from "./NowPlaying";

const TopSongs = () => {
  const [playingId, setPlayingId] = useState(null);

  const data = [
    {
      id: 1,
      songName: "Song Name",
      artistName: "Shaan",
      profileIamge: Shaan,
      description: "Song description",
    },
    {
      id: 2,
      songName: "Song Name",
      artistName: "Neet Mohan",
      profileIamge: Neeti,
      description: "Song description",
    },
    {
      id: 3,
      songName: "Song Name",
      artistName: "Asha Bhosle",
      profileIamge: Asha,
      description: "Song description",
    },
    {
      id: 4,
      songName: "Song Name",
      artistName: "Beyonce",
      profileIamge: Beyonce,
      description: "Song description",
    },
    {
      id: 5,
      songName: "Song Name",
      artistName: "Chris Brown",
      profileIamge: Chris,
      description: "Song description",
    },
    {
      id: 6,
      songName: "Song Name",
      artistName: "Justin Bieber",
      profileIamge: Justin,
      description: "Song description",
    },
    {
      id: 7,
      songName: "Song Name",
      artistName: "Lady Gaga",
      profileIamge: LadyGaga,
      description: "Song description",
    },
    {
      id: 8,
      songName: "Song Name",
      artistName: "Taylor Swift",
      profileIamge: Taylor,
      description: "Song description",
    },
    {
      id: 9,
      songName: "Song Name",
      artistName: "Madona",
      profileIamge: Madona,
      description: "Song description",
    },
    {
      id: 10,
      songName: "Song Name",
      artistName: "Shreya Ghoshal",
      profileIamge: Shreya,
      description: "Song description",
    },
  ];

  const playPause = (id) => {
    if (playingId === id) {
      // If the same item is clicked, pause it
      setPlayingId(null);
    } else {
      // If a different item is clicked, play it
      setPlayingId(id);
    }
  };

  const cross = () => {
    setPlayingId(null);
  };

  return (
    <main className="w-full p-4 md:p-10 grid place-content-center bg-gradient-to-r from-red-950 to-cyan-950">
      <h1 className="w-full text-center text-white font-bold text-4xl">
        Top Songs
      </h1>
      <div className="w-screen px-5 lg:px-52 grid grid-cols-1 md:grid-cols-2 gap-10 mt-7">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-l from-red-500 to-rose-700 hover:scale-105 duration-200 rounded-xl w-full flex justify-between items-center px-3 py-2 cursor-pointer"
            onClick={() => playPause(item.id)}
          >
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
            <div className="text-white">
              {playingId === item.id ? (
                <AiFillPauseCircle size={35} />
              ) : (
                <AiFillPlayCircle size={35} />
              )}
            </div>
          </div>
        ))}
        <div
          className={`fixed bottom-0 left-0 w-full ${
            playingId === null ? "hidden" : "block"
          }`}
        >
          <ImCross
            size={10}
            className="fixed bottom-24 right-4 text-white cursor-pointer"
            onClick={cross}
          />
          <div>
            <NowPlaying />
          </div>
        </div>
      </div>
    </main>
  );
};

export default TopSongs;
