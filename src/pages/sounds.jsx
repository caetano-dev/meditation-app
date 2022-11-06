import React from 'react'
import { AudioPlayer } from '../components/audioPlayer'


function Sounds() {
  return (
    <>
      <AudioPlayer name="Morning Birds" description="The sounds of morning birds" />
      <AudioPlayer name="Heavy Rain" description="A long and realaxing heavy rain" />
      <AudioPlayer name="Aura" description="Perfect for a meditation" />
      <AudioPlayer name="Rain and thunderstorm" description="A relaxing rain with thunders" />
      <AudioPlayer name="Nature" description="Free yourself" />
    </>
  );
}

export { Sounds }