import './App.css'
import Welcome from './components/welcome'
import SessionBox from './components/sessionBox'
import natureIcon from './assets/natureIcon.png'
import wind from './assets/wind.png'

function App() {

  return (
    <div className="App bg-gradient-to-b from-green-700 to-green-700 w-screen h-screen border-2">
      <div className="w-screen border-2 flex justify-center">
        <Welcome />
      </div>
      <div className>
        <SessionBox
          title="Sounds"
          image="bg-[url('./assets/natureIcon.png')] bg-center w-2/4 h-2/4"
          description="Listen to relaxing sounds"
        />
        <SessionBox
          title="Deep breath"
          image="bg-[url('./assets/wind.png')]"
          description="Calm yourself with a deep breath"
        />
      </div>
    </div>
  );
}

export default App
