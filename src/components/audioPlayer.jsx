import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

function AudioPlayer({ name, description, style }) {
  return (
    <div className={style}>
      <div className="text-center grid h-30">
        <h2 className="text-slate-200 text-2xl pt-10">{name}</h2>
        <h3 className="text-slate-400 text-lg">{description}</h3>
        <ReactAudioPlayer src={`../../sounds/${name}.m4a`} controls />
      </div>
    </div>
  );
}

export { AudioPlayer }