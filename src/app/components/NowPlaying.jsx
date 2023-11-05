'use client'
import React, { useState } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const NowPlaying = () => {
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(false);

  const handlePlayPause = () => {
    // Add your play/pause functionality here
    setPlay(!play);
  };

  const handleVolumeToggle = () => {
    // Add your volume toggle functionality here
    setMute(!mute);
  };

  return (
    <div className="bg-gradient-to-l from-red-950 to-cyan-950 text-white py-8 h-20 px-4 flex justify-center items-center z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">Now Playing</h2>
          <p>Song Title - Artist</p>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={handlePlayPause}>
            {play ? <FaPlay className="text-2xl" /> : <FaPause className="text-2xl" />}
          </button>
          <button onClick={handleVolumeToggle}>
            {mute ? <FaVolumeMute className="text-2xl" /> : <FaVolumeUp className="text-2xl" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
