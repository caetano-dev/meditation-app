import Header from "./components/header";
import Card from "./components/card";

import nature from "./assets/nature.jpg";
import dandelion from "./assets/dandelion.jpg";

function App() {
  return (
      <>
      <Header />

      <main className="flex flex-wrap items-center justify-center h-screen">
        <Card
          image={nature}
          title="Nature sounds 🌲"
          description="Meditate and calm your mind with this collection of sounds from nature."
        />
        <Card
          image={dandelion}
          title="Deep breath 💨"
          description="Calm yourself by following this relaxing assisted breath."
        />
      </main>
      </>
 
  );
}

// https://v1.tailwindcss.com/components/cards
// https://xhalr.com/
// https://www.calm.com/breathe

export default App;
