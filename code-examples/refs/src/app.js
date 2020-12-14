import React, { useRef, useState } from 'react';

export function App() {
  const ref = useRef(null);
  const [isPlaying, setPlaying] = useState(false);

  return (
    <div>
      <div>
        <video
          ref={ref}
          muted
          height='200'
          src='https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_5mb.mp4'
        />
      </div>

      <button
        onClick={() => {
          if (isPlaying) {
            ref.current.pause();
          } else {
            ref.current.play();
          }
          setPlaying(!isPlaying);
        }}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      <button
        onClick={() => {
          ref.current.currentTime = 0;
        }}
      >
        Reset
      </button>
    </div>
  );
}
