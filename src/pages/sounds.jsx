import React from 'react'
import AudioPlayer from '../components/audioPlayer'
import ReactAudioPlayer from "react-audio-player";


function Sounds() {
  return (
    <ul>
      <AudioPlayer name="Morning Birds" description="The sounds of morning birds" style=""/>
      <AudioPlayer name="Heavy Rain" description="A long and realaxing heavy rain" style=""/>
      <AudioPlayer name="Aura" description="Perfect for a meditation" style=""/>
      <AudioPlayer name="Rain and thunderstorm" description="A relaxing rain with thunders" style=""/>
      <AudioPlayer name="Nature" description="Free yourself" style=""/>
       
    </ul>
  );
}

export default Sounds