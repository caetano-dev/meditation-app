import './App.css'
import Welcome from './components/welcome'
import SessionBox from './components/sessionBox'

function App() {

  return (
    <div className="App bg-gradient-to-b from-green-700 to-green-700 w-screen h-screen border-2">
      <div className="w-screen border-2 flex justify-center">
        <Welcome/>
      </div>
        <SessionBox title="Sounds" description="Listen to relaxing sounds"/>
        <SessionBox title="Deep breath" description="Calm yourself with a deep breath"/>
    </div>
  );
}

export default App
