import { useEffect, useState } from "react";
import { getDogs } from '../service/doguinho-service';
import './App.css';

function App() {
  const [doguinho, setDoguinho] = useState("");

  async function getNewDog (){
    const dog = await getDogs();
    setDoguinho(dog)
  }

  useEffect(() => {
    const getDog = async () => {
      getNewDog()
    }

    getDog()
  }, []);

  return (
    <div className="App">
      <div className='header'>
        <h1>🐶 Doguinhos 😭</h1>
      </div>
      <img className='dog' src={doguinho} ></img>
    
      <button className='button-search' onClick={async () => {await getNewDog();}} > 🔍 Buscar outro doguinho</button>
    </div>
  );
}

export default App;
