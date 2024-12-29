import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = videojs(videoRef.current, {
      controls: true,
      autoplay: true,
      loop: true,
      muted: true,
    });

    return () => player.dispose();
  }, []);

  return (
    <video
      ref={videoRef}
      className="video-js"
      data-setup='{}'
    >
      <source src="/media-content/Golden-Welcome.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
