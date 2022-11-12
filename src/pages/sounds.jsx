import React from 'react'
import { AudioPlayer } from "../components/audioPlayer";

function Sounds() {
  return (
    <>
      <AudioPlayer
        name="Morning Birds"
        description="The sounds of morning birds"
        style="bg-gradient-to-br from-blue-600 to-green-500 rounded-lg m-4"
      />
      <AudioPlayer
        name="Heavy Rain"
        description="A long and realaxing heavy rain"
        style=" bg-gradient-to-tr from-blue-700 via-slate-600 to-neutral-900 rounded-lg m-4"
      />
      <AudioPlayer
        name="Aura"
        description="Perfect for a meditation"
        style="bg-gradient-to-tr from-stone-900 via-purple-900 to-sky-400 rounded-lg m-4"
      />
      <AudioPlayer
        name="Rain and thunderstorm"
        description="A relaxing rain with thunders"
        style="bg-gradient-to-br from-neutral-900 to-blue-900 rounded-lg m-4"
      />
      <AudioPlayer
        name="Nature"
        description="Mindfulness with nature"
        style="bg-gradient-to-tr from-emerald-900 to-lime-500 rounded-lg m-4"
      />
    </>
  );
}

export { Sounds };