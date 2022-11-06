import { Card } from "../components/card";

import nature from "../assets/nature.jpg";
import dandelion from "../assets/dandelion.jpg";

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
      </main>
    </>

  );
}

// https://v1.tailwindcss.com/components/cards
// https://xhalr.com/
// https://www.calm.com/breathe

export { Home };
