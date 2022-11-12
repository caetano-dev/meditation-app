import React from 'react'
import { AudioPlayer } from "../components/audioPlayer";

function Timers() {
  return (
    <>
      <AudioPlayer
        name="10 Minutes"
        description="A 10 minute meditation"
        style="bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg m-4"
      />
      <AudioPlayer
        name="20 Minutes"
        description="A 20 minute meditation"
        style="bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg m-4"
      />
      <AudioPlayer
        name="30 Minutes"
        description="A 30 minute meditation"
        style="bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg m-4"
      />
      <AudioPlayer
        name="1 Hour"
        description="A 1 hour meditation"
        style="bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg m-4"
      />
      <AudioPlayer
        name="2 Hours"
        description="A 1 hour and 30 minute meditation"
        style="bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg m-4"
      />
    </>
  );
}

export { Timers };