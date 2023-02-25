import React from 'react';
import { getDogs } from '../service/doguinho-service';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <div className='header'>
        <h1>🐶 Doguinhos 😭</h1>
      </div>
      
      
      <img className='dog' src='https://images.dog.ceo/breeds/dachshund/dachshund-7.jpg' ></img>
    
      <button className='button-search'> 🔍 Buscar outro doguinho</button>
    </div>
  );
}

export default App;
