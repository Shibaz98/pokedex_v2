import './App.css';
import React, { useState } from 'react';
import SearchBar from './searchBar/searchBar';
import SearchResult from './SearchResult/SearchResult';
import pokemon from './Util/pokemon';

function App() {

  const [searchResults, setSearchResults] = useState([]); 



const search = (term) =>{
  
  pokemon.search(term).then(setSearchResults);
  console.log(searchResults)
  
};

  return (
    <div className="App">
      <h1>React Pokedex-v2</h1>
      <SearchBar search={search}/> 
      <div className='SearchResultSection'>
        <SearchResult/>
      </div>
    </div>
  );
}

export default App;
