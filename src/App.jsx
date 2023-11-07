import { useState, useEffect } from 'react'

import './App.css'


function App() {
  const [pokeArray, setPokeArray] = useState([]); 
  const [error, setError] = useState(null);

  useEffect(() => {

    async function gottaFetchEmAll() {
      try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        setPokeArray(data.results);
        
      }
        
       catch (error) {
        setError(error)
        console.error(error);
        
      }
    }
    gottaFetchEmAll();
  }, [])


  return (
    <>
    <h1>My Pokemon</h1>
    {!error ?

    <ul>
      {pokeArray.map((pokemon) => {
        return <li key={pokemon.name}>{pokemon.name}</li>
      })}
      </ul>
      :
      <p>Pokemon not available :(</p>
    }
      
  
      
      
    </>
  )
}

export default App
