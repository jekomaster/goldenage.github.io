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
      <source src="/media-content/golden-welcome.webm" type="video/webm" />
      <source src="/media-content/golden-welcome.ogv" type="video/ogg" />
  Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
