import './App.css';
import React, { useCallback, useState } from 'react';
import SearchBar from './searchBar/searchBar';
import SearchResult from './SearchResult/SearchResult';
import pokemon from './Util/pokemon';
import Collection from './Collection/Collection';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [starter, setStarter] = useState([]);

  // plan is to now add a remove button 
  
  
const getPokemon = (pokemon) =>{
  if(starter.length < 3){
    setStarter((prev) => [...prev, pokemon])
  } else {
    alert('Can only choose 3 Pokemon')
  }; 
}; 

const search = (term) =>{
  pokemon.search(term).then(setSearchResults);
};

const removePokemon = (pokemon) =>{
  setStarter((prevPokemon) => prevPokemon.filter((currentPokemon) => currentPokemon.name !== pokemon.name))
};

  return (
    <div className="App">
      <h1>React Pokedex-v2</h1>
      <SearchBar search={search}/> 
      <div className='SearchResultSection'>
        <SearchResult pokemon={searchResults} getPokemon={getPokemon}/>
      </div>
      <div className='CollectionSection'>
        <Collection starter={starter} removePokemon={removePokemon}/>
      </div>
    </div>
  );
}

export default App;
