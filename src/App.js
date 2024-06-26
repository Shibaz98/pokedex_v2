import './App.css';
import React, { useCallback, useState } from 'react';
import SearchBar from './searchBar/searchBar';
import SearchResult from './SearchResult/SearchResult';
import pokemon from './Util/pokemon';
import Collection from './Collection/Collection';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [starter, setStarter] = useState([]);
  
  
const getPokemon = (pokemon) =>{

  setStarter(prev =>{
    if (prev.length < 3){
      return [...prev, pokemon]
    } else {
      alert('can only choose 3')
    }
  });
}; 

const search = (term) =>{
  pokemon.search(term).then(setSearchResults);
};

  return (
    <div className="App">
      <h1>React Pokedex-v2</h1>
      <SearchBar search={search}/> 
      <div className='SearchResultSection'>
        <SearchResult pokemon={searchResults} getPokemon={getPokemon}/>
      </div>
      <div className='CollectionSection'>
        <Collection starter={starter}/>
      </div>
    </div>
  );
}

export default App;
