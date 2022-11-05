import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

function AudioPlayer({name, description, style}) {
  return (
    <div className={style}>
      <h2>{name}</h2>
      <h3>{description}</h3>
      <ReactAudioPlayer src={`../../sounds/${name}.mp4`} controls />
    </div>
  );
}

export default AudioPlayer