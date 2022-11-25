import { Card } from "../../components/card";

import nature from "../../assets/nature.jpg";
import dandelion from "../../assets/dandelion.jpg";
import clock from "../../assets/clock.jpg";

function Home() {
  return (
    <>
      <main className="flex flex-wrap items-center justify-center h-screen">
        <Card
          image={nature}
          alt="Image of nature"
          title="Nature sounds 🌲"
          description="Meditate and calm your mind with this collection of sounds from nature."
          linkTo="sounds"
        />
        <Card
          image={dandelion}
          alt="Image of dandelion"
          title="Deep breath 💨"
          description="Calm yourself by following this relaxing assisted breath."
          linkTo="breath"
        />
        <Card
          image={clock}
          alt="Image of dandelion"
          title="Timers ⏳"
          description="In case you need to track your time for a meditation."
          linkTo="timers"
        />
      </main>
    </>

  );
}

// https://v1.tailwindcss.com/components/cards
// https://xhalr.com/
// https://www.calm.com/breathe

export { Home };
