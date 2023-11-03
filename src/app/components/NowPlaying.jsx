'use client'
import React from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const NowPlaying = () => {
  const handlePlayPause = () => {
    // Add your play/pause functionality here
  };

  const handleVolumeToggle = () => {
    // Add your volume toggle functionality here
  };

  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">Now Playing</h2>
          <p>Song Title - Artist</p>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={handlePlayPause}>
            <FaPlay className="text-3xl" />
          </button>
          <button onClick={handleVolumeToggle}>
            <FaVolumeUp className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
