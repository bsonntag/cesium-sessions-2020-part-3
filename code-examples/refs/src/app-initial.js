import React from 'react';

export function App() {
  return (
    <div>
      <div>
        <video
          muted
          height='200'
          src='https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_2mb.mp4'
        />
      </div>

      <button>Play/Pause</button>
    </div>
  );
}
