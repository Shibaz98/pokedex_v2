import './App.css';
import React, { useCallback, useState } from 'react';
import SearchBar from './searchBar/searchBar';
import SearchResult from './SearchResult/SearchResult';
import pokemon from './Util/pokemon';

function App() {

  const [searchResults, setSearchResults] = useState([]); 



const search = (term) =>{
  
  pokemon.search(term).then(setSearchResults);
  
  
};

  return (
    <div className="App">
      <h1>React Pokedex-v2</h1>
      <SearchBar search={search}/> 
      <div className='SearchResultSection'>
        <SearchResult pokemon={searchResults}/>
      </div>
    </div>
  );
}

export default App;
