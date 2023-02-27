import { useEffect, useState } from "react";
import { getDogs } from '../service/doguinho-service';
import './App.css';

function App() {
  const [doguinho, setDoguinho] = useState("");
  const [loading, setLoading] = useState(true);

  async function getNewDog (){
    setLoading(true)
    const dog = await getDogs();
    setDoguinho(dog)
    setLoading(false)
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
    
      <button className='button-search' onClick={async () => {await getNewDog();}} >
        {loading 
          ? <span>Carregando</span> 
          :<span>🔍 Buscar outro doguinho</span>}
      </button>
    </div>
  );
}

export default App;
