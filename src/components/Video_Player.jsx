import React from "react";

export const Video_Player = ({ src }) => {
  return (
    <>
      <div className="video-container">
        <video
          src={src}
          className="video-player"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
    </>
  );
};
